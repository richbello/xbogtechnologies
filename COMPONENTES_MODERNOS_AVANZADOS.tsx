// ============================================================================
// XBOG TECHNOLOGIES - Componentes Modernos y Avanzados
// Diseño profesional, animado y de alto impacto
// ============================================================================

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Zap, BarChart3, Shield, Users, TrendingUp } from 'lucide-react';

// ============================================================================
// 1. HERO SECTION - Impactante y Moderno
// ============================================================================

export function ModernHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Fondo animado con gradientes */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6">
            <span className="text-teal-400 text-sm font-bold tracking-widest uppercase">
              Transformación Digital para Gobiernos Locales
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            Inteligencia Pública
            <br />
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              Para Alcaldías Locales
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl font-light leading-relaxed">
            Soluciones SaaS avanzadas de gestión presupuestal, auditoría inteligente y control político para entidades territoriales colombianas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg font-semibold text-white hover:shadow-2xl hover:shadow-teal-500/50 transition flex items-center gap-2 w-fit"
            >
              Explorar Soluciones <ChevronRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-slate-400 rounded-lg font-semibold text-white hover:border-teal-400 hover:text-teal-400 transition w-fit"
            >
              Ver Casos de Éxito
            </motion.button>
          </div>
        </motion.div>

        {/* Stats animados */}
        <motion.div
          className="grid grid-cols-3 gap-8 mt-20 pt-20 border-t border-slate-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <div className="text-3xl font-black text-teal-400">12+</div>
            <div className="text-slate-400 text-sm">Alcaldías</div>
          </div>
          <div>
            <div className="text-3xl font-black text-teal-400">$850M+</div>
            <div className="text-slate-400 text-sm">Presupuesto Gestionado</div>
          </div>
          <div>
            <div className="text-3xl font-black text-teal-400">99.9%</div>
            <div className="text-slate-400 text-sm">Disponibilidad</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// 2. PRODUCTOS CON ANIMACIONES SOFISTICADAS
// ============================================================================

export function ProductsGrid() {
  const products = [
    {
      id: 1,
      name: 'XBOG SMART',
      category: 'Gestión Presupuestal',
      description: 'Suite completa de análisis presupuestal, reportes de ejecución y gestión de fondos.',
      features: ['Análisis en tiempo real', 'Reportes automáticos', 'Predicciones IA'],
      color: 'from-blue-500 to-cyan-500',
      icon: '📊',
    },
    {
      id: 2,
      name: 'Vigilancia Fiscal IA',
      category: 'Auditoría Inteligente',
      description: 'Auditoría automática para contralorías, personerías y entes de control.',
      features: ['Detección de anomalías', 'Análisis de riesgo', 'Reportes certificados'],
      color: 'from-purple-500 to-pink-500',
      icon: '🛡️',
    },
    {
      id: 3,
      name: 'XBOG CONTROL',
      category: 'Gestión Contractual',
      description: 'Sistema de gestión y seguimiento contractual con asistente IA para entidades públicas.',
      features: ['Seguimiento de contratos', 'Asistente IA integrado', 'Alertas y reportes'],
      color: 'from-emerald-500 to-teal-500',
      icon: '🎯',
    },
  ];

  return (
    <section className="py-20 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-white mb-4">Nuestras Soluciones</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Plataformas SaaS especializadas en gestión pública que transforman datos en decisiones estratégicas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-800 rounded-2xl p-8 overflow-hidden border border-slate-700 hover:border-teal-500 transition"
            >
              {/* Gradient background animado */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition duration-500`} />

              <div className="relative z-10">
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                <span className="inline-block text-xs font-semibold text-teal-400 mb-4 px-3 py-1 bg-teal-400/10 rounded-full">
                  {product.category}
                </span>
                <p className="text-slate-400 mb-6">{product.description}</p>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <div className="w-2 h-2 bg-teal-400 rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-teal-400 font-semibold flex items-center gap-2 group/btn"
                >
                  Conocer más <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 3. CASOS DE ÉXITO - Interfaz Usme & Ediles 2026
// ============================================================================

export function CaseStudiesSection() {
  const cases = [
    {
      id: 1,
      name: 'Interfaz Usme 2024-2025',
      client: 'Alcaldía Local de Usme',
      tagline: 'Transformación de Gestión Presupuestal',
      description: 'Implementación de XBOG SMART en la alcaldía local con 203 registros de análisis presupuestal profundo.',
      results: [
        '45% reducción en tiempo de análisis',
        '89% precisión en predicciones',
        'Transparencia total en reportes',
        '4 nuevos módulos: Vigencia, Grandes Rubros, Concentración, Calidad',
      ],
      tech: ['React', 'Python', 'PostgreSQL', 'FastAPI'],
      color: 'from-blue-600 to-cyan-600',
      stats: {
        registros: '203',
        alcaldia: 'Usme',
        precision: '89%',
      },
    },
    {
      id: 2,
      name: 'Proyecto Ediles 2026',
      client: 'Concejales y Diputados Locales',
      tagline: 'Control Político Inteligente',
      description: 'Dashboard de control político para 20 FDL (Fondos de Desarrollo Local) con análisis de ejecución presupuestal.',
      results: [
        'Monitoreo en tiempo real de 20 alcaldías',
        'Alertas automáticas de desviaciones',
        'Reportes ejecutivos interactivos',
        'Integración con SECOP II y CRP',
      ],
      tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'Recharts'],
      color: 'from-purple-600 to-pink-600',
      stats: {
        alcaldias: '20 FDL',
        concejales: '300+',
        monitores: '24/7',
      },
    },
  ];

  return (
    <section className="py-20 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-white mb-4">Casos de Éxito</h2>
          <p className="text-slate-400 text-lg">Proyectos que transformaron la gestión pública en Bogotá</p>
        </motion.div>

        <div className="space-y-12">
          {cases.map((caseStudy, idx) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden border border-slate-700 hover:border-teal-500 transition"
            >
              {/* Fondo con gradiente */}
              <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.color} opacity-5 group-hover:opacity-10 transition`} />

              <div className="relative z-10 p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
                {/* Contenido texto */}
                <div>
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-4 bg-gradient-to-r ${caseStudy.color} bg-clip-text text-transparent`}>
                    {caseStudy.client}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
                    {caseStudy.name}
                  </h3>

                  <p className="text-slate-400 text-lg mb-6">{caseStudy.tagline}</p>

                  <p className="text-slate-300 mb-8 leading-relaxed">{caseStudy.description}</p>

                  {/* Resultados */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-teal-400 uppercase tracking-wider mb-4">Resultados</h4>
                    <ul className="space-y-2">
                      {caseStudy.results.map((result, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3 text-slate-300"
                        >
                          <CheckIcon />
                          {result}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tech.map((tech) => (
                      <span key={tech} className="text-xs font-semibold px-3 py-1 bg-slate-700 text-slate-300 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats visuales */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-4"
                >
                  {Object.entries(caseStudy.stats).map(([key, value]) => (
                    <div
                      key={key}
                      className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700"
                    >
                      <div className={`text-3xl font-black bg-gradient-to-r ${caseStudy.color} bg-clip-text text-transparent mb-2`}>
                        {value}
                      </div>
                      <div className="text-sm text-slate-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 4. TECNOLOGÍA AVANZADA
// ============================================================================

export function TechStack() {
  const techs = [
    { name: 'React 19', icon: '⚛️', desc: 'Interfaz moderna' },
    { name: 'Python/FastAPI', icon: '🐍', desc: 'Backend escalable' },
    { name: 'PostgreSQL', icon: '🗄️', desc: 'Datos confiables' },
    { name: 'Tailwind CSS', icon: '🎨', desc: 'Diseño profesional' },
    { name: 'Machine Learning', icon: '🤖', desc: 'IA avanzada' },
    { name: 'Kubernetes', icon: '☸️', desc: 'Infraestructura' },
  ];

  return (
    <section className="py-20 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-white mb-4">Stack Tecnológico</h2>
          <p className="text-slate-400 text-lg">Construido con las tecnologías más avanzadas</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {techs.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-teal-500 transition text-center"
            >
              <div className="text-4xl mb-3">{tech.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
              <p className="text-slate-400 text-sm">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 5. CTA FINAL CON ANIMACIÓN
// ============================================================================

export function FinalCTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-teal-600 to-blue-600 relative overflow-hidden">
      {/* Elementos decorativos animados */}
      <motion.div
        className="absolute top-10 right-10 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black text-white mb-6"
        >
          ¿Listo para Transformar tu Gestión Pública?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
        >
          Únete a las alcaldías que ya confían en nuestras soluciones para optimizar su gestión pública.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-teal-600 font-bold rounded-lg hover:shadow-2xl transition"
          >
            Solicitar Demo
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition"
          >
            Contactar Ventas
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// COMPONENTES AUXILIARES
// ============================================================================

function CheckIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-teal-500/20 border border-teal-500 flex items-center justify-center flex-shrink-0">
      <div className="w-2 h-2 bg-teal-400 rounded-full" />
    </div>
  );
}

// ============================================================================
// PÁGINA PRINCIPAL COMPLETA
// ============================================================================

export default function PortfolioModerno() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <ModernHero />
      <ProductsGrid />
      <CaseStudiesSection />
      <TechStack />
      <FinalCTA />
    </div>
  );
}
