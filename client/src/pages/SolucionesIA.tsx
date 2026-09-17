import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, BarChart3, Shield, Database, Cpu, Brain } from 'lucide-react';
import { Link } from 'wouter';

export default function SolucionesIA() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition">
              <ArrowLeft className="w-5 h-5" />
              Volver al Inicio
            </a>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Inteligencia Publica Para Alcaldias Locales y Municipales
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Automatizacion inteligente de procesos administrativos, financieros y presupuestales en entidades territoriales colombianas
            </p>
          </motion.div>

          {/* 3 Pilares */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: <BarChart3 className="w-12 h-12" />,
                title: "Analisis Presupuestal",
                description: "IA automatiza el analisis de ejecuciones presupuestales, detecta desviaciones y sugiere ajustes en tiempo real"
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Auditoria Inteligente",
                description: "Vigilancia fiscal automatizada que examina miles de transacciones, identifica riesgos y hallazgos potenciales"
              },
              {
                icon: <Database className="w-12 h-12" />,
                title: "Gestion Contractual",
                description: "IA rastrea y monitorea contratos, alertas automaticas sobre plazos, modificaciones y desempenio de contratistas"
              }
            ].map((pilar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8 hover:border-cyan-400/50 transition"
              >
                <div className="text-cyan-400 mb-4">{pilar.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{pilar.title}</h3>
                <p className="text-gray-300">{pilar.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Procesos Automatizados */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Procesos Automatizados
            </h2>

            <div className="space-y-6">
              {[
                { title: "Extraccion de Datos", desc: "Lectura automatica de SAP Distrital, SIIF, CHIP y fuentes oficiales sin intervension manual" },
                { title: "Validacion de Datos", desc: "Limpieza, transformacion y validacion de informacion con reglas de negocio integradas" },
                { title: "Analisis Predictivo", desc: "Modelos ML que predicen desviaciones presupuestales, riesgos fiscales y oportunidades de ahorro" },
                { title: "Generacion de Reportes", desc: "Informes ejecutivos automaticos con visualizaciones, insights y recomendaciones accionables" },
                { title: "Alertas en Tiempo Real", desc: "Notificaciones instantaneas ante irregularidades, umbrales superados o cambios criticos" },
                { title: "Cumplimiento Normativo", desc: "Validacion continua contra normas CONPES, Leyes de Contratacion y manuales SNARC" }
              ].map((proc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-6 p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg hover:border-cyan-400/50 transition"
                >
                  <div className="flex-shrink-0"><Zap className="w-8 h-8 text-cyan-400" /></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{proc.title}</h3>
                    <p className="text-gray-300">{proc.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Beneficios */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mb-20">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Beneficios Comprobados
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: <Cpu />, stat: "45%", desc: "Reduccion en tiempo de analisis presupuestal" },
                { icon: <Brain />, stat: "89%", desc: "Precision en deteccion de anomalias con IA" },
                { icon: <Zap />, stat: "99.9%", desc: "Disponibilidad de plataforma 24/7" },
                { icon: <Shield />, stat: "100%", desc: "Cobertura de transacciones monitoreadas" }
              ].map((benef, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-8 backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-xl hover:border-cyan-400/60 transition"
                >
                  <div className="flex justify-center mb-4 text-cyan-400">{benef.icon}</div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{benef.stat}</div>
                  <p className="text-gray-300">{benef.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Final */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center py-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-2xl"
          >
            <h2 className="text-4xl font-bold mb-6">Transforma tu Entidad Hoy</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Desde alcaldias locales hasta entidades distritales, CODESPAGE optimiza tu administracion
            </p>
            <a href="https://wa.me/573208303847" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition">
              Solicitar Demo
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
