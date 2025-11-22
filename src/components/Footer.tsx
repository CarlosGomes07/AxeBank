
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-axe-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-axe-purple">Axe</span>Bank
            </h3>
            <p className="text-white/80 mb-6">
              Transformando o jeito de lidar com dinheiro, tornando serviços financeiros acessíveis e descomplicados para todos.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-axe-purple/40 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="h-5 w-5 bg-white/80 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {["Sobre nós", "Produtos", "Benefícios", "Blog", "Contato", "FAQ"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-axe-purple" />
                <span className="text-white/70">0800 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-axe-purple" />
                <span className="text-white/70">contato@axebank.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-axe-purple mt-1" />
                <span className="text-white/70">
                  Setor Bancario Sul, Quadra: 03 Bloco B <br />
                  Brasilia - DF, 01310-100
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Baixe nosso App</h4>
            <p className="text-white/70 mb-4">
              Tenha o AxeBank na palma da sua mão. Baixe agora e experimente!
            </p>
            <div className="space-y-3">
              <a 
                href="#" 
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-2"
              >
                <div className="h-8 w-8 rounded-full bg-white/80"></div>
                <div>
                  <div className="text-xs">Disponível na</div>
                  <div className="font-medium">App Store</div>
                </div>
              </a>
              <a 
                href="Google Play" 
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-4 py-2"
              >
                <div className="h-8 w-8 rounded-full bg-white/40"></div>
                <div>
                  <div className="text-xs">Disponível no</div>
                  <div className="font-medium">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <hr className="border-white/20 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AxeBank. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Segurança</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
