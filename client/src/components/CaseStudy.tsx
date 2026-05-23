import { motion } from "framer-motion";
import { TrendingUp, CheckCircle2, Clock, Zap } from "lucide-react";

const caseStudyImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663643983897/d2KGVPuzCvKWGrfa46ic99/case-study-alcaldia-VjopSU3WELDxfFp5yXvEbs.webp";

export default function CaseStudy() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-slate-50 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src={caseStudyImage}
                alt="Caso de Éxito - Alcaldía Bogotá"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-green-500 text-white p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-sm font-semibold mb-1">Resultado en Alcaldía Bogotá</p>
              <p className="text-2xl font-bold">-70% Tiempo</p>
              <p className="text-xs mt-2 opacity-90">en consolidación de reportes</p>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Header */}
            <div>
              <p className="text-green-600 dark:text-green-400 font-semibold text-sm uppercase tracking-wide mb-2">
                Caso de Éxito
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Transformación Digital en Alcaldía de Bogotá
              </h2>
              <p className="text-lg text-muted-foreground">
                Cómo automatizamos procesos presupuestales y ahorramos miles de horas manuales
              </p>
            </div>

            {/* Problem & Solution */}
            <div className="space-y-6">
              {/* Problem */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900"
              >
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-2xl">❌</span> El Problema
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Reportes presupuestales en Excel dispersos entre departamentos</li>
                  <li>• Consolidación manual que tomaba 3-4 días por mes</li>
                  <li>• Errores de digitación y falta de consistencia en datos</li>
                  <li>• Integración lenta y propensa a errores con BOGDATA</li>
                </ul>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900"
              >
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-2xl">✅</span> La Solución
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Sistema automatizado que unifica reportes Excel</li>
                  <li>• Validación y transformación de datos en tiempo real</li>
                  <li>• Integración automática con BOGDATA</li>
                  <li>• Dashboards de control y auditoría</li>
                </ul>
              </motion.div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { icon: Clock, value: "-70%", label: "Tiempo Consolidación" },
                { icon: TrendingUp, value: "+95%", label: "Precisión Datos" },
                { icon: CheckCircle2, value: "100%", label: "Integración BOGDATA" },
              ].map((result, idx) => {
                const Icon = result.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 text-center"
                  >
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                    <p className="font-bold text-lg text-foreground">{result.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{result.label}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-slate-100 dark:bg-slate-800 border-l-4 border-green-500"
            >
              <p className="text-foreground italic mb-3">
                "La automatización presupuestal no es solo tecnología, es transparencia, eficiencia y compromiso con nuestra ciudadanía."
              </p>
              <p className="text-sm font-semibold text-muted-foreground">
                — Secretaría de Hacienda Pública, Alcaldía de Bogotá
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
