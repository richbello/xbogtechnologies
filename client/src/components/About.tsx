import { motion } from "framer-motion";
import { Award, Briefcase, Code, Shield } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Expertise Comprobada en Sector Público
            </h2>
            <p className="text-lg text-muted-foreground">
              Combinación única de formación académica, experiencia técnica y conocimiento del sector público
            </p>
          </motion.div>

          {/* Credentials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg bg-slate-50 dark:bg-slate-900 border border-border hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Formación Académica</h3>
                  <div className="space-y-3 text-muted-foreground text-sm">
                    <p>
                      <span className="font-semibold text-foreground">Economista</span>
                      <br />
                      Especialista en análisis económico y presupuestal
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Tecnólogo en Análisis y Desarrollo de Software</span>
                      <br />
                      Experto en desarrollo de soluciones tecnológicas
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Maestría en Seguridad Informática</span>
                      <br />
                      Universidad Da Vinci de México (3/5 trimestres completados)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg bg-slate-50 dark:bg-slate-900 border border-border hover:border-green-400 dark:hover:border-green-600 transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <Shield className="w-8 h-8 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Certificaciones Técnicas</h3>
                  <div className="space-y-2 text-muted-foreground text-sm">
                    <p>✓ Google Data Analytics Professional</p>
                    <p>✓ Oracle Database Administration</p>
                    <p>✓ SQL Advanced</p>
                    <p>✓ Data Science & Machine Learning</p>
                    <p>✓ Seguridad Informática Avanzada</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-8 rounded-lg bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/30 dark:to-green-950/30 border border-blue-200 dark:border-blue-800"
          >
            <div className="flex items-start gap-4 mb-6">
              <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">Experiencia Profesional</h3>
              </div>
            </div>

            <div className="space-y-6">
              {/* Current Role */}
              <div className="border-l-4 border-green-500 pl-6">
                <p className="text-sm font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide mb-1">
                  Actual
                </p>
                <h4 className="text-lg font-bold text-foreground mb-2">
                  Especialista en Automatización Presupuestal
                </h4>
                <p className="text-muted-foreground mb-3">
                  Alcaldía Local de Bogotá
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Automatización de procesos presupuestales con BOGDATA</li>
                  <li>• Desarrollo de scripts y macros para consolidación de reportes</li>
                  <li>• Reducción de 70% en tiempos de procesamiento</li>
                  <li>• Integración de múltiples fuentes de datos</li>
                </ul>
              </div>

              {/* Public Sector Experience */}
              <div className="border-l-4 border-blue-500 pl-6">
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-1">
                  Experiencia
                </p>
                <h4 className="text-lg font-bold text-foreground mb-2">
                  8 Años en Sector Público
                </h4>
                <p className="text-muted-foreground mb-3">
                  Contratista de Prestación de Servicios (Desde 2005)
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Gestión presupuestal en múltiples entidades del Estado</li>
                  <li>• Análisis de datos y reportería avanzada</li>
                  <li>• Implementación de mejoras en procesos administrativos</li>
                  <li>• Cumplimiento normativo y auditoría interna</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-lg bg-slate-50 dark:bg-slate-900 border border-border"
          >
            <div className="flex items-start gap-4 mb-6">
              <Code className="w-8 h-8 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-foreground">Habilidades Técnicas</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Python",
                "SQL",
                "Excel Avanzado",
                "BOGDATA",
                "Análisis de Datos",
                "Seguridad Informática",
                "Automatización de Procesos",
                "Bases de Datos",
                "Reportería",
                "ETL",
                "APIs",
                "Cloud Computing",
              ].map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + idx * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-200 text-sm font-medium border border-blue-200 dark:border-blue-800"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
