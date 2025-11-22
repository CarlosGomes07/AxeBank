
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send } from 'lucide-react';
import { AnimatePresence, motion } from '@/components/ui/motion';
import { useToast } from "@/hooks/use-toast";

type Message = {
  id: number;
  text: string;
  isBot: boolean;
};

const initialMessages = [
  {
    id: 1,
    text: "Olá! Sou o assistente virtual do AxeBank. Como posso ajudar você hoje?",
    isBot: true,
  },
];

const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const { toast } = useToast();
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 1) {
      // Reset to initial state when reopening
      setMessages(initialMessages);
    }
  };
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text: message.trim(),
      isBot: false,
    };
    
    setMessages([...messages, newUserMessage]);
    setMessage("");
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponses = [
        "Entendi! Vou verificar essa informação para você.",
        "Como posso ajudar com mais alguma coisa?",
        "O AxeBank oferece diversas opções para esse caso. Você pode acessar o menu 'Conta' no aplicativo.",
        "Para mais informações, você pode visitar nossa página de FAQ ou entrar em contato pelo telefone 0800-000-0000.",
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botReply = {
        id: messages.length + 2,
        text: randomResponse,
        isBot: true,
      };
      
      setMessages(prevMessages => [...prevMessages, botReply]);
    }, 1000);
  };
  
  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 bg-axe-red hover:bg-red-600 shadow-lg text-white p-0 z-50"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>
      
      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-lg shadow-xl z-50 flex flex-col border border-gray-200"
            style={{ maxHeight: 'calc(100vh - 150px)' }}
          >
            {/* Header */}
            <div className="bg-axe-purple p-4 rounded-t-lg flex items-center">
              <Avatar className="h-10 w-10 border-2 border-white">
                <AvatarImage src="/placeholder.svg" alt="AxeBank Support" />
                <AvatarFallback className="bg-axe-red text-white">AB</AvatarFallback>
              </Avatar>
              <div className="ml-3 flex-1">
                <h3 className="text-white font-medium">Suporte AxeBank</h3>
                <p className="text-white/70 text-xs">Online agora</p>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-purple-600" 
                onClick={toggleChat}
              >
                <X size={18} />
              </Button>
            </div>
            
            {/* Messages Container */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3" style={{ minHeight: "280px" }}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {msg.isBot && (
                    <Avatar className="h-8 w-8 mr-2 mt-1 flex-shrink-0">
                      <AvatarFallback className="bg-axe-purple text-white text-xs">AB</AvatarFallback>
                    </Avatar>
                  )}
                  
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[75%] ${
                      msg.isBot
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-axe-purple text-white'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="border-t p-3 flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="flex-1"
              />
              <Button type="submit" className="bg-axe-red hover:bg-red-600 text-white">
                <Send size={18} />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatSupport;
