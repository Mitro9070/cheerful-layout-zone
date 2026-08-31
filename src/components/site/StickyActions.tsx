import { motion } from "motion/react";
import { MessageCircle, Send } from "lucide-react";
import { site } from "@/data/site";

export function StickyActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="fixed right-4 bottom-[calc(4.75rem+env(safe-area-inset-bottom))] z-50 flex flex-col gap-3 md:right-5 lg:bottom-6"
    >
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Написать в WhatsApp"
        className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform hover:scale-105"
      >
        <MessageCircle className="size-5" />
      </a>
      <a
        href={site.telegram}
        target="_blank"
        rel="noreferrer"
        aria-label="Написать в Telegram"
        className="glass-card grid size-12 place-items-center rounded-full shadow-lift transition-transform hover:scale-105"
      >
        <Send className="size-4" />
      </a>
    </motion.div>
  );
}
