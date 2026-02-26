import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight } from "lucide-react";

const Contact = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="section-padding pt-32">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">Get in Touch</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">Contact Us</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Have an app idea? Let's talk about bringing it to life.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" className="rounded-xl" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" className="rounded-xl" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="idea">App Idea</Label>
            <Textarea id="idea" placeholder="Describe your app idea..." className="rounded-xl min-h-[120px]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Budget Range</Label>
              <Select>
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10k-25k">$10K – $25K</SelectItem>
                  <SelectItem value="25k-50k">$25K – $50K</SelectItem>
                  <SelectItem value="50k-100k">$50K – $100K</SelectItem>
                  <SelectItem value="100k+">$100K+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Timeline</Label>
              <Select>
                <SelectTrigger className="rounded-xl">
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-2months">1–2 Months</SelectItem>
                  <SelectItem value="3-4months">3–4 Months</SelectItem>
                  <SelectItem value="5-6months">5–6 Months</SelectItem>
                  <SelectItem value="6months+">6+ Months</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button size="lg" className="rounded-full w-full gap-2 group text-base">
            Send Message
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.form>
      </div>
    </section>
    <Footer />
  </div>
);

export default Contact;
