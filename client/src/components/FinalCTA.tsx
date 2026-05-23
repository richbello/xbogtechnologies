import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Clock, Shield } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Main CTA */}
          <div className="bg-background/80 backdrop-blur-md border border-border rounded-2xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              ¿Listo para recuperar tu tranquilidad?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Agendar una consulta gratis es el primer paso. Sin compromisos, sin costos ocultos. 
              Solo respuestas claras y una ruta de acción definitiva.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="gap-2 text-base"
                onClick={() => window.location.href = "https://wa.me/573208303847"}
              >
                Agendar Consulta Gratis
                <ArrowRight size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base"
                onClick={() => window.location.href = "tel:+573208303847"}
              >
                Llamar: +57 320 830 3847
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="flex flex-col items-center gap-2">
                <Clock size={24} className="text-accent" />
                <p className="font-semibold text-foreground">Respuesta en 24h</p>
                <p className="text-sm text-muted-foreground">Diagnóstico en 48h</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Shield size={24} className="text-accent" />
                <p className="font-semibold text-foreground">100% Confidencial</p>
                <p className="text-sm text-muted-foreground">Datos protegidos</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 size={24} className="text-accent" />
                <p className="font-semibold text-foreground">Garantizado</p>
                <p className="text-sm text-muted-foreground">O no pagas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
