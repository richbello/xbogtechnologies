import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const heroImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663643983897/d2KGVPuzCvKWGrfa46ic99/hero-budget-automation-NEdtB64LR8ZrSfP6Ro3CQR.webp";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <img
          src={heroImage}
          alt="Budget Automation"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/90 to-transparent" />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/50 w-fit">
              <Zap className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-300">
                Transformación Digital para Sector Público
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                Automatiza tu Gestión Presupuestal
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Transforma flujos manuales en procesos inteligentes, integrados y confiables. 
                Menos tareas administrativas, más tiempo para decisiones estratégicas.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur"
              >
                <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">-70% Tiempo</p>
                  <p className="text-sm text-blue-200">Consolidación y reportes</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur"
              >
                <Shield className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">+95% Precisión</p>
                  <p className="text-sm text-blue-200">Datos validados e integrados</p>
                </div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white group w-full sm:w-auto"
                  onClick={() => window.location.href = "https://wa.me/573208303847"}
                >
                  Solicitar Demo Gratis
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-300 text-blue-100 hover:bg-blue-500/10 w-full sm:w-auto"
                  onClick={() => window.location.href = "tel:+573208303847"}
                >
                  Llamar Ahora
                </Button>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-4 space-y-2 text-sm text-blue-200"
            >
              <p>✓ Integración con BOGDATA</p>
              <p>✓ Certificado en Seguridad Informática</p>
              <p>✓ 8 años de experiencia en sector público</p>
            </motion.div>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:grid grid-cols-2 gap-6"
          >
            {[
              { number: "20+", label: "Alcaldías Potenciales", icon: "🏛️" },
              { number: "8", label: "Años en Sector Público", icon: "📊" },
              { number: "100%", label: "Integración BOGDATA", icon: "🔗" },
              { number: "24/7", label: "Soporte Disponible", icon: "🛡️" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                className="p-6 rounded-lg bg-white/10 border border-white/20 backdrop-blur text-center hover:bg-white/15 transition-colors"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <p className="text-2xl font-bold text-white mb-1">{stat.number}</p>
                <p className="text-sm text-blue-200">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-blue-200">
          <span className="text-sm">Desplaza para más</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
