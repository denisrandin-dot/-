import { motion } from "framer-motion";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: "fas fa-graduation-cap",
      title: "Полное погружение",
      description: "Мы не просто даем бота, мы учим тебя стратегии и ведем 3 месяца до достижения стабильного результата.",
      color: "primary"
    },
    {
      icon: "fas fa-cogs",
      title: "Максимальная автоматизация",
      description: "Ты тратишь меньше 30 минут в день. Всю аналитику и поиск возможностей делает искусственный интеллект.",
      color: "secondary"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Никаких рисков",
      description: "Ты работаешь только с собственным капиталом на проверенных биржах. Полная прозрачность операций.",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-card" data-testid="section-why-choose-us">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="heading-why-choose-us">
            Почему наша система — <span className="gradient-text">лучшая?</span>
          </h2>
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400" 
            alt="Advanced financial technology interfaces and data visualization"
            className="rounded-2xl shadow-xl mx-auto mb-8 w-full max-w-4xl h-64 object-cover"
            data-testid="img-tech-interfaces"
          />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className={`bg-background p-8 rounded-2xl border border-${reason.color}/20 hover:border-${reason.color}/40 transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              data-testid={`card-reason-${index + 1}`}
            >
              <div className={`bg-${reason.color}/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6`}>
                <i className={`${reason.icon} text-3xl text-${reason.color}`}></i>
              </div>
              <h3 className={`text-2xl font-bold mb-4 text-${reason.color}`} data-testid={`heading-reason-${index + 1}`}>
                {reason.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid={`text-reason-${index + 1}`}>
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
