/**
 * Services Page
 * Displays all available services with modern card layout and navigation
 * Design: Professional, modern grid with hover effects and smooth transitions
 */

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { services } from "@/lib/services";
import { motion } from "framer-motion";

export default function Services() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-slate-50 dark:to-slate-950">
      {/* Header Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Nuestros Servicios
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-tight"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Soluciones Integrales para tu Negocio
          </motion.h1>

          <motion.p
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Desde gestión legal hasta transformación digital, ofrecemos servicios
            especializados diseñados para proteger tus intereses y potenciar tu
            crecimiento.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={cardVariants}>
                <Link href={`/servicios/${service.slug}`}>
                  <a className="group h-full">
                    <div className="h-full bg-white dark:bg-slate-900 rounded-lg border border-border hover:border-blue-400 dark:hover:border-blue-600 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                      {/* Image Container */}
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
                        <img
                          src={service.imageCompressed}
                          alt={service.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {service.name}
                        </h3>

                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                          {service.shortDescription}
                        </p>

                        {/* Benefits Preview */}
                        <div className="mb-4 space-y-1">
                          {service.benefits.slice(0, 2).map((benefit, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-xs text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 flex-shrink-0" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                            {service.cta}
                          </span>
                          <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-900 dark:to-blue-800">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-blue-100 mb-8">
              Contáctanos para conocer soluciones personalizadas adaptadas a tus
              necesidades específicas.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 dark:text-blue-900"
            >
              Contactar Ahora
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
