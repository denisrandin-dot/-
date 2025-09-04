import { motion } from "framer-motion";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: "fas fa-robot",
      title: "Эксклюзивный Telegram-бот",
      description: "Доступ к нашему запатентованному боту для поиска арбитражных возможностей",
      color: "primary"
    },
    {
      icon: "fas fa-graduation-cap",
      title: "3-месячный курс обучения",
      description: "Полная программа от основ криптовалют до продвинутых стратегий арбитража",
      color: "secondary"
    },
    {
      icon: "fas fa-user-tie",
      title: "Персональный наставник",
      description: "Индивидуальное сопровождение и разбор твоих сделок с экспертом",
      color: "accent"
    },
    {
      icon: "fas fa-users",
      title: "Закрытое комьюнити",
      description: "Сообщество успешных арбитражеров для обмена опытом и стратегиями",
      color: "primary"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Юридическая поддержка",
      description: "Полная техническая и правовая поддержка на всём пути обучения",
      color: "secondary"
    },
    {
      icon: "fas fa-chart-line",
      title: "Аналитика результатов",
      description: "Детальная отчетность и анализ эффективности твоих операций",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-background" data-testid="section-benefits">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="heading-benefits">
            В подписку входит <span className="gradient-text">всё для твоего успеха</span>
          </h2>
          <img 
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400" 
            alt="Professional cryptocurrency trading workspace with multiple monitors"
            className="rounded-2xl shadow-xl mx-auto mb-8 w-full max-w-4xl h-64 object-cover"
            data-testid="img-trading-workspace"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className={`card-gradient p-6 rounded-xl border border-border hover:border-${benefit.color}/30 transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              data-testid={`card-benefit-${index + 1}`}
            >
              <div className="flex items-center mb-4">
                <i className={`${benefit.icon} text-2xl text-${benefit.color} mr-4`}></i>
                <h3 className="text-xl font-semibold" data-testid={`heading-benefit-${index + 1}`}>
                  {benefit.title}
                </h3>
              </div>
              <p className="text-muted-foreground" data-testid={`text-benefit-${index + 1}`}>
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
