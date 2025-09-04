import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Александр К.",
      role: "Трейдер, 2 месяца в программе",
      testimonial: "За первый месяц смог увеличить депозит на 15%. Бот действительно находит отличные возможности, а поддержка помогает во всех вопросах.",
      color: "primary"
    },
    {
      name: "Мария Д.",
      role: "IT-специалист, 3 месяца в программе",
      testimonial: "Начинала с нуля в криптовалютах. Программа очень структурированная, все объясняется понятно. Уже получаю стабильную прибыль.",
      color: "secondary"
    },
    {
      name: "Дмитрий В.",
      role: "Предприниматель, 1 месяц в программе",
      testimonial: "Искал пассивный доход. Эта система превзошла ожидания — минимум времени, максимум автоматизации и отличные результаты.",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-card" data-testid="section-testimonials">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="heading-testimonials">
            Отзывы наших <span className="gradient-text">учеников</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-background p-8 rounded-2xl border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              data-testid={`testimonial-${index + 1}`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-${testimonial.color}/20 rounded-full flex items-center justify-center`}>
                  <i className={`fas fa-user text-${testimonial.color}`}></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold" data-testid={`name-testimonial-${index + 1}`}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground" data-testid={`role-testimonial-${index + 1}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground italic" data-testid={`text-testimonial-${index + 1}`}>
                "{testimonial.testimonial}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
