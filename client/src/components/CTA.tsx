import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-900 dark:to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            ¿Listo para transformar tu gestión presupuestal?
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Solicita una demo gratuita y descubre cómo podemos ahorrar tiempo y mejorar 
            la precisión en tus procesos presupuestales.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 group w-full sm:w-auto"
                onClick={() => window.location.href = "https://wa.me/573208303847"}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar Demo por WhatsApp
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 group w-full sm:w-auto"
                onClick={() => window.location.href = "tel:+573208303847"}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Llamada
              </Button>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/20"
          >
            {[
              { icon: "🔒", label: "100% Confidencial", desc: "Tus datos protegidos" },
              { icon: "⚡", label: "Sin Compromiso", desc: "Demo completamente gratis" },
              { icon: "📞", label: "Soporte 24/7", desc: "Estamos para ayudarte" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                viewport={{ once: true }}
                className="text-white"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="font-semibold">{item.label}</p>
                <p className="text-sm text-blue-100">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
