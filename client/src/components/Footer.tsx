import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">GR</span>
              </div>
              <div>
                <p className="font-bold text-foreground">Gestión & Reclamos</p>
                <p className="text-xs text-muted-foreground">Colombia</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Especialistas en desmantelar cobros abusivos y garantizar tu tranquilidad financiera.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#servicios" className="hover:text-primary transition-colors">Reclamos EPS</a></li>
              <li><a href="#servicios" className="hover:text-primary transition-colors">Servicios Públicos</a></li>
              <li><a href="#servicios" className="hover:text-primary transition-colors">Gestión Administrativa</a></li>
              <li><a href="#servicios" className="hover:text-primary transition-colors">Derechos del Consumidor</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#proceso" className="hover:text-primary transition-colors">Cómo Funciona</a></li>
              <li><a href="#testimonios" className="hover:text-primary transition-colors">Testimonios</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+573208303847" className="hover:text-primary transition-colors">+57 320 830 3847</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:info@gestionyreclamoscolombia.org" className="hover:text-primary transition-colors">info@gestionyreclamoscolombia.org</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>Bogotá D.C., Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2026 Gestión & Reclamos Colombia. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-primary transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-primary transition-colors">Aviso Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
