import { motion } from "framer-motion";

export default function ProcessVisualizationSection() {
  const processSteps = [
    {
      number: "1",
      title: "Обнаружение разницы",
      description: "Бот находит одну и ту же криптовалюту по разным ценам на разных площадках",
      color: "primary"
    },
    {
      number: "2",
      title: "Расчет прибыли",
      description: "Учитываются все комиссии, курсы валют и время выполнения операций",
      color: "secondary"
    },
    {
      number: "3",
      title: "Исполнение сделки",
      description: "Получаешь пошаговую инструкцию для безопасного исполнения прибыльной операции",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-background" data-testid="section-process-visualization">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="heading-process">
            Как работает <span className="gradient-text">арбитраж</span>
          </h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500" 
              alt="Multiple cryptocurrency trading terminal interfaces showing price differences"
              className="rounded-2xl shadow-xl w-full h-auto"
              data-testid="img-trading-terminals"
            />
          </motion.div>
          
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex items-start space-x-4 p-6 card-gradient rounded-xl border border-border"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                data-testid={`process-step-${step.number}`}
              >
                <div className={`bg-${step.color}/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className={`text-${step.color} font-bold`}>{step.number}</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2" data-testid={`heading-process-step-${step.number}`}>
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground" data-testid={`text-process-step-${step.number}`}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
