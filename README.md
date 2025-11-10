# Updated Portfolio Website

A modern, responsive portfolio website featuring multiple template options and a full-stack integrated solution with Vue.js frontend and Apollo GraphQL backend.

## 🚀 Project Overview

This repository contains three distinct portfolio implementations:

1. **Integrated Portfolio** - Full-stack solution with Vue.js + Apollo GraphQL
2. **Original Template** - Clean HTML/CSS/JS portfolio
3. **Tech Template** - React-based modern portfolio

## 📁 Project Structure

```
Updated_Portoflio_Website/
├── integrated-portfolio/          # Full-stack Vue.js + GraphQL solution
│   ├── client/                   # Vue.js frontend
│   ├── server/                   # Apollo GraphQL backend
│   └── package.json              # Root package with scripts
├── original-template/            # HTML/CSS/JS portfolio
├── tech-template/               # React-based portfolio
├── .gitignore                   # Git ignore rules
└── README.md                    # This file
```

## 🛠 Tech Stack

### Integrated Portfolio
**Frontend:**
- Vue.js 3 with Composition API
- Vue Router for navigation
- Pinia for state management
- Apollo Client for GraphQL
- Tailwind CSS for styling
- Sass for advanced styling
- Locomotive Scroll for smooth scrolling
- Vite for build tooling

**Backend:**
- Node.js with Express
- Apollo Server for GraphQL
- PostgreSQL/SQLite database
- Sequelize ORM
- JWT authentication
- bcryptjs for password hashing

### Tech Template
- React 18
- Vite build tool
- Modern component architecture

### Original Template
- Vanilla HTML5
- CSS3 with modern features
- Vanilla JavaScript

## 🚀 Quick Start

### Integrated Portfolio (Recommended)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/creationsstudio/updated-portoflio-website.git
   cd Updated_Portoflio_Website/integrated-portfolio
   ```

2. **Install all dependencies:**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables:**
   ```bash
   # Copy environment files
   cp client/.env.example client/.env
   cp server/.env.example server/.env
   
   # Edit the .env files with your configuration
   ```

4. **Run database migrations:**
   ```bash
   npm run dev:server
   # In another terminal:
   cd server && npm run db:migrate
   ```

5. **Start development servers:**
   ```bash
   npm run dev
   ```

   This will start both the client (http://localhost:5173) and server (http://localhost:4000/graphql)

### Tech Template

```bash
cd tech-template
npm install
npm run dev
```

### Original Template

Simply open `original-template/index.html` in your browser.

## 📜 Available Scripts

### Integrated Portfolio

| Script | Description |
|--------|-------------|
| `npm run dev` | Start both client and server in development mode |
| `npm run dev:client` | Start only the Vue.js client |
| `npm run dev:server` | Start only the GraphQL server |
| `npm run build` | Build the client for production |
| `npm start` | Start the server in production mode |
| `npm run install:all` | Install dependencies for all packages |

### Individual Templates

Each template has its own `package.json` with relevant scripts for development and building.

## 🔧 Configuration

### Environment Variables

**Client (.env):**
```env
VITE_GRAPHQL_URI=http://localhost:4000/graphql
VITE_APP_TITLE=Your Portfolio
```

**Server (.env):**
```env
PORT=4000
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

### Database Setup

The integrated portfolio supports both PostgreSQL and SQLite:

- **Development:** SQLite (default)
- **Production:** PostgreSQL (recommended)

## 🎨 Features

### Integrated Portfolio
- ✅ Responsive design with mobile-first approach
- ✅ Dark/Light mode support
- ✅ Smooth scrolling animations
- ✅ Project showcase with filtering
- ✅ Contact form with backend integration
- ✅ Admin panel for content management
- ✅ SEO optimized
- ✅ Performance optimized with lazy loading
- ✅ GraphQL API with real-time updates

### Responsive Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px - 1279px
- **Large Desktop:** 1280px - 1535px
- **Extra Large:** ≥ 1536px

## 🚀 Deployment

### Client (Frontend)

**Vercel (Recommended):**
```bash
cd client
npm run build
# Deploy dist/ folder to Vercel
```

**Netlify:**
```bash
cd client
npm run build
# Deploy dist/ folder to Netlify
```

### Server (Backend)

**Heroku:**
```bash
cd server
# Add Heroku remote
git subtree push --prefix=server heroku main
```

**Railway/Render:**
- Connect your GitHub repository
- Set build command: `cd server && npm install`
- Set start command: `cd server && npm start`

## 🔍 API Documentation

The GraphQL API provides the following queries and mutations:

### Queries
- `profile` - Get user profile information
- `projects` - Get all projects with filtering options
- `skills` - Get technical skills
- `experiences` - Get work experience

### Mutations
- `createProject` - Add new project
- `updateProject` - Update existing project
- `deleteProject` - Remove project
- `sendMessage` - Send contact form message

Access GraphQL Playground at: `http://localhost:4000/graphql`

## 🧪 Testing

```bash
# Run client tests
cd client && npm test

# Run server tests
cd server && npm test

# Run all tests
npm run test:all
```

## 📈 Performance Optimizations

- **Code Splitting:** Automatic route-based code splitting
- **Lazy Loading:** Images and components loaded on demand
- **Bundle Optimization:** Tree shaking and minification
- **Caching:** Aggressive caching strategies
- **CDN Ready:** Optimized for CDN deployment

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🛠 Production Updates Workflow

To quickly add or reorder projects on the live site without changing any UI code, use the JSON-driven setup under the integrated portfolio app.

- Source of truth: `integrated-portfolio/api/projects-config.json`
- Serverless GraphQL (deployed with the integrated app): `integrated-portfolio/api/graphql.js` loads this JSON and serves projects to the client
- Client GraphQL endpoint: `/api/graphql` (configured via `integrated-portfolio/client/.env.*`)
- Deploy target: Vercel uses `integrated-portfolio/vercel.json` for routes and functions

### Add or Update a Project
- Edit `integrated-portfolio/api/projects-config.json` and add/update a project object with:
  - `title`, `shortDescription`, `description`, `technologies`, `imageUrl`, `liveUrl`, `githubUrl`
  - `featured` (`true` for Home Featured), `order` (integer display order), `status` (`published`), `category`
- Place the screenshot in `integrated-portfolio/client/public/projects` and reference it via `imageUrl` like `/projects/<filename>.png`.
- Keep `order` values unique and sequential (1 is highest priority).

### Reorder and Feature
- To change Home Featured order, adjust `order` and set `featured: true` for projects you want featured.
- To unfeature, set `featured: false` (they remain visible on the Projects page).

### Verify Locally
- Development client: `cd integrated-portfolio/client && npm run dev` (or `./node_modules/.bin/vite`).
- Local GraphQL server for integrated stack: `cd integrated-portfolio/server && node index.js` (optional).
- The client is configured to use `/api/graphql` in development and production via `VITE_GRAPHQL_URI`.

### Deploy
- Commit and push changes to GitHub (`master`). Vercel (with root directory set to `integrated-portfolio`) will build and deploy automatically.
- No UI code changes are required for data-only updates.

### Troubleshooting
- If an image doesn’t appear, ensure the file exists under `integrated-portfolio/client/public/projects` and the `imageUrl` path matches.
- Featured projects are filtered by the GraphQL endpoint; ordering is defined by the `order` values in the JSON/config list.

> Note: The root-level `api/` folder is not used for the integrated portfolio deployment. Keep all project data changes in `integrated-portfolio/api/projects-config.json` to avoid confusion.

## 👨‍💻 Author

**Creations Studio**
- GitHub: [@creationsstudio](https://github.com/creationsstudio)
- Portfolio: [Your Portfolio URL]

## 🙏 Acknowledgments

- Vue.js team for the amazing framework
- Apollo GraphQL for the excellent GraphQL implementation
- Tailwind CSS for the utility-first CSS framework
- All open source contributors

## 📞 Support

If you have any questions or need help with setup, please:

1. Check the [Issues](https://github.com/creationsstudio/updated-portoflio-website/issues) page
2. Create a new issue if your problem isn't already addressed
3. Provide detailed information about your environment and the issue

---

⭐ **Star this repository if you found it helpful!**