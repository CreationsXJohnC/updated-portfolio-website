# Integrated Portfolio Website

A modern, full-stack portfolio website built with Vue.js, Apollo Server, GraphQL, and PostgreSQL. This project integrates features from multiple portfolio templates into a cohesive, scalable application.

## Tech Stack

### Frontend
- **Vue.js 3** - Progressive JavaScript framework
- **Apollo Client** - GraphQL client with caching
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Pinia** - State management for Vue
- **Vue Router** - Official router for Vue.js

### Backend
- **Apollo Server** - GraphQL server
- **Express.js** - Web application framework
- **PostgreSQL** - Relational database
- **Sequelize** - ORM for PostgreSQL
- **GraphQL** - Query language for APIs

## Features

- 🎨 Modern, responsive design
- 🚀 Fast loading with optimized assets
- 📱 Mobile-first approach
- 🎭 Smooth animations and interactions
- 📧 Contact form with email integration
- 🗃️ Dynamic content management via GraphQL
- 🔍 SEO optimized
- 🌙 Dark/Light mode support

## Project Structure

```
integrated-portfolio/
├── client/                 # Vue.js frontend
│   ├── src/
│   │   ├── components/     # Reusable Vue components
│   │   ├── views/          # Page components
│   │   ├── stores/         # Pinia stores
│   │   ├── graphql/        # GraphQL queries and mutations
│   │   └── assets/         # Static assets
├── server/                 # Apollo Server backend
│   ├── models/             # Database models
│   ├── resolvers/          # GraphQL resolvers
│   ├── schemas/            # GraphQL schemas
│   └── config/             # Database and server config
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL (v13 or higher)
- npm or yarn

### Installation

1. Clone the repository and navigate to the project directory
2. Install all dependencies:
   ```bash
   npm run install:all
   ```

3. Set up environment variables:
   ```bash
   # In server/.env
   DATABASE_URL=postgresql://username:password@localhost:5432/portfolio_db
   JWT_SECRET=your_jwt_secret_here
   EMAIL_SERVICE_ID=your_emailjs_service_id
   EMAIL_TEMPLATE_ID=your_emailjs_template_id
   EMAIL_PUBLIC_KEY=your_emailjs_public_key
   ```

4. Create and migrate the database:
   ```bash
   npm run db:migrate
   ```

5. Start the development servers:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:5173` and the GraphQL server at `http://localhost:4000/graphql`.

## Development

- `npm run dev` - Start both frontend and backend in development mode
- `npm run dev:client` - Start only the Vue.js frontend
- `npm run dev:server` - Start only the Apollo Server backend
- `npm run build` - Build the frontend for production
- `npm run start` - Start the production server

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details