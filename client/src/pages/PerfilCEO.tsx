import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, GraduationCap, Briefcase, Target, Award, Cpu, Shield, Database, Mail, Github, Globe, Quote } from 'lucide-react';
import { Link } from 'wouter';

const IMG = {
  hero: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=85',
  formacion: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85',
  trayectoria: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85',
  vision: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2400&q=85',
};

const hideOnError = (e) => { e.currentTarget.style.display = 'none'; };

export default function PerfilCEO() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <Link href="/"><a className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"><ArrowLeft className="w-5 h-5" />Volver al Inicio</a></Link>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <img src={IMG.hero} onError={hideOnError} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-blue-950/85 to-slate-900" />
        <div className="relative max-w-5xl mx-auto px-6 py-28 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-block mb-6">
              <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-4xl font-black shadow-lg shadow-cyan-500/30">RB</div>
            </div>
            <span className="text-cyan-400 text-sm font-bold tracking-widest uppercase">CEO y Founder</span>
            <h1 className="text-5xl md:text-7xl font-black mt-4 mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Richard Bello Roncancio</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">Economista - Tecnologo en Analisis y Desarrollo de Software - Candidato a Master en Seguridad Informatica</p>
            <p className="text-base text-cyan-200/80 mt-4">CODESPAGE - Inteligencia Publica para Gobiernos Locales</p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-24">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden h-80 bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-slate-900 border border-cyan-400/30 p-8 flex flex-col justify-center shadow-2xl shadow-cyan-500/20">
              <div className="absolute -right-8 -top-8 opacity-10">
                <GraduationCap className="w-48 h-48 text-cyan-300" />
              </div>
              <div className="relative z-10">
                <GraduationCap className="w-14 h-14 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-black text-white mb-2">Formación Continua</h3>
                <p className="text-cyan-200 text-sm mb-6">Economía, tecnología y ciberseguridad</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-4xl font-black text-cyan-400">21+</div>
                    <div className="text-xs text-gray-300">Años de experiencia</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-cyan-400">5</div>
                    <div className="text-xs text-gray-300">Formaciones clave</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-cyan-400">3</div>
                    <div className="text-xs text-gray-300">Certificadores globales</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-cyan-400">IA</div>
                    <div className="text-xs text-gray-300">Especialización actual</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-cyan-400" />
                <h2 className="text-3xl font-bold">Formacion Academica</h2>
              </div>
              <div className="space-y-5">
                <div className="border-l-2 border-cyan-400/50 pl-4">
                  <h3 className="font-bold text-lg">Economista</h3>
                  <p className="text-gray-300 text-sm">Universidad Catolica de Colombia - Graduado 2004</p>
                </div>
                <div className="border-l-2 border-cyan-400/50 pl-4">
                  <h3 className="font-bold text-lg">Tecnologo en Analisis y Desarrollo de Software</h3>
                  <p className="text-gray-300 text-sm">SENA Regional Santander</p>
                </div>
                <div className="border-l-2 border-cyan-400/50 pl-4">
                  <h3 className="font-bold text-lg">Desarrollo de Software</h3>
                  <p className="text-gray-300 text-sm">Universidad de Antioquia</p>
                </div>
                <div className="border-l-2 border-cyan-400/50 pl-4">
                  <h3 className="font-bold text-lg">Candidato a Master en Seguridad Informatica</h3>
                  <p className="text-gray-300 text-sm">Formacion de posgrado en ciberseguridad y gobernanza de datos</p>
                </div>
                <div className="border-l-2 border-cyan-400/50 pl-4">
                  <h3 className="font-bold text-lg">Formacion Internacional</h3>
                  <p className="text-gray-300 text-sm">Google, Meta, IBM - IA, Machine Learning, cloud y transformacion digital</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-8 h-8 text-cyan-400" />
                <h2 className="text-3xl font-bold">Trayectoria Profesional</h2>
              </div>
              <p className="text-cyan-300 font-semibold mb-4">19+ anos en el Sector Publico (2005 - presente)</p>
              <div className="space-y-5">
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg p-5">
                  <h3 className="font-bold mb-2">Instituciones Nacionales y Distritales</h3>
                  <p className="text-gray-300 text-sm">Experiencia directa en procesos financieros y presupuestales en entidades del orden nacional y distrital.</p>
                </div>
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg p-5">
                  <h3 className="font-bold mb-2">Alcaldias Locales de Bogota (2021 - presente)</h3>
                  <p className="text-gray-300 text-sm mb-3">Especialista en gestion presupuestal, manejo financiero y automatizacion de procesos administrativos.</p>
                  <div className="flex flex-wrap gap-2">
                    {['SAP Distrital', 'SIIF Nacion', 'CHIP', 'SECOP II'].map((s) => (
                      <span key={s} className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-400/30">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-80 order-1 md:order-2">
              <img src={IMG.trayectoria} onError={hideOnError} alt="" loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative rounded-3xl overflow-hidden">
            <img src={IMG.vision} onError={hideOnError} alt="" loading="lazy" className="w-full h-96 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40 flex items-center">
              <div className="max-w-2xl px-10">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-cyan-400" />
                  <h2 className="text-3xl font-bold">Vision y Liderazgo</h2>
                </div>
                <p className="text-gray-200 mb-6">Las alcaldias locales operan con herramientas manuales mientras los gobiernos distritales tienen sistemas avanzados. <span className="text-cyan-300 font-semibold">CODESPAGE</span> democratiza la inteligencia financiera y administrativa con IA.</p>
                <blockquote className="border-l-4 border-cyan-400 pl-5 italic text-gray-100">
                  <Quote className="w-6 h-6 text-cyan-400 mb-2" />
                  Automatizar procesos que hoy toman semanas, para que los servidores publicos tomen decisiones estrategicas en lugar de decisiones administrativas.
                </blockquote>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-12">
              <Cpu className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-bold text-center">Experticia Tecnica</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Cpu className="w-8 h-8" />, title: 'Automatizacion con IA', items: ['Algoritmos predictivos presupuestales', 'Deteccion de anomalias (89% precision)', 'Extraccion de datos multi-fuente'] },
                { icon: <Database className="w-8 h-8" />, title: 'Analitica de Datos', items: ['Analisis de datasets gubernamentales', 'Modelado de escenarios fiscales', 'Dashboards ejecutivos en tiempo real'] },
                { icon: <Shield className="w-8 h-8" />, title: 'Ciberseguridad y Gobernanza', items: ['Proteccion de datos publicos', 'Cumplimiento CONPES y SNARC', 'Auditoria continua de transacciones'] },
              ].map((card, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/50 transition">
                  <div className="text-cyan-400 mb-4">{card.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                  <ul className="space-y-2">
                    {card.items.map((it) => (
                      <li key={it} className="text-gray-300 text-sm flex gap-2"><span className="text-cyan-400">-</span>{it}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400 mb-3">Stack Tecnico</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Python', 'React 19', 'TypeScript', 'FastAPI', 'Flask', 'Express', 'PostgreSQL', 'Pandas', 'TensorFlow', 'Claude API'].map((t) => (
                  <span key={t} className="text-xs px-3 py-1 bg-white/5 text-gray-300 rounded-full border border-white/10">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-12">
              <Award className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-bold text-center">Logros y Resultados</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-cyan-300">Interfaz Usme 2024-2025</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>- 45% reduccion en tiempo de revision presupuestal</li>
                  <li>- 89% precision en prediccion de anomalias</li>
                  <li>- 4 modulos de inteligencia desarrollados</li>
                  <li>- 203+ registros analizados en profundidad</li>
                </ul>
              </div>
              <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-cyan-300">Proyecto Ediles 2026</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>- 20 Fondos de Desarrollo Local conectados</li>
                  <li>- 300+ usuarios activos</li>
                  <li>- Integracion operativa SECOP II + CRP</li>
                  <li>- Alertas automaticas en tiempo real</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
            <Quote className="w-10 h-10 text-cyan-400 mx-auto mb-6" />
            <p className="text-2xl font-light italic leading-relaxed text-gray-100">La tecnologia publica no es lujo - es justicia. Cuando un alcalde local cuenta con las mismas herramientas que una entidad distrital, el dinero publico se invierte mejor y el ciudadano se beneficia.</p>
            <p className="text-cyan-400 font-semibold mt-6">- Richard Bello Roncancio, CEO y Founder</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center py-14 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-2xl">
            <h2 className="text-3xl font-bold mb-8">Contacto</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:gerencia@xbogtechnologies.com" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-400/50 transition"><Mail className="w-5 h-5 text-cyan-400" />gerencia@xbogtechnologies.com</a>
              <a href="https://github.com/richbello" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-400/50 transition"><Github className="w-5 h-5 text-cyan-400" />github.com/richbello</a>
              <a href="https://richbello.github.io/xbogtechnologies/" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-400/50 transition"><Globe className="w-5 h-5 text-cyan-400" />Sitio Web</a>
            </div>
            <div className="mt-10">
              <a href="https://wa.me/573208303847" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition">Agendar una Reunion</a>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
