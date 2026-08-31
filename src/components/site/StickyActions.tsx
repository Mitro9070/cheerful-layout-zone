import { motion } from "motion/react";
import { MessageCircle, Send } from "lucide-react";

export function StickyActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.4 }}
      className="fixed right-5 bottom-6 z-50 flex flex-col gap-3"
    >
      <a
        href="https://wa.me/79858145090"
        aria-label="Написать в WhatsApp"
        className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform hover:scale-105"
      >
        <MessageCircle className="size-5" />
      </a>
      <a
        href="https://t.me/EvgeniaAntonova"
        aria-label="Написать в Telegram"
        className="glass-card grid size-12 place-items-center rounded-full shadow-lift transition-transform hover:scale-105"
      >
        <Send className="size-4" />
      </a>
    </motion.div>
  );
}
