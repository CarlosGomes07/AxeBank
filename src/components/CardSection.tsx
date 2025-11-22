
import React from 'react';
import { Button } from '@/components/ui/button';

const CardSection = () => {
  const cards = [
    {
      name: "Axe Purple",
      color: "bg-axe-purple",
      features: ["Sem anuidade", "3% de cashback", "Saques ilimitados"]
    },
    {
      name: "Axe Black",
      color: "bg-axe-dark",
      features: ["Sem anuidade", "5% de cashback", "Seguro viagem"]
    },
    {
      name: "Axe Gold",
      color: "bg-amber-400",
      features: ["Programa VIP", "7% de cashback", "Concierge 24h"]
    }
  ];
  
  return (
    <section id="cartoes" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-axe-red">Cartão</span> perfeito para suas necessidades
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Escolha o cartão que combina com seu perfil e aproveite vantagens exclusivas para suas compras online e físicas.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <div key={index} className="flex-1">
              <div className={`${card.color} rounded-lg p-6 text-white shadow-lg h-56 flex flex-col justify-between transform transition-transform hover:-translate-y-2`}>
                <div>
                  <h3 className="text-lg font-bold mb-1">AxeBank</h3>
                  <p className="text-white/70 text-sm">{card.name}</p>
                </div>
                <div className="mt-auto">
                  <div className="text-lg font-mono mb-2">**** **** **** 1234</div>
                  <div className="flex justify-between items-end">
                    <div className="text-sm">
                      <div className="text-white/70">Nome</div>
                      <div>CLIENTE AXEBANK</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-white/70">Validade</div>
                      <div>05/28</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 px-2">
                <h4 className="font-semibold mb-3">{card.name}</h4>
                <ul className="space-y-2 mb-4">
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="h-4 w-4 rounded-full bg-axe-purple/20 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-axe-purple"></div>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full border-axe-purple text-axe-purple hover:bg-axe-purple hover:text-white">
                  Escolher cartão
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
