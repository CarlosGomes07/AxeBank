
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from '@/components/ui/motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="inicio" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-white to-axe-pink/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-axe-purple">Axe Bank</span>
              <br /> seu banco digital.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
              Com o AxeBank, você pode realizar transações bancárias de qualquer lugar e a qualquer hora. Seguro e conveniente.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/cadastro">
                <Button className="bg-axe-red hover:bg-red-600 text-white px-8 py-6 text-lg">
                  Abra sua conta gratuita!
                </Button>
              </Link>
              
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-axe-light-gray p-3 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" className="text-axe-purple">
                    <polygon fill="currentColor" points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Ver como funciona</span>
              </div>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-axe-light-gray flex items-center justify-center text-axe-purple font-bold"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div>
                <p className="font-medium">Aprovado por mais de</p>
                <p className="text-lg font-bold">10.000+ usuários</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
            {/* Cartões em um arranjo visualmente interessante */}
            <div className="relative w-72 h-80">
              <div className="absolute right-0 top-0 w-60 h-36 bg-axe-purple rounded-xl shadow-lg transform rotate-12 z-10"></div>
              <div className="absolute left-0 top-10 w-60 h-36 bg-axe-red rounded-xl shadow-lg transform -rotate-6 z-20"></div>
              <div className="absolute left-10 top-20 w-60 h-36 bg-axe-dark rounded-xl shadow-lg z-30">
                <div className="p-4 text-white">
                  <div className="flex justify-between items-center mb-6">
                    <div className="font-bold">AxeBank</div>
                    <div className="w-8 h-8 rounded-full bg-white/20"></div>
                  </div>
                  <div className="mb-6">
                    <div className="text-xs text-white/70 mb-1">Número do Cartão</div>
                    <div className="font-mono text-sm">**** **** **** 4827</div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <div className="text-xs text-white/70">Titular</div>
                      <div className="text-sm">NOME SOBRENOME</div>
                    </div>
                    <div>
                      <div className="text-xs text-white/70">Validade</div>
                      <div className="text-sm">12/27</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Círculos decorativos */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-axe-purple/10 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-axe-red/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
