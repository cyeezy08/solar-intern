# ☀️ Solar Calculator Platform

> A professional solar energy calculator built under mentorship from **Chandra Rau** (Founder, MIT CS) as part of the **Trexon Solar Software Engineering Internship** program.

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16.3-black)](https://nextjs.org/)

---

## 🎯 Project Overview

Solar Calculator is a professional web platform designed to help residential, commercial, and industrial customers configure and understand their solar energy systems. Built with production-grade architecture and modern software engineering practices, this project demonstrates full-stack development capabilities in a real-world renewable energy context.

**Internship Program:** [Trexon Solar Software Engineering Internship](https://trexon.my/internships/solar-software)  
**Mentor:** Chandra Rau (Founder, MIT CS) — Direct daily pairing with weekly 1:1s and real-time PR reviews

---

## ✨ Key Features

- **Advanced Solar Calculations** — Precise energy production estimates based on system configuration and location
- **Interactive Calculator UI** — Modern, responsive interface for exploring solar options
- **Proposal Management** — Generate and track solar energy proposals with persistent storage
- **Production-Ready Architecture** — Server-side rendering with Next.js, type-safe database queries, containerized deployment
- **Professional Code Quality** — TypeScript, ESLint, modular component architecture
- **Real-time Data Processing** — Efficient calculations with streaming support

---

## 🏗️ Technical Architecture

### Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | React 19 + Next.js 16 | Modern UI framework with App Router |
| **Language** | TypeScript 5 | Type-safe development |
| **Styling** | Tailwind CSS v4 | Utility-first CSS framework |
| **Database** | PostgreSQL | Reliable data persistence |
| **ORM/Query** | Drizzle ORM + Kysely | Type-safe database queries |
| **Deployment** | Docker + Google Cloud Run | Containerized production deployment |
| **Code Quality** | ESLint | Automated linting |

### Project Structure

```
solar-intern/
├── src/
│   ├── app/                    # Next.js App Router pages and layouts
│   │   ├── page.tsx            # Main calculator interface
│   │   ├── proposals/          # Proposal management pages
│   │   ├── api/                # Server API routes
│   │   └── calculation.ts      # Solar calculation logic
│   ├── components/             # Reusable React components
│   │   ├── ui/                 # Base UI components (Card, Button, Table)
│   │   └── calculator.tsx      # Calculator component
│   ├── db/                     # Database layer
│   │   ├── schema.ts           # Drizzle schema definitions
│   │   ├── repo.ts             # Data access functions
│   │   └── index.ts            # Database client
│   └── lib/                    # Utility functions
├── public/                     # Static assets
├── Dockerfile                  # Container configuration
├── next.config.ts              # Next.js configuration
└── tsconfig.json               # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (or via Docker)
- **PostgreSQL** 14+ (or Docker Compose)
- **npm** or **yarn**

### Local Development

1. **Clone and install dependencies**
   ```bash
   git clone https://github.com/cyeezy08/solar-intern.git
   cd solar-intern
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Update DATABASE_URL with your PostgreSQL connection string
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application.

4. **Run with Docker**
   ```bash
   docker build -t solar-intern .
   docker run -p 3000:3000 solar-intern
   ```

### Available Scripts

```bash
npm run dev       # Start development server with hot reload
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Run ESLint on the codebase
```

---

## 📊 Features in Detail

### Solar Calculator Engine
- Configurable system specifications (residential, commercial, industrial)
- Real-world efficiency calculations
- Detailed production estimates
- ROI and payback period analysis

### Proposal System
- Create and manage solar proposals
- Persistent storage in PostgreSQL
- Export and tracking capabilities
- Integration with calculation engine

### Responsive Design
- Mobile-first approach with Tailwind CSS v4
- Optimized for all screen sizes
- Accessibility best practices

---

## 🔧 Development Practices

### Code Quality
- **Type Safety:** 100% TypeScript codebase
- **Linting:** ESLint configuration for code consistency
- **Modern Patterns:** React Server Components, Next.js App Router
- **Component Architecture:** Modular, reusable UI components

### Database
- **Type-Safe Queries:** Drizzle ORM + Kysely for compile-time safety
- **Schema Management:** Versioned database schema
- **Data Access:** Repository pattern for clean separation

### Performance
- **Server-Side Rendering:** Next.js for optimal Core Web Vitals
- **Streaming:** React streaming for faster Time to First Byte
- **Optimization:** Image optimization, CSS purging

---

## 📝 Internship Program Details

This project is developed under the **Trexon Solar Software Engineering Internship** program:

✅ **Daily Mentorship** from Chandra Rau (Founder, MIT CS)  
✅ **Weekly 1:1s** for guidance and feedback  
✅ **Public PRs & Code Reviews** for real-time feedback  
✅ **Reference Letter** upon successful completion  

The program focuses on:
- Building production-grade software in a renewable energy context
- Software engineering best practices and design patterns
- Real-world deployment and DevOps
- Professional development and mentorship

---

## 🤝 Contributing

While this is an internship project, we welcome suggestions and feedback:

1. **Fork** the repository
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit changes** with descriptive messages
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open a Pull Request** with detailed description

All PRs are reviewed in real-time as part of the mentorship program.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact & Links

- **Internship Program:** [Trexon Solar Internships](https://trexon.my/internships/solar-software)
- **Mentor:** Chandra Rau
- **Company:** [Trexon Energy](https://trexon.my/)

---

## 🌱 About Renewable Energy

This project supports Trexon's mission to democratize solar energy access in Malaysia. Learn more about solar energy systems and renewable energy at [Trexon Energy](https://trexon.my/).

---

**Built with ❤️ under professional mentorship. Demonstrating production-grade software engineering practices.**