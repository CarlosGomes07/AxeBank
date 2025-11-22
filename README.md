<div align="center">
  <h1 align="center">AxeBank</h1>
  <p align="center">
    Uma aplicação de internet banking moderna e performática, construída com as mais recentes tecnologias de front-end.
  </p>
</div>

---

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Recursos](#-recursos)
- [Tecnologias](#-tecnologias)
- [Começando](#-começando)
- [Scripts](#-scripts)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

---

## 🌟 Visão Geral

O AxeBank é uma simulação de plataforma de internet banking, projetada para oferecer uma experiência de usuário fluida, intuitiva e segura. A aplicação conta com uma interface limpa e responsiva, desenvolvida com uma arquitetura de componentes robusta e escalável.

---

## ✨ Recursos

- **Autenticação de Usuário**: Páginas de Login e Cadastro seguras.
- **Dashboard Financeiro**: Visualização geral da conta do usuário após o login.
- **Design Responsivo**: Experiência otimizada para desktops, tablets e smartphones.
- **Componentes Reutilizáveis**: Construído com um design system coeso utilizando Shadcn/ui.
- **Roteamento Dinâmico**: Navegação fluida entre as diferentes seções da aplicação.

---

## 🚀 Tecnologias

Este projeto foi construído utilizando as seguintes tecnologias:

- **Vite**: Ambiente de desenvolvimento de última geração.
- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Tipagem estática para um código mais robusto.
- **Tailwind CSS**: Framework CSS para estilização rápida e customizável.
- **Shadcn/ui**: Coleção de componentes de UI.
- **React Router**: Gerenciamento de rotas.
- **React Query**: Gerenciamento de estado e dados do servidor.
- **ESLint**: Ferramenta para garantir a qualidade e padronização do código.

---

## ⚙️ Começando

Para executar este projeto localmente, siga os passos abaixo.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (v18 ou superior)
- [Bun](https://bun.sh/)

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/axebank.git
   ```
2. **Acesse o diretório do projeto:**
   ```bash
   cd axebank
   ```
3. **Instale as dependências:**
   ```bash
   bun install
   ```

### Execução

1. **Inicie o servidor de desenvolvimento:**
   ```bash
   bun run dev
   ```
2. **Acesse a aplicação:**
   Abra seu navegador e acesse `http://localhost:8080`.

---

## 📜 Scripts

- `bun run dev`: Inicia o servidor de desenvolvimento com hot-reload.
- `bun run build`: Compila e otimiza a aplicação para produção.
- `bun run lint`: Executa a análise estática do código para encontrar problemas.
- `bun run preview`: Inicia um servidor local para visualizar a build de produção.

---

## 📂 Estrutura do Projeto

A estrutura de arquivos foi organizada para manter o código modular e escalável:

```
/
├── src/
│   ├── components/    # Componentes React reutilizáveis
│   │   ├── ui/        # Componentes base do Shadcn/ui
│   │   └── ...
│   ├── hooks/         # Hooks customizados para lógicas de estado
│   ├── lib/           # Funções utilitárias e configurações
│   ├── pages/         # Componentes que representam as páginas da aplicação
│   └── ...
├── ...
```

---

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Se você tem alguma sugestão para melhorar este projeto, sinta-se à vontade para criar uma *issue* ou enviar um *pull request*.

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  <p>Desenvolvido por CarlosGomes</p>
  <p>&copy; 2024 AxeBank. Todos os direitos reservados.</p>
</div>