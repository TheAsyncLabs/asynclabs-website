import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does it take to build a Flutter app?",
    a: "Timelines vary based on complexity. A typical MVP takes 8–12 weeks, while a full-featured app may take 16–24 weeks. We provide a detailed timeline during the Define phase.",
  },
  {
    q: "How much does app development cost?",
    a: "Costs depend on scope, features, and complexity. We offer transparent pricing after the initial consultation and provide detailed proposals before any commitment.",
  },
  {
    q: "Do I own the code and intellectual property?",
    a: "Absolutely. You own 100% of the source code, designs, and all intellectual property we create for you. Full ownership transfers upon project completion.",
  },
  {
    q: "What about post-launch maintenance?",
    a: "We offer ongoing support and maintenance plans to keep your app updated, secure, and performing at its best. Plans are flexible and tailored to your needs.",
  },
  {
    q: "Can you customize the app to our specific needs?",
    a: "Every project is custom-built from the ground up. We don't use templates — your app is uniquely designed and developed to match your exact requirements.",
  },
  {
    q: "Why choose Flutter over native development?",
    a: "Flutter allows us to build beautiful, natively compiled apps for iOS, Android, web, and desktop from a single codebase — reducing cost, time, and maintenance overhead.",
  },
];

const FAQ = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Common Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 bg-card">
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
