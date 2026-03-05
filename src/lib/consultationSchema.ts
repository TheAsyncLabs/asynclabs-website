import { z } from "zod";

export const APP_TYPES = [
  { value: "mobile_ios_android", label: "Mobile App (iOS & Android)" },
  { value: "mobile_ios", label: "Mobile App (iOS only)" },
  { value: "mobile_android", label: "Mobile App (Android only)" },
  { value: "web_app", label: "Web Application" },
  { value: "pwa", label: "Progressive Web App (PWA)" },
  { value: "flutter_cross", label: "Cross-Platform (Flutter)" },
  { value: "enterprise", label: "Enterprise / Internal Tool" },
  { value: "ecommerce", label: "E-Commerce Platform" },
  { value: "healthtech", label: "HealthTech / MedApp" },
  { value: "edtech", label: "EdTech / Learning Platform" },
  { value: "fintech", label: "FinTech / Payments" },
  { value: "saas", label: "SaaS Product" },
  { value: "social", label: "Social / Community App" },
  { value: "marketplace", label: "Marketplace / On-Demand" },
  { value: "other", label: "Other" },
] as const;

export const BUDGET_OPTIONS = [
  { value: "under_10k", label: "Under $10K" },
  { value: "10k_25k", label: "$10K – $25K" },
  { value: "25k_50k", label: "$25K – $50K" },
  { value: "50k_100k", label: "$50K – $100K" },
  { value: "100k_plus", label: "$100K+" },
  { value: "not_sure", label: "Not sure yet" },
] as const;

export const TIMELINE_OPTIONS = [
  { value: "asap", label: "ASAP (< 1 month)" },
  { value: "1_2_months", label: "1–2 Months" },
  { value: "3_4_months", label: "3–4 Months" },
  { value: "5_6_months", label: "5–6 Months" },
  { value: "6_plus", label: "6+ Months" },
  { value: "flexible", label: "Flexible / No Rush" },
] as const;

export const CONTACT_OPTIONS = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone Call" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "video_call", label: "Video Call (Zoom/Meet)" },
] as const;

export const consultationSchema = z.object({
  // Step 1 – Personal Details
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Phone number is required"),
  company: z.string().optional(),

  // Step 2 – App Details
  appType: z.string().min(1, "Please select an app type"),
  appDescription: z.string().min(1, "Please briefly describe your app"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  preferredContact: z.string().min(1, "Please select a contact method"),

  // Step 3 – References & Additional Info
  referenceApp1: z.string().optional(),
  referenceApp2: z.string().optional(),
  referenceApp3: z.string().optional(),
  additionalInfo: z
    .string()
    .max(5000, "Maximum 5000 characters allowed")
    .optional(),
});

export type ConsultationFormData = z.infer<typeof consultationSchema>;
