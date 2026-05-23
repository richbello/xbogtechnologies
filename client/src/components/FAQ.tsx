import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto cuesta una consulta?",
    answer: "La consulta inicial es completamente GRATIS. Realizamos un diagnóstico técnico sin costo. Solo pagas si decidimos trabajar juntos en tu caso, y el costo depende de la complejidad del reclamo.",
  },
  {
    question: "¿Cuánto tiempo tarda resolver un reclamo?",
    answer: "La mayoría de nuestros casos se resuelven en 15-30 días. Algunos casos complejos pueden tomar hasta 60 días. El tiempo depende de la entidad y la complejidad del reclamo, pero siempre priorizamos la velocidad sin sacrificar calidad.",
  },
  {
    question: "¿Qué pasa si no ganamos el reclamo?",
    answer: "Garantizamos resultados. Si no obtenemos una resolución favorable, no pagas. Tu tranquilidad financiera es nuestra garantía de servicio profesional. Trabajamos bajo un modelo de éxito compartido.",
  },
  {
    question: "¿Puedo contactarlos fuera de horario?",
    answer: "Sí. Ofrecemos atención 24/7 por WhatsApp. Para consultas urgentes, puedes escribir en cualquier momento y responderemos en las primeras horas. Llamadas telefónicas de 8 AM a 8 PM.",
  },
  {
    question: "¿Necesito un abogado para presentar un reclamo?",
    answer: "No necesariamente, pero es recomendable. Muchos reclamos pueden presentarse directamente, pero tener asesoría técnica aumenta significativamente las probabilidades de éxito. Nosotros nos encargamos de toda la gestión.",
  },
  {
    question: "¿Qué tipos de reclamos manejan?",
    answer: "Manejamos reclamos contra EPS, servicios públicos, entidades administrativas, derechos del consumidor, tutelas y acciones de amparo. Si tu caso no está en esta lista, contáctanos igual. Evaluamos cada situación de forma individual.",
  },
  {
    question: "¿Cómo protegen mis datos personales?",
    answer: "Cumplimos con la Ley 1581 de 2012 (Protección de Datos Personales en Colombia). Tus datos son confidenciales, cifrados y solo se usan para gestionar tu caso. Nunca compartimos información sin consentimiento.",
  },
  {
    question: "¿Puedo hacer seguimiento a mi caso?",
    answer: "Sí. Recibirás actualizaciones regulares por WhatsApp o correo. Tienes acceso a un portal donde puedes ver el estado de tu reclamo en tiempo real. Transparencia total es nuestro compromiso.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Resolvemos tus dudas. Si tienes otra pregunta, contáctanos directamente.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
