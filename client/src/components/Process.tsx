import { motion } from "framer-motion";
import { CheckCircle2, Zap, Target, Lightbulb } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Lightbulb,
    title: "Diagnóstico y Análisis",
    description: "Evaluamos tus procesos presupuestales actuales, identificamos ineficiencias y oportunidades de automatización.",
    details: [
      "Análisis de flujos actuales",
      "Identificación de cuellos de botella",
      "Mapeo de fuentes de datos",
    ],
  },
  {
    number: 2,
    icon: Zap,
    title: "Diseño de Solución",
    description: "Creamos una solución personalizada que se adapta a tu estructura organizacional y sistemas existentes como BOGDATA.",
    details: [
      "Diseño de arquitectura de datos",
      "Especificación de automatizaciones",
      "Plan de integración con BOGDATA",
    ],
  },
  {
    number: 3,
    icon: Target,
    title: "Implementación y Pruebas",
    description: "Desarrollamos e implementamos la solución con pruebas rigurosas para garantizar confiabilidad y precisión.",
    details: [
      "Desarrollo de scripts/automatizaciones",
      "Validación de datos",
      "Pruebas en ambiente controlado",
    ],
  },
  {
    number: 4,
    icon: CheckCircle2,
    title: "Capacitación y Soporte",
    description: "Capacitamos a tu equipo y proporcionamos soporte continuo para garantizar el éxito a largo plazo.",
    details: [
      "Capacitación del equipo",
      "Documentación completa",
      "Soporte técnico 24/7",
    ],
  },
];

export default function Process() {
  return (
    <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestro Proceso Comprobado
          </h2>
          <p className="text-lg text-muted-foreground">
            Seguimos una metodología estructurada que garantiza resultados exitosos 
            en la transformación de tus procesos presupuestales.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-12 last:mb-0"
              >
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}>
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={isEven ? "md:order-1" : "md:order-2"}
                  >
                    <div className="flex items-start gap-4">
                      {/* Step Number and Icon */}
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                          <Icon size={28} />
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-1">
                          Paso {step.number}
                        </p>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {step.description}
                        </p>

                        {/* Details */}
                        <ul className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <div className="w-2 h-2 rounded-full bg-blue-500" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  {/* Visual Element */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className={isEven ? "md:order-2" : "md:order-1"}
                  >
                    <div className="p-8 rounded-lg bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/30 dark:to-green-950/30 border border-blue-200 dark:border-blue-800">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                          {step.number}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {step.title}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                    className="h-12 flex items-center justify-center mt-8 origin-top"
                  >
                    <div className="w-1 h-full bg-gradient-to-b from-blue-500 to-transparent" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
