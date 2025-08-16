import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Products', href: '/products' },
    { name: 'Vision', href: '/vision' },
    { name: 'Technology', href: '/technology' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="relative z-50 glassmorphism">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link href="/">
              <div className="text-2xl font-bold text-cyber-purple neon-text cursor-pointer">
                golm ai
              </div>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a className={`transition-colors duration-300 ${
                    location === item.href 
                      ? 'text-cyber-cyan' 
                      : 'text-gray-300 hover:text-cyber-cyan'
                  }`}>
                    {item.name}
                  </a>
                </Link>
              ))}
              <Button className="bg-cyber-purple hover:bg-cyber-blue text-white px-6 py-2 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-purple/50 animate-glow">
                Get Started
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glassmorphism rounded-lg mt-4 p-4">
            <div className="space-y-4">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a 
                    className={`block transition-colors duration-300 ${
                      location === item.href 
                        ? 'text-cyber-cyan' 
                        : 'text-gray-300 hover:text-cyber-cyan'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
              <Button className="w-full bg-cyber-purple hover:bg-cyber-blue text-white transition-all duration-300">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
