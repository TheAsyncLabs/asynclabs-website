import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, idea, budget, timeline, practice } = await req.json();

  if (!name || !email || !idea) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

  if (!slackWebhookUrl) {
    return NextResponse.json({ error: "Slack webhook not configured" }, { status: 500 });
  }

  const practiceLabel = typeof practice === "string" && practice ? practice : "Project";

  const slackMessage = {
    text: "New Contact Form Submission",
    blocks: [
      {
        type: "header",
        text: { type: "plain_text", text: `🚀 New ${practiceLabel} Inquiry` },
      },
      {
        type: "section",
        fields: [
          { type: "mrkdwn", text: `*Name:*\n${name}` },
          { type: "mrkdwn", text: `*Email:*\n${email}` },
          { type: "mrkdwn", text: `*Budget:*\n${budget || "Not specified"}` },
          { type: "mrkdwn", text: `*Timeline:*\n${timeline || "Not specified"}` },
        ],
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: `*Project Details:*\n${idea}` },
      },
      { type: "divider" },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: `Submitted at ${new Date().toLocaleString()}` }],
      },
    ],
  };

  try {
    const slackResponse = await fetch(slackWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(slackMessage),
    });

    if (!slackResponse.ok) {
      throw new Error(`Slack API error: ${slackResponse.statusText}`);
    }

    return NextResponse.json({ success: true, message: "Message sent to Slack" });
  } catch (error) {
    console.error("Error sending to Slack:", error);
    return NextResponse.json({ error: "Failed to send message to Slack" }, { status: 500 });
  }
}
