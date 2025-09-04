import { motion } from "framer-motion";

export default function Header() {
  const handleLogoClick = () => {
    window.open("https://t.me/thedeeniss", "_blank");
  };

  const handleContactClick = () => {
    window.open("https://t.me/thedeeniss", "_blank");
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="text-2xl font-bold gradient-text cursor-pointer"
            onClick={handleLogoClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="logo-moskriptobank"
          >
            МосКриптоБанк
          </motion.div>
          <motion.button
            onClick={handleContactClick}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="button-contact-header"
          >
            <i className="fab fa-telegram-plane mr-2"></i>
            Связаться
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
