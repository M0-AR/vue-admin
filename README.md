# Vue Admin - Enterprise Dashboard Solution

[![Vue](https://img.shields.io/badge/vue-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007acc.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bootstrap](https://img.shields.io/badge/bootstrap-%23563d7c.svg?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

A powerful, high-performance administrative dashboard built with **Vue 3**, **TypeScript**, and **Bootstrap 5**. This repository serves as a complete "zero to hero" template for building scalable enterprise-grade management systems.

---

## 📋 Table of Contents
- [Business Overview](#-business-overview)
- [Key Features](#-key-features)
- [Technical Architecture](#-technical-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [API & Integration](#-api--integration)
- [Development Workflow](#-development-workflow)

---

## 💼 Business Overview

**Vue Admin** is designed to solve the complexity of enterprise resource planning by providing a clean, intuitive, and efficient interface for internal operations.

### Why this project?
- **Efficiency**: Streamlines the management of users, products, and orders in one place.
- **Scalability**: Built with TypeScript and Vue 3's Composition API to handle growing business logic.
- **Data-Driven**: Integrated sales analytics to empower decision-makers with real-time insights.
- **Secure**: Implements robust authentication and Role-Based Access Control (RBAC).

---

## ✨ Key Features

### 🔐 Security & User Management
- **Authentication**: Secure Login and Registration systems.
- **User Profiles**: Personalized profile management including password updates.
- **RBAC (Role-Based Access Control)**: Granular permission management for different employee roles.

### 📦 Product & Inventory Management
- **Full CRUD**: Create, Read, Update, and Delete products.
- **Media Support**: Integrated image upload functionality for product cataloging.

### 📊 Analytics & Reporting
- **Sales Dashboard**: Dynamic bar charts displaying daily sales trends using C3.js.
- **Order Management**: Detailed order tracking and breakdown of individual items.
- **Data Portability**: One-click "Export to CSV" feature for order data, facilitating external accounting and analysis.

---

## 🛠 Technical Architecture

This project leverages a modern frontend stack to ensure maintainability and performance.

### 🏗 Tech Stack
- **Framework**: [Vue.js 3](https://v3.vuejs.org/) (Composition API)
- **Language**: [TypeScript](https://www.typescriptlang.org/) for type safety and better DX.
- **State Management**: [Vuex 4](https://next.vuex.vuejs.org/) for centralized application state.
- **Navigation**: [Vue Router 4](https://next.router.vuejs.org/).
- **UI & Styling**: [Bootstrap 5](https://getbootstrap.com/) for responsive, mobile-first design.
- **Charts**: [C3.js](https://c3js.org/) (D3-based) for interactive visualizations.
- **HTTP Client**: [Axios](https://axios-http.com/) for API communication.

### ⚙️ Core Concepts
- **Composition API**: Used for better code organization and logic reuse (see `setup()` functions in components).
- **Type-Safe Models**: Explicit class definitions for `User`, `Product`, `Role`, and `Permission` in `src/models/`.
- **Interceptors**: Pre-configured Axios instance for handling credentials and base URLs.

---

## 📂 Project Structure

```bash
vue-admin/
├── public/              # Static assets and index.html
├── src/
│   ├── components/      # Reusable UI components (Nav, Menu, Paginator, etc.)
│   ├── models/          # TypeScript entity definitions (Models)
│   ├── pages/           # Main view components grouped by feature
│   │   ├── orders/      # Order listing and details
│   │   ├── products/    # Product CRUD views
│   │   ├── roles/       # RBAC management
│   │   └── users/       # User management
│   ├── router/          # Vue Router configuration
│   ├── store/           # Vuex modules and global state
│   ├── App.vue          # Root component
│   └── main.ts          # Application entry point
├── .eslintrc.js         # Linting configuration
├── package.json         # Dependencies and scripts
└── tsconfig.json        # TypeScript compiler options
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- Yarn or NPM

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Run the development server:
   ```bash
   yarn serve
   ```
   The application will be available at `http://localhost:8080`.

---

## 🔗 API & Integration

The frontend is configured to communicate with a backend API (default: `http://localhost:10000/api/`).

### Authentication Flow
- The app uses cookie-based authentication (`withCredentials: true`).
- A `Wrapper.vue` component acts as a guard, verifying the user's session on mount and redirecting to `/login` if unauthorized.

---

## 🛠 Development Workflow

### Build for Production
```bash
yarn build
```
This generates a `dist/` folder ready for deployment to any web server.

### Linting
Maintain code quality with:
```bash
yarn lint
```

---

Developed with ❤️ as a robust foundation for administrative software.
