
import React from 'react';
import { Check, CreditCard, ShieldCheck, Star, TrendingUp, Users } from 'lucide-react';

const benefitItems = [
  {
    icon: <CreditCard className="text-axe-red h-6 w-6" />,
    title: "Cartão sem anuidade",
    description: "Use seu cartão Axe sem pagar taxas anuais e aproveite todos os benefícios."
  },
  {
    icon: <ShieldCheck className="text-axe-red h-6 w-6" />,
    title: "100% seguro",
    description: "Tenha a tranquilidade de usar um banco com as melhores práticas de segurança."
  },
  {
    icon: <TrendingUp className="text-axe-red h-6 w-6" />,
    title: "Rendimento superior",
    description: "Seu dinheiro rende mais que a poupança automaticamente, sem precisar fazer nada."
  },
  {
    icon: <Star className="text-axe-red h-6 w-6" />,
    title: "Programa de pontos",
    description: "Acumule pontos em suas compras e troque por produtos, serviços ou cashback."
  },
  {
    icon: <Users className="text-axe-red h-6 w-6" />,
    title: "Indicação premiada",
    description: "Indique amigos para o Axe Bank e ganhe recompensas para cada novo cliente."
  },
  {
    icon: <Check className="text-axe-red h-6 w-6" />,
    title: "Atendimento 24/7",
    description: "Suporte disponível todos os dias, a qualquer hora, para auxiliar você."
  }
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quais as vantagens de usar <span className="text-axe-purple">AxeBank</span>?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça os benefícios exclusivos que preparamos para tornar sua vida financeira mais simples e vantajosa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-12 w-12 bg-axe-pink/30 rounded-full flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
              <a href="#" className="inline-flex items-center mt-4 text-axe-purple font-medium">
                Saiba mais
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
