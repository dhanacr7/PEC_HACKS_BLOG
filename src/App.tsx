import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./hooks/use-theme";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import HowItWorks from "./pages/HowItWorks";
import Tracks from "./pages/Tracks";
import TechStack from "./pages/TechStack";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <ThemeProvider defaultTheme="dark" storageKey="pec-hacks-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/tracks" element={<Tracks />} />
                <Route path="/tech-stack" element={<TechStack />} />
                <Route path="/team" element={<Team />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
