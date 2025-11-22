
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  cpf: z.string().min(11, "CPF deve ter pelo menos 11 dígitos"),
  nomeCompleto: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  celular: z.string().min(10, "Celular deve ter pelo menos 10 dígitos"),
  email: z.string().email("E-mail inválido"),
  confirmaEmail: z.string().email("E-mail inválido"),
  aceitaTermos: z.boolean().refine(val => val === true, {
    message: "Você deve aceitar os termos de uso e política de privacidade",
  })
}).refine((data) => data.email === data.confirmaEmail, {
  message: "Os e-mails não correspondem",
  path: ["confirmaEmail"],
});

const Cadastro = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cpf: "",
      nomeCompleto: "",
      celular: "",
      email: "",
      confirmaEmail: "",
      aceitaTermos: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Conta criada com sucesso!",
      description: "Bem-vindo ao AxeBank",
    });
    console.log(values);
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Coluna da esquerda - Banner/Imagem */}
      <div className="md:w-1/2 bg-axe-purple flex flex-col justify-center items-center p-8 text-white">
        {/* Back button */}
        <Link 
          to="/landing" 
          className="absolute top-4 left-4 flex items-center text-white hover:text-white/80 transition-colors"
        >
          <ArrowLeft size={20} className="mr-1" />
          <span>Voltar</span>
        </Link>
        
        <div className="max-w-md">
          <Link to="/landing" className="text-3xl font-bold mb-8 block">
            <span className="text-white">Axe</span>Bank
          </Link>
          
          <h1 className="text-4xl font-bold mb-6">Sua jornada financeira começa aqui</h1>
          
          <p className="text-lg mb-8">
            Junte-se a milhares de pessoas que já transformaram sua relação com o dinheiro através do AxeBank.
          </p>
          
          <div className="bg-white/10 p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Sem taxas escondidas</h3>
                <p className="text-sm text-white/70">Transparência total em todas as operações</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                  <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Cartão internacional</h3>
                <p className="text-sm text-white/70">Aceito em mais de 180 países</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Coluna da direita - Formulário */}
      <div className="md:w-1/2 p-8 flex items-center justify-center">
        {/* Back button for mobile view */}
        <Link 
          to="/landing" 
          className="absolute top-4 left-4 flex items-center text-gray-700 md:hidden"
        >
          <ArrowLeft size={20} className="mr-1" />
          <span>Voltar</span>
        </Link>
        
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-axe-dark">Criar sua conta</h2>
          <p className="text-gray-600 mb-8">Preencha os campos abaixo para começar sua jornada com o AxeBank</p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="cpf"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CPF</FormLabel>
                    <FormControl>
                      <Input placeholder="000.000.000-00" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="nomeCompleto"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome Completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu nome completo" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="celular"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Celular</FormLabel>
                    <FormControl>
                      <Input placeholder="(00) 00000-0000" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input placeholder="seuemail@exemplo.com" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="confirmaEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirmação de E-mail</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu e-mail novamente" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="aceitaTermos"
                render={({ field }) => (
                  <FormItem className="flex items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox 
                        checked={field.value} 
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="leading-none">
                      <FormLabel className="font-normal text-sm">
                        Eu li e concordo com os{" "}
                        <a href="#" className="text-axe-purple hover:underline">Termos de Uso</a>{" "}
                        e a{" "}
                        <a href="#" className="text-axe-purple hover:underline">Política de Privacidade</a>
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-axe-red hover:bg-red-600 text-white"
              >
                Criar conta
              </Button>
              
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                  Já tem uma conta?{" "}
                  <a href="#" className="text-axe-purple hover:underline">
                    Entre agora
                  </a>
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
