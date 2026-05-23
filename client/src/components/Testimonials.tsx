import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jefe de Presupuesto",
    location: "Alcaldía Bogotá",
    role: "Sector Público",
    text: "Reducimos el tiempo de consolidación presupuestal de 5 días a 2 horas. Los reportes que antes tomaban una semana ahora se generan automáticamente cada mañana. Impresionante.",
    rating: 5,
  },
  {
    name: "Tesorero",
    location: "Gobernación",
    role: "Sector Público",
    text: "La integración con BOGDATA fue perfecta. Eliminamos errores manuales completamente. Ahora tenemos 100% precisión en nuestros datos presupuestales. Recomendado para cualquier entidad.",
    rating: 5,
  },
  {
    name: "Director de Sistemas",
    location: "Secretaría de Hacienda",
    role: "Sector Público",
    text: "El equipo entiende perfectamente cómo funcionan los sistemas públicos. No solo automatizaron procesos, también optimizaron nuestra estructura de datos. Profesionales de verdad.",
    rating: 5,
  },
  {
    name: "Coordinador Presupuestal",
    location: "Alcaldía Local",
    role: "Sector Público",
    text: "Ahorramos 200 horas de trabajo manual al mes. Mi equipo ahora se enfoca en análisis estratégico en lugar de tareas repetitivas. El ROI se vio en el primer mes.",
    rating: 5,
  },
  {
    name: "Jefe de Finanzas",
    location: "Entidad Distrital",
    role: "Sector Público",
    text: "La capacitación fue excelente. Mi equipo dominó la plataforma en una semana. El soporte técnico es responsivo y profesional. Totalmente recomendados.",
    rating: 5,
  },
  {
    name: "Responsable de Reportería",
    location: "Municipio",
    role: "Sector Público",
    text: "Pasamos de reportes manuales en Excel a dashboards interactivos en tiempo real. Los directivos ahora tienen información actualizada al instante. Transformación digital real.",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} size={16} className="fill-accent text-accent" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-muted-foreground">
            Entidades públicas que transformaron su gestión presupuestal con XBOG Technologies.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full" />

              <div className="relative p-6">
                {/* Rating */}
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Quote */}
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
