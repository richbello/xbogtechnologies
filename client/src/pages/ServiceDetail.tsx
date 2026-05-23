/**
 * Service Detail Page
 * Displays comprehensive information about a specific service
 * Design: Hero image, detailed description, features, benefits, and CTA
 */

import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { getServiceBySlug } from "@/lib/services";
import { ArrowLeft, CheckCircle2, Zap } from "lucide-react";
import { motion } from "framer-motion";
import NotFound from "./NotFound";

export default function ServiceDetail() {
  const params = useParams();
  const service = getServiceBySlug(params.slug || "");

  if (!service) {
    return <NotFound />;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/servicios">
            <a className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Volver a Servicios
            </a>
          </Link>
        </div>
      </div>

      {/* Hero Section with Image */}
      <section className="relative h-96 overflow-hidden bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Title Overlay */}
        <motion.div
          className="absolute inset-0 flex items-end"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full px-4 sm:px-6 lg:px-8 pb-8">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {service.name}
              </h1>
              <p className="text-lg text-blue-100 max-w-2xl">
                {service.shortDescription}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Column - Description */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <div className="space-y-8">
                {/* Full Description */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Descripción del Servicio
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {service.fullDescription}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-blue-600" />
                    Características Principales
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-border hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
                        variants={itemVariants}
                      >
                        <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Beneficios
                  </h2>
                  <div className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-3"
                        variants={itemVariants}
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 flex-shrink-0" />
                        <span className="text-base text-muted-foreground">
                          {benefit}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Sidebar CTA */}
            <motion.div variants={itemVariants}>
              <div className="sticky top-24 space-y-6">
                {/* CTA Card */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    ¿Listo para comenzar?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Nuestro equipo está disponible para ayudarte con tus
                    necesidades.
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    {service.cta}
                  </Button>
                </div>

                {/* Info Card */}
                <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-border space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                      Disponibilidad
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      Disponible 24/7
                    </p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                      Tiempo de Respuesta
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      Máximo 24 horas
                    </p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                      Cobertura
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      Colombia
                    </p>
                  </div>
                </div>

                {/* Related Services */}
                <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-border">
                  <h4 className="text-sm font-bold text-foreground mb-3">
                    Otros Servicios
                  </h4>
                  <Link href="/servicios">
                    <a className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                      Ver todos los servicios →
                    </a>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-900 dark:to-blue-800">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Transforma tu negocio hoy
            </h2>
            <p className="text-blue-100 mb-8">
              Contacta con nuestro equipo para una consulta personalizada sin
              compromiso.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 dark:text-blue-900"
            >
              Solicitar Consulta
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
