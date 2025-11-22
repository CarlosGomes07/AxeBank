
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/landing" className="text-2xl font-bold text-axe-dark">
            <span className="text-axe-purple">Axe</span>Bank
          </a>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <nav>
            <ul className="flex gap-6">
              <li><a href="#inicio" className="text-gray-700 hover:text-axe-purple transition-colors">Início</a></li>
              <li><a href="#beneficios" className="text-gray-700 hover:text-axe-purple transition-colors">Benefícios</a></li>
              <li><a href="#cartoes" className="text-gray-700 hover:text-axe-purple transition-colors">Cartões</a></li>
              <li><a href="#aplicativo" className="text-gray-700 hover:text-axe-purple transition-colors">Aplicativo</a></li>
              <li><a href="#blog" className="text-gray-700 hover:text-axe-purple transition-colors">Blog</a></li>
            </ul>
          </nav>
          
          <Link to="/login">
            <Button variant="ghost" className="flex items-center gap-2 text-gray-700 hover:text-axe-purple">
              <LogIn size={18} />
              <span>Login</span>
            </Button>
          </Link>
          
          <Link to="/cadastro">
            <Button className="bg-axe-red hover:bg-red-600 text-white">
              Abra sua conta
            </Button>
          </Link>
        </div>
        
        <button 
          className="md:hidden text-axe-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col gap-4">
              <li><a href="#inicio" className="block py-2 text-gray-700 hover:text-axe-purple" onClick={() => setIsMobileMenuOpen(false)}>Início</a></li>
              <li><a href="#beneficios" className="block py-2 text-gray-700 hover:text-axe-purple" onClick={() => setIsMobileMenuOpen(false)}>Benefícios</a></li>
              <li><a href="#cartoes" className="block py-2 text-gray-700 hover:text-axe-purple" onClick={() => setIsMobileMenuOpen(false)}>Cartões</a></li>
              <li><a href="#aplicativo" className="block py-2 text-gray-700 hover:text-axe-purple" onClick={() => setIsMobileMenuOpen(false)}>Aplicativo</a></li>
              <li><a href="#blog" className="block py-2 text-gray-700 hover:text-axe-purple" onClick={() => setIsMobileMenuOpen(false)}>Blog</a></li>
              <li>
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="ghost" className="flex w-full justify-start items-center gap-2 text-gray-700 hover:text-axe-purple">
                    <LogIn size={18} />
                    <span>Login</span>
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/cadastro" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-axe-red hover:bg-red-600 text-white mt-2">
                    Abra sua conta
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
