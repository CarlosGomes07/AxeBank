
import React, { useState } from 'react';
import { motion } from '@/components/ui/motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Circle, Database, ShieldCheck, Smartphone, TrendingUp, Zap } from 'lucide-react';

const HomeBank = () => {
  const [userName, setUserName] = useState('Maria Silva');
  const [balance, setBalance] = useState(12589.42);
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-axe-dark to-black text-white">
      {/* Top Navigation */}
      <header className="bg-black/40 backdrop-blur-md border-b border-white/10 p-4 fixed top-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/landing" className="text-2xl font-bold">
            <span className="text-axe-purple">Axe</span>Bank
          </Link>
          
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <Circle className="w-5 h-5" />
            </button>
            <div className="h-10 w-10 rounded-full bg-axe-purple flex items-center justify-center text-lg font-medium">
              {userName.charAt(0)}
            </div>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto pt-24 pb-20 px-4">
        {/* Welcome Section */}
        <motion.section className="mb-8">
          <motion.h1 className="text-3xl font-bold mb-2">
            Olá, {userName.split(' ')[0]}!
          </motion.h1>
          <motion.p className="text-white/70">
            Bem-vindo(a) de volta ao AxeBank
          </motion.p>
        </motion.section>
        
        {/* Balance Card */}
        <motion.section className="mb-8">
          <Card className="bg-gradient-to-br from-axe-purple/80 to-axe-purple/30 border-none backdrop-blur-md overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')]"></div>
            <CardHeader>
              <CardTitle className="text-white flex justify-between items-center">
                <span>Saldo disponível</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-white/80 hover:text-white hover:bg-white/10"
                  onClick={() => setShowBalance(!showBalance)}
                >
                  {showBalance ? 'Ocultar' : 'Mostrar'}
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-white mb-2">
                {showBalance 
                  ? `R$ ${balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` 
                  : '•••••••'}
              </div>
              <div className="text-sm text-white/70 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>Atualizado agora</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost" className="text-white border-white/20 border hover:bg-white/20 hover:text-white">
                Transferir
              </Button>
              <Button className="bg-white text-axe-purple hover:bg-white/90">
                Ver extrato
              </Button>
            </CardFooter>
          </Card>
        </motion.section>
        
        {/* Quick Actions */}
        <motion.section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Ações rápidas</h2>
          <div className="grid grid-cols-4 gap-3">
            {[
              { icon: Database, label: "Pix" },
              { icon: Smartphone, label: "Recarga" },
              { icon: ShieldCheck, label: "Seguros" },
              { icon: Zap, label: "Investir" }
            ].map((action, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center p-4 bg-white/5 rounded-xl backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
              >
                <action.icon className="h-6 w-6 mb-2 text-axe-purple" />
                <span className="text-sm">{action.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* My Cards Section */}
        <motion.section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Meus cartões</h2>
            <Button variant="ghost" className="text-white/70 hover:text-white flex items-center gap-1 text-sm">
              Ver todos <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-4">
              {[
                { name: "AxeBank Black", last4: "0123", color: "from-black to-gray-800" },
                { name: "AxeBank Platinum", last4: "4567", color: "from-axe-purple to-blue-700" }
              ].map((card, index) => (
                <div 
                  key={index}
                  className={`min-w-[280px] h-[170px] rounded-xl bg-gradient-to-br ${card.color} p-5 flex flex-col justify-between border border-white/20`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs text-white/50">Cartão</p>
                      <h3 className="font-medium">{card.name}</h3>
                    </div>
                    <div className="w-10 h-6 bg-white/20 rounded"></div>
                  </div>
                  
                  <div className="flex flex-col">
                    <p className="text-sm text-white/70 mb-1">•••• •••• •••• {card.last4}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-white/50">Valid thru 05/26</p>
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-white/40"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
        
        {/* Recent Transactions */}
        <motion.section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Transações recentes</h2>
            <Button variant="ghost" className="text-white/70 hover:text-white flex items-center gap-1 text-sm">
              Ver todas <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          <Card className="bg-white/5 border-white/10">
            {[
              { name: "Supermercado Extra", date: "Hoje", amount: -156.78, category: "Alimentação" },
              { name: "Salário", date: "Ontem", amount: 3500.00, category: "Receita" },
              { name: "Netflix", date: "22/05", amount: -39.90, category: "Entretenimento" },
              { name: "Transferência para João", date: "20/05", amount: -150.00, category: "Transferência" }
            ].map((transaction, index, arr) => (
              <div 
                key={index} 
                className={`flex justify-between items-center p-4 ${
                  index !== arr.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${
                    transaction.amount > 0 ? "bg-green-500/20" : "bg-axe-red/20"
                  } flex items-center justify-center`}>
                    {transaction.amount > 0 ? "+" : "-"}
                  </div>
                  <div>
                    <p className="font-medium">{transaction.name}</p>
                    <p className="text-xs text-white/50">{transaction.date} • {transaction.category}</p>
                  </div>
                </div>
                <span className={transaction.amount > 0 ? "text-green-400" : "text-white"}>
                  R$ {Math.abs(transaction.amount).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>
            ))}
          </Card>
        </motion.section>
      </main>
      
      {/* Bottom Navigation */}
      <footer className="fixed bottom-0 w-full bg-black/40 backdrop-blur-md border-t border-white/10">
        <div className="container mx-auto">
          <div className="flex justify-around py-3">
            {[
              { icon: Database, label: "Início" },
              { icon: TrendingUp, label: "Finanças" },
              { icon: Smartphone, label: "Cartões" },
              { icon: ShieldCheck, label: "Segurança" }
            ].map((item, index) => (
              <button key={index} className="flex flex-col items-center gap-1">
                <div className={`p-2 rounded-full ${index === 0 ? "bg-axe-purple/20 text-axe-purple" : "text-white/50"}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <span className={`text-xs ${index === 0 ? "text-axe-purple" : "text-white/50"}`}>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeBank;
