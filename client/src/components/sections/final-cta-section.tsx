import { motion } from "framer-motion";

export default function FinalCTASection() {
  const handleFinalCTAClick = () => {
    window.open("https://t.me/thedeeniss", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background via-card to-background relative overflow-hidden" data-testid="section-final-cta">
      <img 
        src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=800" 
        alt="Global financial network connections with illuminated data points"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
        data-testid="img-background-network"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-card/95 to-background/90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2 
            className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-testid="heading-final-cta"
          >
            Места в группе <span className="gradient-text">ограничены</span>
          </motion.h2>
          
          <motion.p 
            className="text-2xl lg:text-3xl text-muted-foreground mb-12 font-medium"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            data-testid="text-final-cta-subtitle"
          >
            Начни свой путь к финансовой свободе сегодня!
          </motion.p>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-foreground" data-testid="text-final-cta-description">
              Перейди в Telegram, чтобы получить бесплатную консультацию и узнать условия доступа.
            </p>
            
            <motion.button
              onClick={handleFinalCTAClick}
              className="inline-flex items-center bg-gradient-to-r from-accent via-primary to-secondary hover:from-accent/90 hover:via-primary/90 hover:to-secondary/90 text-black px-12 py-6 rounded-2xl text-2xl font-bold transition-all duration-300 shadow-2xl animate-glow animate-bounce-slow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              data-testid="button-final-cta"
            >
              <i className="fas fa-rocket mr-4 text-3xl"></i>
              ПОЛУЧИТЬ ДОСТУП В TELEGRAM
            </motion.button>
            
            <p className="text-sm text-muted-foreground mt-4" data-testid="text-final-cta-disclaimer">
              После нажатия кнопки ты перейдешь в личные сообщения к нашему менеджеру @thedeeniss
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
              alt="Confident professional trader analyzing cryptocurrency data on laptop in modern office"
              className="rounded-2xl shadow-2xl mx-auto max-w-2xl w-full h-auto"
              data-testid="img-professional-trader"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
