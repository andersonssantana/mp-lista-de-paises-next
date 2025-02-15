# [🌍 Lista de Países usando Next.js](https://codante.io/mini-projetos/lista-de-paises-nextjs)

## 📖 Sobre o Projeto
Este projeto foi desenvolvido para praticar e demonstrar habilidades com **Next.js**, **React**, e consumo de APIs. A aplicação exibe uma lista de países utilizando dados de uma API externa, permitindo visualizar informações detalhadas sobre cada um deles.

## 🚀 Tecnologias Utilizadas

- **Next.js** - Framework React para aplicações otimizadas
- **React** - Biblioteca para construção de interfaces dinâmicas
- **TypeScript** - Superset do JavaScript para maior segurança no código
- **Tailwind CSS** - Estilização eficiente e responsiva
- **API REST** - Consumo de dados externos sobre países

## 📌 Funcionalidades

- 📍 Listagem de países com nome, bandeira e informações gerais
- 📊 Exibição detalhada de informações ao selecionar um país

## 📂 Estrutura do Projeto

```
mp-lista-de-paises-next/
├── public/
├── src/
│   └── app/
│       ├── components/
│       │   ├── CountryCard.tsx
│       │   ├── CountryError.tsx
│       │   ├── DetailItem.tsx
│       │   └── Loading.tsx
│       ├── countries/[cca3]/
│       │   ├── error.tsx
│       │   └── page.tsx
│       ├── pages/
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.tsx
│       ├── page.tsx
│       └── types.ts
├── .gitignore
├── eslint.config.mjs
├── LICENSE
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## 🎯 Como Executar o Projeto

### 1️⃣ Pré-requisitos
Certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) versão 16 ou superior
- [Yarn](https://yarnpkg.com/) ou npm para gerenciar pacotes

### 2️⃣ Clonar o Repositório
```bash
git clone https://github.com/andersonssantana/mp-lista-de-paises-next.git
cd mp-lista-de-paises-next
```

### 3️⃣ Instalar Dependências
Com **Yarn**:
```bash
yarn install
```
Ou com **npm**:
```bash
npm install
```

### 4️⃣ Rodar o Projeto
Com **Yarn**:
```bash
yarn dev
```
Ou com **npm**:
```bash
npm run dev
```
O projeto estará disponível em **http://localhost:3000** 🚀

## 📜 Licença
Este projeto está sob a licença **MIT**. Sinta-se à vontade para usar e modificar conforme necessário.

---
📌 *Desenvolvido por [Anderson Santana](https://github.com/andersonssantana)*