import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FloatingCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.4 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <Button size="lg" variant="glass-sunset" className="rounded-full shadow-lg gap-2 px-6 animate-glow-pulse">
        <MessageCircle className="w-4 h-4" />
        Book Consultation
      </Button>
    </motion.div>
  );
};

export default FloatingCTA;
