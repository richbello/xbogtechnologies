import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6 border border-border">
            <Zap size={16} className="text-accent" />
            <span className="text-sm font-medium text-foreground">
              Más de 1,000 casos resueltos exitosamente
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Recupera tu tranquilidad financiera en{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              menos de 30 días
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Especialistas en desmantelar cobros abusivos de EPS, servicios públicos y entidades administrativas. 
            Defendemos tus derechos con precisión técnica y resultados garantizados.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="gap-2"
              onClick={() => window.location.href = "https://wa.me/573208303847"}
            >
              Agendar Consulta Gratis
              <ArrowRight size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.location.href = "tel:+573208303847"}
            >
              Llamar Ahora: +57 320 830 3847
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-border">
            <div className="flex flex-col items-center gap-2">
              <Shield size={24} className="text-primary" />
              <div>
                <p className="font-bold text-foreground">100% Confidencial</p>
                <p className="text-sm text-muted-foreground">Tus datos protegidos</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CheckCircle2 size={24} className="text-primary" />
              <div>
                <p className="font-bold text-foreground">Resultados Garantizados</p>
                <p className="text-sm text-muted-foreground">O no pagas</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Zap size={24} className="text-primary" />
              <div>
                <p className="font-bold text-foreground">Proceso Rápido</p>
                <p className="text-sm text-muted-foreground">Máximo 30 días</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
