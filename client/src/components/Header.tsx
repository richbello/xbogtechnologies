import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">XB</span>
          </div>
          <div className="hidden sm:flex flex-col">
            <h1 className="text-lg font-bold text-foreground">XBOG TECHNOLOGIES</h1>
            <p className="text-xs text-muted-foreground">Automatización Digital</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/servicios" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Servicios
          </a>
          <a href="#proceso" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Cómo Funciona
          </a>
          <a href="#contacto" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contacto
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.location.href = "tel:+573208303847"}
          >
            Llamar
          </Button>
          <Button
            size="sm"
            onClick={() => window.location.href = "https://wa.me/573208303847"}
          >
            Consulta Gratis
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="/servicios" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#proceso" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Cómo Funciona
            </a>
            <a href="#contacto" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contacto
            </a>
            <div className="flex gap-2 pt-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => window.location.href = "tel:+573208303847"}
              >
                Llamar
              </Button>
              <Button
                size="sm"
                className="flex-1"
                onClick={() => window.location.href = "https://wa.me/573208303847"}
              >
                Consulta Gratis
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
