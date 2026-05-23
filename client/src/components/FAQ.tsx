import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto cuesta la automatización presupuestal?",
    answer: "El costo depende de la complejidad de tus procesos. Ofrecemos un diagnóstico GRATIS de 2 horas para evaluar tu situación. Los proyectos típicos oscilan entre $20,000 y $100,000 USD. Trabajamos con presupuestos flexibles y planes de pago.",
  },
  {
    question: "¿Cuánto tiempo tarda implementar la automatización?",
    answer: "La mayoría de proyectos se implementan en 4-12 semanas, dependiendo de la complejidad. Comenzamos con un diagnóstico, luego diseño, implementación y capacitación. Te mantenemos informado en cada fase.",
  },
  {
    question: "¿Es compatible con BOGDATA?",
    answer: "Sí, 100% compatible. Nuestras soluciones están diseñadas específicamente para integrar con BOGDATA. Recibimos datos de Excel, los procesamos, validamos y cargamos automáticamente en BOGDATA.",
  },
  {
    question: "¿Qué entidades públicas pueden usar este servicio?",
    answer: "Cualquier entidad pública que maneje presupuestos: Alcaldías, Gobernaciones, Secretarías de Hacienda, IDRD, DAMA, DANE, Ministerios. Si tienes procesos presupuestales manuales, podemos automatizarlos.",
  },
  {
    question: "¿Necesito conocimientos técnicos?",
    answer: "No. Nos encargamos de todo el aspecto técnico. Tu equipo solo necesita usar la plataforma. Proporcionamos capacitación completa y documentación detallada. Soporte 24/7 disponible.",
  },
  {
    question: "¿Qué pasa con mis datos?",
    answer: "Cumplimos con estándares de seguridad informática de nivel empresarial. Encriptación de datos, auditoría completa, cumplimiento normativo. Tus datos son confidenciales y seguros.",
  },
  {
    question: "¿Puedo escalar la solución después?",
    answer: "Sí. Las soluciones están diseñadas para crecer con tu entidad. Puedes agregar más procesos, usuarios o funcionalidades en cualquier momento. Soporte continuo incluido.",
  },
  {
    question: "¿Cómo es el proceso de contratación?",
    answer: "1) Consulta gratuita inicial, 2) Diagnóstico técnico, 3) Propuesta personalizada, 4) Firma de contrato, 5) Implementación. Todo transparente y documentado.",
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
            Resolvemos tus dudas sobre automatización presupuestal. ¿Otra pregunta? Contáctanos directamente.
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
