import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
// 1. MODIFICADO: Agregamos "Router" a la importación de wouter
import { Route, Switch, Router as WouterRouter } from "wouter"; 
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";


function NavigationRouter() { // Cambié el nombre para que no choque con el de la librería
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/servicios"} component={Services} />
      <Route path={"/servicios/:slug"} component={ServiceDetail} />
      <Route path={"/404"} component={NotFound} />
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
      {/* 2. MODIFICADO: Envolvemos todo en WouterRouter y le pasamos el "base" de tu GitHub Pages */}
      <WouterRouter base="/xbogtechnologies">
        <ThemeProvider
          defaultTheme="light"
          // switchable
        >
          <TooltipProvider>
            <Toaster />
            <NavigationRouter />
          </TooltipProvider>
        </ThemeProvider>
      </WouterRouter>
    </ErrorBoundary>
  );
}

export default App;
