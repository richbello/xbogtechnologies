import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, BarChart3, Shield, FileText, Zap, Cpu, Database, Layers, GitBranch, Boxes } from 'lucide-react';

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

export function ModernHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      <ParticleField />

      <div className="absolute inset-0 opacity-30">
        <motion.div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl" animate={{ y: [0, 50, 0] }} transition={{ duration: 8, repeat: Infinity }} />
        <motion.div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl" animate={{ y: [0, -50, 0] }} transition={{ duration: 8, repeat: Infinity, delay: 1 }} />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col justify-center min-h-screen">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <span className="text-teal-400 text-sm font-bold tracking-widest uppercase">Transformación Digital para Gobiernos Locales</span>

          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight mt-4">
            <span className="block">Inteligencia Pública</span>
            <span className="block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Para Alcaldías Locales</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl font-light">
            Soluciones SaaS avanzadas de gestión presupuestal, auditoría inteligente y control político para entidades territoriales colombianas.
          </p>

          <div className="flex gap-4">
            <button className="px-8 py-4 bg-teal-500 rounded-lg font-semibold text-white hover:bg-teal-600 transition flex items-center gap-2">
              Explorar Soluciones <ChevronRight size={20} />
            </button>
            <button className="px-8 py-4 border-2 border-slate-400 rounded-lg font-semibold text-white hover:border-teal-400 transition">
              Ver Casos de Éxito
            </button>
          </div>
        </motion.div>

        <motion.div className="grid grid-cols-3 gap-8 mt-20 pt-20 border-t border-slate-700/50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <div>
            <div className="text-4xl font-black text-teal-400"><AnimatedCounter target={12} suffix="+" /></div>
            <div className="text-slate-400 text-sm mt-1">Alcaldías</div>
          </div>
          <div>
            <div className="text-4xl font-black text-teal-400"><AnimatedCounter target={850} prefix="$" suffix="M+" /></div>
            <div className="text-slate-400 text-sm mt-1">Presupuesto Gestionado</div>
          </div>
          <div>
            <div className="text-4xl font-black text-teal-400">99.9%</div>
            <div className="text-slate-400 text-sm mt-1">Disponibilidad</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export function ProductsGrid() {
  const products = [
    { id: 1, name: 'XBOG SMART', category: 'Gestión Presupuestal', description: 'Suite completa de análisis presupuestal, reportes de ejecución y gestión de fondos.', features: ['Análisis en tiempo real', 'Reportes automáticos', 'Predicciones IA'], Icon: BarChart3 },
    { id: 2, name: 'Vigilancia Fiscal IA', category: 'Auditoría Inteligente', description: 'Auditoría automática para contralorías, personerías y entes de control.', features: ['Detección de anomalías', 'Análisis de riesgo', 'Reportes certificados'], Icon: Shield },
    { id: 3, name: 'XBOG CONTROL', category: 'Gestión Contractual', description: 'Sistema de gestión y seguimiento contractual con asistente IA para entidades públicas.', features: ['Seguimiento de contratos', 'Asistente IA integrado', 'Alertas y reportes'], Icon: FileText },
  ];

  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-4">Nuestras Soluciones</h2>
          <p className="text-slate-400 text-lg">Plataformas SaaS especializadas en gestión pública que transforman datos en decisiones estratégicas.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, idx) => {
            const { Icon } = product;
            return (
              <motion.div key={product.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.15 }} whileHover={{ y: -12 }} className="group relative rounded-2xl p-8 border border-slate-700/50 hover:border-teal-500/50 transition-all" style={{ background: 'rgba(30, 41, 59, 0.5)', backdropFilter: 'blur(10px)' }}>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-5">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                  <span className="inline-block text-xs font-semibold text-teal-400 mb-4 px-3 py-1 bg-teal-400/10 rounded-full">{product.category}</span>
                  <p className="text-slate-400 mb-6">{product.description}</p>
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                        <div className="w-2 h-2 bg-teal-400 rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button className="text-teal-400 font-semibold flex items-center gap-2">Conocer más <ChevronRight size={16} /></button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CaseStudiesSection() {
  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-4">Casos de Éxito</h2>
          <p className="text-slate-400 text-lg">Proyectos que transformaron la gestión pública en Bogotá</p>
        </motion.div>

        <div className="space-y-12">
          {[
            { name: 'Interfaz Usme 2024-2025', client: 'Alcaldía Local de Usme', results: ['203 registros analizados', '45% reducción en tiempo', '89% precisión IA', '4 módulos nuevos'] },
            { name: 'Proyecto Ediles 2026', client: 'Concejales y Diputados Locales', results: ['20 FDL monitoreados', '300+ usuarios activos', 'Alertas automáticas', 'Reportes en tiempo real'] },
          ].map((caseStudy, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl p-8 md:p-12 border border-slate-700/50" style={{ background: 'rgba(30, 41, 59, 0.4)', backdropFilter: 'blur(12px)' }}>
              <h3 className="text-3xl font-black text-white mb-2">{caseStudy.name}</h3>
              <p className="text-teal-400 text-lg font-medium mb-6">{caseStudy.client}</p>
              <ul className="space-y-3">
                {caseStudy.results.map((result, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 bg-teal-400 rounded-full" />
                    {result}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechStack() {
  const techs = [
    { name: 'React 19', Icon: Boxes },
    { name: 'Python/FastAPI', Icon: Cpu },
    { name: 'PostgreSQL', Icon: Database },
    { name: 'Tailwind CSS', Icon: Layers },
    { name: 'Machine Learning', Icon: Zap },
    { name: 'CI/CD', Icon: GitBranch },
  ];

  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-4">Stack Tecnológico</h2>
          <p className="text-slate-400 text-lg">Construido con las tecnologías más avanzadas</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {techs.map((tech) => {
            const { Icon } = tech;
            return (
              <motion.div key={tech.name} whileHover={{ y: -8 }} className="p-6 rounded-xl border border-slate-700/50 text-center" style={{ background: 'rgba(30, 41, 59, 0.4)' }}>
                <Icon size={24} className="text-teal-400 mx-auto mb-3" />
                <h3 className="text-base font-bold text-white">{tech.name}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-black text-white mb-6">¿Listo para Transformar tu Gestión Pública?</h2>
        <p className="text-xl text-white/90 mb-8">Únete a las alcaldías que ya confían en nuestras soluciones.</p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-teal-600 font-bold rounded-lg hover:bg-slate-100 transition">Solicitar Demo</button>
          <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition">Contactar Ventas</button>
        </div>
      </div>
    </section>
  );
}

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
