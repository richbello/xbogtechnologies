import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "automatizacion",
    title: "Automatización de Procesos Presupuestales",
    description: "Transforma flujos manuales en Excel en procesos automáticos, validados e integrados con BOGDATA.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663643983897/d2KGVPuzCvKWGrfa46ic99/service-automatizacion-presupuestal-5go79q4Y5rcxwSbXPF2gf9.webp",
    features: ["Consolidación automática", "Validación de datos", "Integración BOGDATA"],
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "integracion",
    title: "Integración de Datos Presupuestales",
    description: "Unifica datos de múltiples fuentes y departamentos en una plataforma centralizada y confiable.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663643983897/d2KGVPuzCvKWGrfa46ic99/service-integracion-bogdata-W6xabnYEcRgHuxCoXYFKMq.webp",
    features: ["Múltiples fuentes", "Centralización", "Sincronización en tiempo real"],
    color: "from-green-500 to-green-600",
  },
  {
    id: "reporteria",
    title: "Reportería y Dashboards",
    description: "Crea reportes automáticos y dashboards interactivos para mejor toma de decisiones.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663643983897/d2KGVPuzCvKWGrfa46ic99/service-reporteria-financiera-4PiG8rsHebRP3YHtfDqUKf.webp",
    features: ["Reportes automáticos", "Dashboards interactivos", "Análisis en tiempo real"],
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "validacion",
    title: "Validación y Calidad de Datos",
    description: "Protege la integridad de tu información presupuestal con validaciones rigurosas y detección de errores.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663643983897/d2KGVPuzCvKWGrfa46ic99/service-validacion-datos-NBULW76s72XFLeesHvmsiR.webp",
    features: ["Validación automática", "Detección de errores", "Auditoría de datos"],
    color: "from-red-500 to-red-600",
  },
  {
    id: "capacitacion",
    title: "Capacitación y Soporte",
    description: "Acompañamiento completo para que tu equipo domine la nueva plataforma y procesos.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663643983897/d2KGVPuzCvKWGrfa46ic99/service-capacitacion-soporte-6kPAfaSpyfD3VWYBkCHidi.webp",
    features: ["Capacitación personalizada", "Soporte 24/7", "Documentación completa"],
    color: "from-yellow-500 to-yellow-600",
  },
  {
    id: "consultoria",
    title: "Consultoría Estratégica",
    description: "Diagnóstico y estrategia personalizada para optimizar tu gestión presupuestal.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663643983897/d2KGVPuzCvKWGrfa46ic99/service-consultoria-estrategica-dBRQMqbK9TjoRLba7nH9eQ.webp",
    features: ["Diagnóstico completo", "Plan de acción", "Seguimiento continuo"],
    color: "from-indigo-500 to-indigo-600",
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
    <section id="servicios" className="py-20 md:py-32 bg-background">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group overflow-hidden rounded-xl border border-border bg-card hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group/btn"
                  onClick={() => window.location.href = `https://wa.me/573208303847?text=Hola, me interesa saber más sobre ${service.title}`}
                >
                  Más Información
                  <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            ¿Necesitas una solución personalizada?
          </p>
          <Button
            size="lg"
            onClick={() => window.location.href = "https://wa.me/573208303847"}
            className="gap-2"
          >
            Solicitar Demo Gratuita
            <ArrowRight size={18} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
