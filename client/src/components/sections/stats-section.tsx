import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    { value: "24/7", label: "Непрерывный мониторинг рынка", color: "primary" },
    { value: "15+", label: "Криптовалютных бирж", color: "secondary" },
    { value: "3 мес", label: "Полное сопровождение", color: "accent" },
    { value: "500+", label: "Успешных учеников", color: "primary" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5" data-testid="section-stats">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              data-testid={`stat-${index + 1}`}
            >
              <motion.div 
                className={`text-4xl font-bold text-${stat.color}`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                data-testid={`stat-value-${index + 1}`}
              >
                {stat.value}
              </motion.div>
              <p className="text-muted-foreground" data-testid={`stat-label-${index + 1}`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
