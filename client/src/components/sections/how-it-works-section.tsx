import { motion } from "framer-motion";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: "fas fa-search",
      title: "Анализ",
      description: "Бот в режиме 24/7 сканирует десятки тысяч ордеров на всех крупных P2P-площадках.",
      color: "primary"
    },
    {
      icon: "fas fa-calculator",
      title: "Расчет",
      description: "Мгновенно вычисляет идеальные связки с точной доходностью после всех комиссий.",
      color: "secondary"
    },
    {
      icon: "fas fa-bell",
      title: "Сигнал",
      description: "Ты получаешь готовое решение прямо в Telegram с инструкцией к действию.",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-card" data-testid="section-how-it-works">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="heading-how-it-works">
            Технология прибыли: <span className="gradient-text">арбитраж трафика P2P</span>
          </h2>
          <img 
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400" 
            alt="Advanced cryptocurrency trading analytics and charts"
            className="rounded-2xl shadow-xl mx-auto mb-8 w-full max-w-4xl h-64 object-cover"
            data-testid="img-analytics-charts"
          />
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className={`card-gradient p-8 rounded-2xl border border-border hover:border-${step.color}/50 transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              data-testid={`card-step-${index + 1}`}
            >
              <div className={`bg-${step.color}/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto`}>
                <i className={`${step.icon} text-2xl text-${step.color}`}></i>
              </div>
              <h3 className={`text-2xl font-bold text-center mb-4 text-${step.color}`} data-testid={`heading-step-${index + 1}`}>
                {step.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed" data-testid={`text-step-${index + 1}`}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
