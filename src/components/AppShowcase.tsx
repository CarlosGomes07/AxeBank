
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const features = [
  "Transferências grátis e ilimitadas",
  "Acompanhamento de gastos em tempo real",
  "Investimentos a partir de R$1",
  "Cartão virtual para compras online seguras",
  "Notificações instantâneas de transações"
];

const AppShowcase = () => {
  return (
    <section id="aplicativo" className="py-16 md:py-24 bg-axe-light-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Abra sua conta <span className="text-axe-purple">gratuita!</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Tenha acesso a todos os serviços bancários na palma da sua mão, sem burocracia e com atendimento personalizado.
            </p>
            
            <ul className="mb-8 space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-axe-purple/20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-axe-purple" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-axe-red hover:bg-red-600 text-white">
                Criar conta agora
              </Button>
              
              <div className="flex items-center gap-3">
                <span className="text-gray-700">É rápido e leva só 2 minutos</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-axe-purple/10 rounded-3xl -rotate-6 transform"></div>
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border-8 border-white max-w-[300px] mx-auto">
                <div className="bg-axe-purple text-white p-4 text-center text-sm">
                  AxeBank App
                </div>
                <div className="p-4">
                  <div className="mb-4">
                    <p className="text-sm text-gray-500">Saldo disponível</p>
                    <p className="text-2xl font-bold">R$ 1.250,75</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {["Pix", "Pagar", "Transferir"].map((action) => (
                      <div key={action} className="bg-gray-100 rounded-lg p-2 text-center">
                        <div className="h-8 w-8 bg-axe-purple/20 rounded-full mx-auto mb-1 flex items-center justify-center">
                          <span className="text-xs text-axe-purple">A</span>
                        </div>
                        <span className="text-xs">{action}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { name: "Netflix", value: "-R$ 39,90", date: "hoje" },
                      { name: "Transferência", value: "+R$ 500,00", date: "ontem" },
                      { name: "Mercado", value: "-R$ 157,34", date: "02/05" }
                    ].map((transaction, i) => (
                      <div key={i} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <div>
                          <p className="font-medium text-sm">{transaction.name}</p>
                          <p className="text-xs text-gray-500">{transaction.date}</p>
                        </div>
                        <p className={`font-medium text-sm ${transaction.value.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                          {transaction.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
