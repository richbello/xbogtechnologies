import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, BarChart3, Shield, Database, Cpu, Brain } from 'lucide-react';
import { Link } from 'wouter';

const IMG = {
  hero: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2400&q=85',
  presupuestal: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
  auditoria: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=85',
  contractual: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85',
  accion: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2400&q=85',
};

const hideOnError = (e) => { e.currentTarget.style.display = 'none'; };

const IMG = {
  hero: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2400&q=85',
  presupuestal: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
  auditoria: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=85',
  contractual: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85',
  accion: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2400&q=85',
};

const hideOnError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.display = 'none';
};

export default function SolucionesIA() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
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

      <section className="relative overflow-hidden">
        <img src={IMG.hero} onError={hideOnError} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-blue-950/80 to-slate-900" />
        <div className="relative max-w-6xl mx-auto px-6 py-28 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Inteligencia Publica Para Alcaldias Locales y Municipales
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Automatizacion inteligente de procesos administrativos, financieros y presupuestales en entidades territoriales colombianas
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src={IMG.hero} onError={hideOnError} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-blue-950/80 to-slate-900" />
        <div className="relative max-w-6xl mx-auto px-6 py-28 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              { img: IMG.presupuestal, icon: <BarChart3 className="w-10 h-10" />, title: 'Analisis Presupuestal', description: 'IA automatiza el analisis de ejecuciones presupuestales, detecta desviaciones y sugiere ajustes en tiempo real' },
              { img: IMG.auditoria, icon: <Shield className="w-10 h-10" />, title: 'Auditoria Inteligente', description: 'Vigilancia fiscal automatizada que examina miles de transacciones, identifica riesgos y hallazgos potenciales' },
              { img: IMG.contractual, icon: <Database className="w-10 h-10" />, title: 'Gestion Contractual', description: 'IA rastrea y monitorea contratos, alertas automaticas sobre plazos, modificaciones y desempenio de contratistas' },
            ].map((pilar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={pilar.img} onError={hideOnError} alt={pilar.title} loading="lazy" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                  <div className="absolute bottom-3 left-4 text-cyan-400">{pilar.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{pilar.title}</h3>
                  <p className="text-gray-300">{pilar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="relative rounded-3xl overflow-hidden mb-24">
            <img src={IMG.accion} onError={hideOnError} alt="" loading="lazy" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent flex items-center">
              <div className="max-w-xl px-10">
                <h2 className="text-4xl font-bold mb-4 text-white">La IA en Accion</h2>
                <p className="text-lg text-gray-200">Modelos entrenados con datos de SAP Distrital, SIIF, CHIP y SECOP II que transforman informacion cruda en decisiones estrategicas para la gestion publica.</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mb-24">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Procesos Automatizados
            </h2>
            <div className="space-y-6">
              {[
                { title: 'Extraccion de Datos', desc: 'Lectura automatica de SAP Distrital, SIIF, CHIP y fuentes oficiales sin intervension manual' },
                { title: 'Validacion de Datos', desc: 'Limpieza, transformacion y validacion de informacion con reglas de negocio integradas' },
                { title: 'Analisis Predictivo', desc: 'Modelos ML que predicen desviaciones presupuestales, riesgos fiscales y oportunidades de ahorro' },
                { title: 'Generacion de Reportes', desc: 'Informes ejecutivos automaticos con visualizaciones, insights y recomendaciones accionables' },
                { title: 'Alertas en Tiempo Real', desc: 'Notificaciones instantaneas ante irregularidades, umbrales superados o cambios criticos' },
                { title: 'Cumplimiento Normativo', desc: 'Validacion continua contra normas CONPES, Leyes de Contratacion y manuales SNARC' },
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

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mb-24">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Beneficios Comprobados
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: <Cpu />, stat: '45%', desc: 'Reduccion en tiempo de analisis presupuestal' },
                { icon: <Brain />, stat: '89%', desc: 'Precision en deteccion de anomalias con IA' },
                { icon: <Zap />, stat: '99.9%', desc: 'Disponibilidad de plataforma 24/7' },
                { icon: <Shield />, stat: '100%', desc: 'Cobertura de transacciones monitoreadas' },
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

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center py-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-2xl">
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
