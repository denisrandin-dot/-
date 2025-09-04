import { motion } from "framer-motion";

export default function Footer() {
  const handleLogoClick = () => {
    window.open("https://t.me/thedeeniss", "_blank");
  };

  const handleTelegramClick = () => {
    window.open("https://t.me/thedeeniss", "_blank");
  };

  const handleContactClick = () => {
    window.open("https://t.me/thedeeniss", "_blank");
  };

  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-3xl font-bold gradient-text mb-4 cursor-pointer"
              onClick={handleLogoClick}
              whileHover={{ scale: 1.05 }}
              data-testid="logo-footer"
            >
              МосКриптоБанк
            </motion.div>
            <p className="text-muted-foreground mb-6">
              Ведущая платформа для обучения криптовалютному арбитражу с полной автоматизацией процессов.
            </p>
            <div className="flex space-x-4">
              <motion.button
                onClick={handleTelegramClick}
                className="bg-primary/20 hover:bg-primary/30 text-primary w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                data-testid="button-telegram-footer"
              >
                <i className="fab fa-telegram-plane text-xl"></i>
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6">Услуги</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Telegram-бот для арбитража</li>
              <li>• 3-месячное обучение</li>
              <li>• Персональное наставничество</li>
              <li>• Техническая поддержка</li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6">Контакты</h4>
            <div className="space-y-3 text-muted-foreground">
              <p><i className="fab fa-telegram-plane mr-2 text-primary"></i> @thedeeniss</p>
              <p><i className="fas fa-clock mr-2 text-secondary"></i> Поддержка 24/7</p>
              <p><i className="fas fa-shield-alt mr-2 text-accent"></i> Безопасные сделки</p>
            </div>
          </motion.div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center">
          <motion.p 
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            © 2024 МосКриптоБанк. Все права защищены. | 
            <button 
              onClick={handleContactClick}
              className="text-primary hover:text-primary/80 transition-colors ml-1"
              data-testid="link-contact-footer"
            >
              Связаться с нами
            </button>
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
