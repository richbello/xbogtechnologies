// ============================================================================
// XBOG TECHNOLOGIES - Portafolio Avanzado
// Efectos cinematográficos: parallax, glassmorphism, partículas, transiciones
// ============================================================================

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ChevronRight, BarChart3, Shield, FileText, Zap, Cpu, Database, Layers, GitBranch, Boxes } from 'lucide-react';

// ============================================================================
// FONDO DE PARTÍCULAS ANIMADAS (efecto editor de video)
// ============================================================================

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: Array<{ x: number; y: number; vx: number; vy: number; r: number }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(20, 184, 166, 0.5)';
        ctx.fill();

        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(20, 184, 166, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }} />;
}

// ============================================================================
// CONTADOR ANIMADO (efecto video: números que suben)
// ============================================================================

function AnimatedCounter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const duration = 2000;
          const startTime = Date.now();
          const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
          };
          tick();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, started]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

// ============================================================================
// 1. HERO CON PARALLAX Y PARTÍCULAS
// ============================================================================

export function ModernHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section ref={ref} className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      <ParticleField />

      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{ y: [0, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{ y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      <motion.div style={{ y, opacity, scale }} className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col justify-center min-h-screen">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-teal-400 text-sm font-bold tracking-widest uppercase flex items-center gap-2">
              <motion.span
                className="inline-block w-8 h-0.5 bg-teal-400"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              />
              Transformación Digital para Gobiernos Locales
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Inteligencia Pública
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0, backgroundPosition: ['0% center', '200% center'] }}
              transition={{
                opacity: { delay: 0.5, duration: 0.8 },
                y: { delay: 0.5, duration: 0.8 },
                backgroundPosition: { duration: 6, repeat: Infinity, ease: 'linear' },
              }}
            >
              Para Alcaldías Locales
            </motion.span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Soluciones SaaS avanzadas de gestión presupuestal, auditoría inteligente y control político para entidades territoriales colombianas.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(20, 184, 166, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg font-semibold text-white transition flex items-center gap-2 w-fit relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explorar Soluciones <ChevronRight size={20} />
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: '#14b8a6' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-slate-400 rounded-lg font-semibold text-white hover:text-teal-400 transition w-fit backdrop-blur-sm bg-white/5"
            >
              Ver Casos de Éxito
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-8 mt-20 pt-20 border-t border-slate-700/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <div className="backdrop-blur-sm">
            <div className="text-4xl font-black text-teal-400"><AnimatedCounter target={12} suffix="+" /></div>
            <div className="text-slate-400 text-sm mt-1">Alcaldías</div>
          </div>
          <div className="backdrop-blur-sm">
            <div className="text-4xl font-black text-teal-400"><AnimatedCounter target={850} prefix="$" suffix="M+" /></div>
            <div className="text-slate-400 text-sm mt-1">Presupuesto Gestionado</div>
          </div>
          <div className="backdrop-blur-sm">
            <div className="text-4xl font-black text-teal-400">99.9%</div>
            <div className="text-slate-400 text-sm mt-1">Disponibilidad</div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 bg-teal-400 rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

// ============================================================================
// 2. PRODUCTOS CON GLASSMORPHISM Y TILT 3D
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
      Icon: BarChart3,
    },
    {
      id: 2,
      name: 'Vigilancia Fiscal IA',
      category: 'Auditoría Inteligente',
      description: 'Auditoría automática para contralorías, personerías y entes de control.',
      features: ['Detección de anomalías', 'Análisis de riesgo', 'Reportes certificados'],
      color: 'from-purple-500 to-pink-500',
      Icon: Shield,
    },
    {
      id: 3,
      name: 'XBOG CONTROL',
      category: 'Gestión Contractual',
      description: 'Sistema de gestión y seguimiento contractual con asistente IA para entidades públicas.',
      features: ['Seguimiento de contratos', 'Asistente IA integrado', 'Alertas y reportes'],
      color: 'from-emerald-500 to-teal-500',
      Icon: FileText,
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">Nuestras Soluciones</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Plataformas SaaS especializadas en gestión pública que transforman datos en decisiones estratégicas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, idx) => {
            const { Icon } = product;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="group relative rounded-2xl p-8 overflow-hidden border border-slate-700/50 hover:border-teal-500/50 transition-all duration-500"
                style={{ background: 'rgba(30, 41, 59, 0.5)', backdropFilter: 'blur(10px)' }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <motion.div
                  className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(135deg, rgba(20,184,166,0.3), transparent)' }}
                />

                <div className="relative z-10">
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-5`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon size={28} className="text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                  <span className="inline-block text-xs font-semibold text-teal-400 mb-4 px-3 py-1 bg-teal-400/10 rounded-full border border-teal-400/20">
                    {product.category}
                  </span>
                  <p className="text-slate-400 mb-6 leading-relaxed">{product.description}</p>

                  <div className="space-y-3 mb-6">
                    {product.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3 text-sm text-slate-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15 + i * 0.1 }}
                      >
                        <motion.div
                          className="w-2 h-2 bg-teal-400 rounded-full"
                          animate={{ scale: [1, 1.4, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  <motion.button whileHover={{ x: 6 }} className="text-teal-400 font-semibold flex items-center gap-2 group/btn">
                    Conocer más
                    <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
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
      description: 'Implementación de XBOG SMART en la alcaldía local con 203 registros de análisis presupuestal profundo. Transformación completa de la gestión pública.',
      results: [
        '203 registros de análisis profundo',
        '45% reducción en tiempo de análisis',
        '89% precisión en predicciones IA',
        '4 nuevos módulos: Vigencia, Grandes Rubros, Concentración, Calidad',
      ],
      tech: ['React', 'Python', 'PostgreSQL', 'FastAPI'],
      color: 'from-blue-600 to-cyan-600',
      stats: [
        { value: '203', label: 'Registros analizados' },
        { value: '89%', label: 'Precisión IA' },
      ],
    },
    {
      id: 2,
      name: 'Proyecto Ediles 2026',
      client: 'Concejales y Diputados Locales',
      tagline: 'Control Político Inteligente',
      description: 'Dashboard de control político para 20 FDL (Fondos de Desarrollo Local) con 300+ concejales monitoreando presupuesto, indicadores y alertas en tiempo real.',
      results: [
        'Monitoreo en tiempo real de 20 FDL',
        '300+ concejales usando la plataforma',
        'Alertas automáticas de desviaciones',
        'Reportes ejecutivos interactivos',
      ],
      tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'Recharts'],
      color: 'from-purple-600 to-pink-600',
      stats: [
        { value: '20', label: 'FDL monitoreados' },
        { value: '300+', label: 'Usuarios activos' },
      ],
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">Casos de Éxito</h2>
          <p className="text-slate-400 text-lg">Proyectos que transformaron la gestión pública en Bogotá</p>
        </motion.div>

        <div className="space-y-12">
          {cases.map((caseStudy, idx) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.01 }}
              className="group relative rounded-3xl overflow-hidden border border-slate-700/50 hover:border-teal-500/50 transition-all duration-500"
              style={{ background: 'rgba(30, 41, 59, 0.4)', backdropFilter: 'blur(12px)' }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative z-10 p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <motion.div
                    className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-4 bg-gradient-to-r ${caseStudy.color} text-white`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  >
                    {caseStudy.client}
                  </motion.div>

                  <h3 className="text-3xl md:text-4xl font-black text-white mb-3">{caseStudy.name}</h3>
                  <p className="text-teal-400 text-lg mb-6 font-medium">{caseStudy.tagline}</p>
                  <p className="text-slate-300 mb-8 leading-relaxed">{caseStudy.description}</p>

                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-teal-400 uppercase tracking-wider mb-4">Resultados</h4>
                    <ul className="space-y-3">
                      {caseStudy.results.map((result, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3 text-slate-300"
                        >
                          <div className="w-5 h-5 rounded-full bg-teal-500/20 border border-teal-500 flex items-center justify-center flex-shrink-0">
                            <div className="w-2 h-2 bg-teal-400 rounded-full" />
                          </div>
                          {result}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tech.map((tech) => (
                      <span key={tech} className="text-xs font-semibold px-3 py-1.5 bg-slate-700/50 text-slate-300 rounded-full border border-slate-600/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {caseStudy.stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, duration: 0.6 }}
                      whileHover={{ scale: 1.05, rotate: 1 }}
                      className="p-6 rounded-2xl border border-slate-700/50"
                      style={{ background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(8px)' }}
                    >
                      <div className={`text-4xl font-black bg-gradient-to-r ${caseStudy.color} bg-clip-text text-transparent mb-2`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 4. TECH STACK CON HOVER AVANZADO
// ============================================================================

export function TechStack() {
  const techs = [
    { name: 'React 19', desc: 'Interfaz moderna', Icon: Boxes },
    { name: 'Python/FastAPI', desc: 'Backend escalable', Icon: Cpu },
    { name: 'PostgreSQL', desc: 'Datos confiables', Icon: Database },
    { name: 'Tailwind CSS', desc: 'Diseño profesional', Icon: Layers },
    { name: 'Machine Learning', desc: 'IA avanzada', Icon: Zap },
    { name: 'CI/CD', desc: 'Despliegue continuo', Icon: GitBranch },
  ];

  return (
    <section className="py-24 px-6 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">Stack Tecnológico</h2>
          <p className="text-slate-400 text-lg">Construido con las tecnologías más avanzadas</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {techs.map((tech, idx) => {
            const { Icon } = tech;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="p-6 rounded-xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 text-center group"
                style={{ background: 'rgba(30, 41, 59, 0.4)', backdropFilter: 'blur(8px)' }}
              >
                <motion.div
                  className="w-12 h-12 mx-auto mb-3 rounded-lg bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon size={24} className="text-teal-400" />
                </motion.div>
                <h3 className="text-base font-bold text-white mb-1">{tech.name}</h3>
                <p className="text-slate-400 text-sm">{tech.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// 5. CTA FINAL CINEMATOGRÁFICO
// ============================================================================

export function FinalCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600">
      <motion.div
        className="absolute top-10 right-10 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-black text-white mb-6"
        >
          ¿Listo para Transformar tu Gestión Pública?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
        >
          Únete a las alcaldías que ya confían en nuestras soluciones para optimizar su gestión pública.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-teal-600 font-bold rounded-lg transition"
          >
            Solicitar Demo
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition backdrop-blur-sm"
          >
            Contactar Ventas
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// PÁGINA PRINCIPAL
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
