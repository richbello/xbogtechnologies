import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">XB</span>
            </div>
            <div>
              <p className="font-bold text-white">XBOG TECHNOLOGIES</p>
              <p className="text-xs text-green-300">Automatización Digital</p>
            </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Especialista en automatización de procesos presupuestales para el sector público. 
              Transformación digital con precisión, seguridad y eficiencia.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#servicios" className="hover:text-green-400 transition-colors">Automatización Presupuestal</a></li>
              <li><a href="#servicios" className="hover:text-green-400 transition-colors">Integración BOGDATA</a></li>
              <li><a href="#servicios" className="hover:text-green-400 transition-colors">Análisis de Datos</a></li>
              <li><a href="#servicios" className="hover:text-green-400 transition-colors">Seguridad Informática</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#about" className="hover:text-green-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#caso-exito" className="hover:text-green-400 transition-colors">Caso de Éxito</a></li>
              <li><a href="#proceso" className="hover:text-green-400 transition-colors">Nuestro Proceso</a></li>
              <li><a href="#contacto" className="hover:text-green-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-green-400" />
                <a href="tel:+573208303847" className="hover:text-green-400 transition-colors">
                  +57 320 830 3847
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-green-400" />
                <a href="mailto:info@presupuestal360.com" className="hover:text-green-400 transition-colors">
                  info@presupuestal360.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-green-400" />
                <span>Bogotá, Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8 mb-8">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="text-slate-400 hover:text-green-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-green-400 transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-400">
            <p>© 2026 XBOG TECHNOLOGIES. Todos los derechos reservados.</p>
            <div className="flex gap-6 md:justify-end">
              <a href="#" className="hover:text-green-400 transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-green-400 transition-colors">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
