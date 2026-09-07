import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router } from "wouter"; // <-- CORREGIDO: Añadido Router aquí
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";

// Cambiamos el nombre a RouterComponent para que no choque con el Router de wouter
function RouterComponent() {
  return (
    <Switch>
      {/* Añadimos estas dos opciones para que no falle sin importar cómo lo llame el botón */}
      <Route path="/" component={Home} />
      <Route path="" component={Home} /> 
      
      <Route path="/servicios" component={Services} />
      <Route path="/servicios/:slug" component={ServiceDetail} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Router base="/xbogtechnologies">
            <Toaster />
            {/* Aquí adentro va el componente que renderiza las páginas */}
            <RouterComponent /> 
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;