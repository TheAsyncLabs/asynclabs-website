import { motion } from "framer-motion";

interface EditorialNarrativeProps {
  text: string;
}

const EditorialNarrative = ({ text }: EditorialNarrativeProps) => {
  return (
    <section className="py-20 px-6 bg-background">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground/40 leading-relaxed tracking-tight">
          {text}
        </p>
      </motion.div>
    </section>
  );
};

export default EditorialNarrative;
