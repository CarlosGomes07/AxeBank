
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Como faço para abrir uma conta no AxeBank?",
    answer: "Abrir uma conta no AxeBank é super simples! Basta baixar nosso aplicativo, clicar em 'Abrir conta', preencher seus dados e enviar seus documentos. Em poucos minutos sua conta estará pronta para uso."
  },
  {
    question: "Quais são as taxas cobradas pelo AxeBank?",
    answer: "O AxeBank oferece conta digital gratuita sem mensalidade e cartão sem anuidade. Só cobramos taxas para serviços específicos, como saques além do limite mensal gratuito ou transferências para outros bancos após o limite mensal."
  },
  {
    question: "Como funciona o cartão de crédito do AxeBank?",
    answer: "Nosso cartão de crédito não tem anuidade e oferece cashback em todas as compras. O limite é personalizado conforme seu perfil financeiro e você pode gerenciar tudo pelo aplicativo: alterar limite, bloquear temporariamente, gerar cartão virtual, etc."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-20 bg-axe-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Ficou alguma dúvida?</h2>
          <p className="text-gray-600">Confira as perguntas mais frequentes sobre o AxeBank</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">Não encontrou o que procurava?</p>
            <a 
              href="#" 
              className="inline-block bg-axe-purple hover:bg-axe-secondary-purple text-white px-6 py-3 rounded-lg transition-colors"
            >
              Fale com um atendente
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
