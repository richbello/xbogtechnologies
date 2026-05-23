import { Card } from "@/components/ui/card";
import { Heart, Home, FileText, AlertCircle, Zap, DollarSign } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Reclamos EPS",
    description: "Cobros injustificados, negación de servicios, medicamentos rechazados. Recupera tus derechos en salud.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Home,
    title: "Servicios Públicos",
    description: "Facturas infladas, errores de medición, cobros duplicados. Defendemos tu bolsillo.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: FileText,
    title: "Gestión Administrativa",
    description: "Trámites complejos, derechos de petición, recursos ante entidades públicas.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: AlertCircle,
    title: "Derechos del Consumidor",
    description: "Protección frente a prácticas abusivas de comercios y empresas de servicios.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Zap,
    title: "Tutelas y Acciones de Amparo",
    description: "Defensa rápida de derechos fundamentales. Resultados en días, no meses.",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: DollarSign,
    title: "Recuperación de Dinero",
    description: "Cobros indebidos, reembolsos negados, devoluciones pendientes. Recupera cada peso.",
    color: "from-green-500 to-green-600",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Servicios Especializados
          </h2>
          <p className="text-lg text-muted-foreground">
            Cobertura integral en gestión de reclamos administrativos. Cada caso es único, 
            cada solución es personalizada.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border-border hover:border-primary/50"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.color} mb-4`}>
                    <Icon size={24} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                  {/* Hover Effect */}
                  <div className="mt-4 flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Más información</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
