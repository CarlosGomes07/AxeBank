<div align="center">
  <h1 align="center">AxeBank Digital Platform</h1>
  <p align="center">
    A modern, high-performance digital banking interface built on cutting-edge front-end technologies.
  </p>
</div>

<div align="center">
  <a href="LICENSE"><img alt="License" src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge"></a>
  <a href="#"><img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"></a>
  <a href="#"><img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"></a>
  <a href="#"><img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"></a>
  <a href="#"><img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"></a>
</div>

---

## Table of Contents

- [Overview](#overview)
- [Core Features](#core-features)
- [Architectural Design](#architectural-design)
- [Technology Stack](#technology-stack)
- [Local Development](#local-development)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [License](#license)

---

## Overview

AxeBank is a proof-of-concept digital banking platform designed to deliver a fluid, intuitive, and secure user experience. The application features a clean, responsive interface, implemented with a robust and scalable component-based architecture. It serves as a blueprint for modern web application development, emphasizing code quality, maintainability, and developer experience.

## 🖼️ Visual Preview

(Add a high-quality screenshot or GIF of the application dashboard here) 

---

## Core Features

- **Secure User Authentication**: Dedicated, secure endpoints for user registration and login.
- **Financial Dashboard**: A comprehensive overview of the user's account status and recent activity post-authentication.
- **Fully Responsive Design**: Optimized user experience across desktops, tablets, and mobile devices.
- **Cohesive Design System**: A consistent and reusable component library built with **shadcn/ui**.
- **Declarative Routing**: Seamless client-side navigation powered by **React Router**.

---

## Architectural Design

The architecture was carefully chosen to ensure scalability, type safety, and a high-quality development workflow.

- **Development Environment**: **Vite** is utilized for its near-instant Hot Module Replacement (HMR) and optimized build process, significantly accelerating development cycles.
- **Component-Based UI**: The front-end is built on **React**, enabling the creation of encapsulated and reusable components. This modular approach simplifies maintenance and promotes code reuse.
- **Static Typing**: **TypeScript** is enforced across the entire codebase to ensure type safety, reduce runtime errors, and improve code auto-completion and refactoring capabilities.
- **Styling Strategy**: **Tailwind CSS** provides a utility-first CSS framework that allows for rapid, consistent styling directly within the markup, eliminating the need for separate CSS files and preventing style conflicts.
- **UI Toolkit**: **shadcn/ui** was selected for its unstyled, composable, and accessible components. Unlike traditional component libraries, it allows full ownership and control over the codebase, as components are integrated directly into the project structure.
- **Code Quality**: **ESLint** is configured to enforce strict code quality and style standards, ensuring consistency and preventing common errors.

---

## Technology Stack

- **Core**: React, TypeScript, Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router
- **Data Fetching & State**: React Query (TanStack Query)
- **Linting**: ESLint

---

## Local Development

To set up and run the project on a local machine, follow the steps below.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18.x or later)
- [Bun](https://bun.sh/) (or alternatively `npm`/`yarn`)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/axebank.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd axebank
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Application

1.  **Start the development server:**
    ```bash
    npm run dev
    ```
2.  **Access the application:**
    Open a web browser and navigate to `http://localhost:8080` (or the port specified in the console).

---

## Available Scripts

- `npm run dev`: Starts the development server with HMR.
- `npm run build`: Compiles and bundles the application for production.
- `npm run lint`: Executes the ESLint static code analysis.
- `npm run preview`: Serves the production build locally for verification.

---

## Project Structure

The project follows a feature-oriented directory structure to promote modularity and ease of navigation.

```
/
├── public/            # Static assets
├── src/
│   ├── assets/        # Icons, images, and other static files
│   ├── components/    # Reusable React components (UI and domain-specific)
│   │   └── ui/        # Base components from shadcn/ui
│   ├── hooks/         # Custom React hooks for shared logic
│   ├── lib/           # Utility functions and library configurations (e.g., `cn`)
│   ├── pages/         # Top-level components representing application routes
│   ├── App.tsx        # Main application component with routing setup
│   └── main.tsx       # Application entry point
├── .eslintrc.cjs      # ESLint configuration
├── tailwind.config.ts # Tailwind CSS configuration
├── tsconfig.json      # TypeScript compiler options
└── vite.config.ts     # Vite configuration
```

---

## License

This project is distributed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

<div align="center">
  <p>Desenvolvido por CarlosGomes.</p>
</div>