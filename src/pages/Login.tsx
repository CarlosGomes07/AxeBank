
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, LogIn } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock login - in a real app, this would call an API
    toast({
      title: "Login realizado com sucesso!",
      description: "Você está sendo redirecionado para a página inicial."
    });
    
    // Navigate to the home screen
    setTimeout(() => {
      navigate('/home');
    }, 1000);
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-axe-dark to-black p-4">
      <div className="w-full max-w-md">
        <Link to="/landing" className="inline-flex items-center text-white mb-8 hover:text-axe-purple transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para o início
        </Link>
        
        <Card className="border-white/10 bg-white/5 backdrop-blur-md text-white">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              <span className="text-axe-purple">Axe</span>Bank
            </CardTitle>
            <CardDescription className="text-white/70 text-center">
              Entre na sua conta para continuar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  placeholder="seu.email@exemplo.com"
                  required
                  type="email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium">
                    Senha
                  </label>
                  <Link to="/esqueci-senha" className="text-xs text-axe-purple hover:underline">
                    Esqueceu a senha?
                  </Link>
                </div>
                <Input
                  id="password"
                  placeholder="••••••••"
                  required
                  type="password"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <Button type="submit" className="w-full bg-axe-purple hover:bg-axe-purple/90">
                <LogIn className="mr-2 h-4 w-4" /> Entrar
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-black px-2 text-white/60">ou</span>
              </div>
            </div>
            <div className="text-center text-sm text-white/70">
              Não tem uma conta?{" "}
              <Link to="/cadastro" className="text-axe-purple hover:underline">
                Criar conta
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
