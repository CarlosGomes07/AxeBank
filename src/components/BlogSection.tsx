
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const blogPosts = [
  {
    title: "Como conseguir crédito e evitar endividamento desnecessário",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&h=230&q=80",
    date: "10 Maio, 2025",
    excerpt: "Dicas práticas para obter crédito com taxas melhores e usar esse recurso de maneira estratégica."
  },
  {
    title: "Os 5 usos do PIX que mudarão seu controle financeiro para melhor",
    image: "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&h=230&q=80",
    date: "05 Maio, 2025",
    excerpt: "Conheça funcionalidades do PIX que podem ajudar no seu controle financeiro diário."
  },
  {
    title: "Entendendo as mudanças atuais da economia para proteger sua poupança",
    image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&h=230&q=80",
    date: "28 Abril, 2025",
    excerpt: "Um guia completo sobre como proteger seus investimentos em tempos de instabilidade econômica."
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Blog</h2>
          <a href="#" className="text-axe-purple hover:underline font-medium">Ver mais artigos →</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                <p className="text-gray-600">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <a 
                  href="#" 
                  className="text-axe-purple font-medium hover:text-axe-purple/80 inline-flex items-center"
                >
                  Ler artigo completo
                  <svg 
                    className="w-4 h-4 ml-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
