import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Zap, Database, BarChart3, Lock, Workflow, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "Automatización de Procesos Presupuestales",
    description: "Transforma flujos manuales en Excel en procesos automáticos, validados e integrados con BOGDATA.",
    color: "from-blue-500 to-blue-600",
    features: ["Consolidación automática", "Validación de datos", "Integración BOGDATA"],
  },
  {
    icon: Database,
    title: "Integración de Datos Presupuestales",
    description: "Unifica datos de múltiples fuentes y departamentos en una plataforma centralizada y confiable.",
    color: "from-green-500 to-green-600",
    features: ["Múltiples fuentes", "Centralización", "Sincronización en tiempo real"],
  },
  {
    icon: BarChart3,
    title: "Reportería y Dashboards",
    description: "Crea reportes automáticos y dashboards interactivos para mejor toma de decisiones.",
    color: "from-purple-500 to-purple-600",
    features: ["Reportes automáticos", "Dashboards interactivos", "Análisis en tiempo real"],
  },
  {
    icon: Lock,
    title: "Seguridad e Integridad de Datos",
    description: "Protege tu información presupuestal con estándares de seguridad informática avanzados.",
    color: "from-red-500 to-red-600",
    features: ["Encriptación", "Auditoría completa", "Cumplimiento normativo"],
  },
  {
    icon: TrendingUp,
    title: "Análisis y Optimización",
    description: "Identifica oportunidades de mejora y optimización en tus procesos presupuestales.",
    color: "from-orange-500 to-orange-600",
    features: ["Análisis predictivo", "Optimización", "Recomendaciones"],
  },
  {
    icon: Zap,
    title: "Consultoría y Capacitación",
    description: "Acompañamiento completo en la transformación digital de tu entidad.",
    color: "from-yellow-500 to-yellow-600",
    features: ["Diagnóstico", "Implementación", "Capacitación del equipo"],
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-background to-slate-50 dark:to-slate-950">
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
            Soluciones Especializadas
          </h2>
          <p className="text-lg text-muted-foreground">
            Servicios integrales diseñados específicamente para automatizar y optimizar 
            la gestión presupuestal en entidades públicas.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={cardVariants}>
                <Card className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border-border hover:border-blue-400 dark:hover:border-blue-600 h-full flex flex-col">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  <div className="relative p-8 flex flex-col flex-1">
                    {/* Icon */}
                    <div
                      className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.color} mb-4 w-fit`}
                    >
                      <Icon size={24} className="text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Hover Effect */}
                    <div className="mt-auto flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Más información</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
