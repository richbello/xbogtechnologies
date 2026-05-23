import { Card } from "@/components/ui/card";
import { CheckCircle2, FileSearch, Zap, Target } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: FileSearch,
    title: "Auditoría Técnica",
    description: "Análisis profundo de tu caso. Identificamos errores procedimentales, vicios legales y argumentos de defensa. Diagnóstico en 48 horas.",
    details: [
      "Revisión de documentos y comunicaciones",
      "Análisis de normativas aplicables",
      "Identificación de vulnerabilidades",
    ],
  },
  {
    number: 2,
    icon: Zap,
    title: "Estrategia de Acción",
    description: "Diseñamos una hoja de ruta clara y contundente. Documentos técnicos con enfoque de cierre que fuerzan cumplimiento normativo.",
    details: [
      "Redacción de escritos de alto impacto",
      "Aplicación de jurisprudencia de cortes",
      "Definición de plazos y responsables",
    ],
  },
  {
    number: 3,
    icon: Target,
    title: "Ejecución y Seguimiento",
    description: "Perseguimos tu caso hasta obtener respuesta favorable. Seguimiento automatizado de términos legales y defensa ante silencios.",
    details: [
      "Presentación de documentos ante entidades",
      "Monitoreo de plazos de respuesta",
      "Defensa activa ante incumplimientos",
    ],
  },
  {
    number: 4,
    icon: CheckCircle2,
    title: "Resolución Definitiva",
    description: "Garantizamos que la entidad cumpla la decisión favorable. Tu tranquilidad financiera es nuestra garantía de éxito.",
    details: [
      "Verificación de cumplimiento",
      "Acompañamiento hasta resolución final",
      "Asesoría post-resolución",
    ],
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nuestro Proceso Probado
          </h2>
          <p className="text-lg text-muted-foreground">
            Una ingeniería de resultados diseñada para desmantelar cobros abusivos 
            y garantizar tu defensa jurídica.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-32 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}

                <Card className="relative overflow-hidden border-border hover:border-primary/50 transition-colors">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full" />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {step.number}
                  </div>

                  <div className="relative p-8">
                    {/* Icon */}
                    <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                      <Icon size={24} className="text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>

                    {/* Details */}
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                          <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
