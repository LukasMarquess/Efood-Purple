# eFood

Aplicação web estilo delivery para explorar restaurantes, visualizar cardápios e montar um carrinho de compras. O projeto foi desenvolvido com React, TypeScript e Vite, com navegação em rotas e estado global para o carrinho.

## Funcionalidades

- Listagem de restaurantes na página inicial
- Página de perfil de cada restaurante com cardápio
- Modal de detalhes do produto ao clicar em um item
- Adição de itens ao carrinho com controle de quantidade
- Carrinho aberto a partir do estado global com Redux Toolkit
- Interface responsiva com Styled Components

## Tecnologias utilizadas

- React 19
- TypeScript
- Vite
- Redux Toolkit
- React Router DOM
- Styled Components
- Formik, Yup e React IMask

## Estrutura do projeto

```text
src/
  components/
    Cart/
    Footer/
    ProductCard/
    RestaurantCard/
  pages/
    Home/
    Perfil/
  store/
    reducers/
  styles/
  types.ts
```

## Requisitos

- Node.js 18+ ou superior
- npm 9+ ou superior

## Instalação

```bash
npm install
```

## Scripts disponíveis

```bash
npm run dev
```

Inicia o servidor de desenvolvimento do Vite.

```bash
npm run build
```

Gera a build de produção do projeto.

```bash
npm run lint
```

Executa a análise estática do código com ESLint.

```bash
npm run preview
```

Abre uma pré-visualização da build gerada.

## Como usar

1. Execute o comando de instalação.
2. Inicie o projeto com `npm run dev`.
3. Acesse a aplicação no navegador em `http://localhost:5173`.
4. Navegue pelos restaurantes e adicione produtos ao carrinho.

## Dados da aplicação

Os restaurantes e cardápios são carregados a partir de uma API externa:

- https://api-ebac.vercel.app/api/efood/restaurantes

Essa API fornece os dados exibidos na home e nas páginas de perfil dos restaurantes.
