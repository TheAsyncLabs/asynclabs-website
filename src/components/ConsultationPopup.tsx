import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";

const ConsultationPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Trigger after 40 seconds
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem("popup-dismissed")) {
        setOpen(true);
      }
    }, 40000);

    // Trigger at 70% scroll depth
    const handleScroll = () => {
      const scrollPercent = (window.scrollY + window.innerHeight) / document.body.scrollHeight;
      if (scrollPercent >= 0.7 && !sessionStorage.getItem("popup-dismissed")) {
        setOpen(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem("popup-dismissed", "true");
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) handleClose(); else setOpen(v); }}>
      <DialogContent className="sm:max-w-md rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Have an app idea?</DialogTitle>
          <DialogDescription className="text-base mt-2">
            Let's structure it properly. Our 5-phase process ensures your app is built to scale from day one.
          </DialogDescription>
        </DialogHeader>
        <Button className="rounded-full gap-2 mt-4 group" size="lg" onClick={handleClose}>
          Book Consultation Call
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationPopup;
