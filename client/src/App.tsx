import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "./components/Navigation";
import ParticleBackground from "./components/ParticleBackground";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Vision from "./pages/Vision";
import Technology from "./pages/Technology";
import Contact from "./pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen bg-dark-primary text-white font-inter overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/vision" component={Vision} />
        <Route path="/technology" component={Technology} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      
      {/* Footer */}
      <footer className="bg-dark-secondary py-12 relative">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="text-2xl font-bold text-cyber-purple neon-text mb-4">golm ai</div>
              <p className="text-gray-300 mb-6">
                Building the future of AI agents that go beyond generative AI to create a better world where AI assists humans in every point of life.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-cyber-purple/20 rounded-lg flex items-center justify-center hover:bg-cyber-purple/30 transition-colors cursor-pointer">
                  <span className="text-cyber-purple">𝕏</span>
                </div>
                <div className="w-10 h-10 bg-cyber-cyan/20 rounded-lg flex items-center justify-center hover:bg-cyber-cyan/30 transition-colors cursor-pointer">
                  <span className="text-cyber-cyan">in</span>
                </div>
                <div className="w-10 h-10 bg-cyber-emerald/20 rounded-lg flex items-center justify-center hover:bg-cyber-emerald/30 transition-colors cursor-pointer">
                  <span className="text-cyber-emerald">gh</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/products" className="hover:text-cyber-purple transition-colors">Finly</a></li>
                <li><a href="/products" className="hover:text-cyber-purple transition-colors">Agentic OS</a></li>
                <li><a href="/products" className="hover:text-cyber-purple transition-colors">Enterprise Solutions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/vision" className="hover:text-cyber-purple transition-colors">Vision</a></li>
                <li><a href="/technology" className="hover:text-cyber-purple transition-colors">Technology</a></li>
                <li><a href="/contact" className="hover:text-cyber-purple transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Golm AI. All rights reserved. Building the future of AI agents.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
