import { motion } from "framer-motion";

export default function HeroSection() {
  const handleCTAClick = () => {
    window.open("https://t.me/thedeeniss", "_blank");
  };

  return (
    <section className="hero-bg min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              data-testid="heading-hero-main"
            >
              Превращай <span className="gradient-text">ценовые разницы</span> в пассивный доход.
            </motion.h1>

            <motion.p
              className="text-5xl lg:text-7xl font-bold text-accent mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Автоматически.
            </motion.p>
            
            <motion.p 
              className="text-xl lg:text-2xl text-muted-foreground font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              data-testid="text-hero-subtitle"
            >
              Наш Telegram-бот находит и считает самые выгодные арбитражные связки на P2P-рынке, а мы обучаем тебя всему с нуля и ведем к результату 3 месяца.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 text-lg font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              data-testid="list-hero-features"
            >
              <span className="bg-primary/20 text-primary px-4 py-2 rounded-full">Внутрибиржевые связки</span>
              <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full">Межбиржевой арбитраж</span>
              <span className="bg-accent/20 text-accent px-4 py-2 rounded-full">Межконтинентальные сделки</span>
            </motion.div>
            
            <motion.button
              onClick={handleCTAClick}
              className="inline-flex items-center bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 rounded-xl text-xl font-bold transition-all duration-300 btn-glow animate-pulse-slow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="button-cta-hero"
            >
              <i className="fas fa-lock mr-3"></i>
              НАЧАТЬ ЗАРАБАТЫВАТЬ СЕЙЧАС
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Global cryptocurrency trading network visualization"
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="img-hero-network"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
