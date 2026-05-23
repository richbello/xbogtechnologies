import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendoza",
    location: "Bogotá D.C.",
    role: "Empresario",
    text: "Llevaba 3 años lidiando con cobros injustificados de mi EPS. En menos de 48 horas, Gestión & Reclamos identificó 5 errores procedimentales que el sistema intentaba ocultar. Hoy recuperé $8.5 millones.",
    rating: 5,
  },
  {
    name: "Patricia Restrepo",
    location: "Soacha",
    role: "Docente",
    text: "Su intervención ante la empresa de servicios públicos fue contundente. Entienden perfectamente los tiempos y normativas del Estado. Pagué $2.3 millones de más, ahora tengo el reembolso aprobado.",
    rating: 5,
  },
  {
    name: "Héctor Fabio J.",
    location: "Medellín",
    role: "Independiente",
    text: "El análisis multidisciplinario sobre mi caso de servicios públicos evitó un cobro desproporcionado de $15 millones. No son solo trámites, es una defensa real de los derechos del ciudadano.",
    rating: 5,
  },
  {
    name: "Lucía Fernanda G.",
    location: "Cali",
    role: "Pensionada",
    text: "Recuperamos la tranquilidad gracias a su gestión técnica. El equipo fue respetuoso, profesional y efectivo. Recomendados 100% para cualquier reclamo administrativo.",
    rating: 5,
  },
  {
    name: "Ricardo Silva",
    location: "Barranquilla",
    role: "Comerciante",
    text: "Impresionado con la rapidez en el diagnóstico. En menos de 48 horas ya teníamos una ruta clara de acción ante la entidad pública. Resultados en 21 días.",
    rating: 5,
  },
  {
    name: "Elena M. Duarte",
    location: "Bucaramanga",
    role: "Abogada",
    text: "La seriedad y el profesionalismo que proyectan se ve reflejado en la efectividad de sus reclamaciones. Incluso como profesional del derecho, reconozco su expertise. Totalmente recomendados.",
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
            Historias de Éxito
          </h2>
          <p className="text-lg text-muted-foreground">
            Más de 1,000 clientes satisfechos que recuperaron su tranquilidad financiera.
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
