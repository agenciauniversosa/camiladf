import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5561981590908"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-[0_10px_30px_-5px_hsl(var(--accent)/0.5)] hover:shadow-[0_15px_40px_-5px_hsl(var(--accent)/0.7)] transition-shadow"
    >
      <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20" />
      <MessageCircle size={26} className="relative" strokeWidth={2} />
    </motion.a>
  );
};

export default WhatsAppButton;
