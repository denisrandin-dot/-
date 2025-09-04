# Overview

This is a cryptocurrency arbitrage landing page for "МосКриптоБанк", built as a modern React application with Express.js backend. The project implements a premium landing page designed to sell subscriptions to a Telegram bot and 3-month educational program for cryptocurrency arbitrage trading. The application features a dark, high-tech design with Russian localization, targeting crypto investors seeking passive income opportunities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with custom CSS variables for theming, featuring a dark premium design
- **UI Components**: Extensive use of Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth animations and transitions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Build System**: Vite with custom configuration for development and production

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Development Setup**: Custom Vite integration for SSR-like development experience
- **Routing**: Modular route registration system with /api prefix convention
- **Error Handling**: Centralized error handling middleware
- **Storage Interface**: Abstract storage interface with in-memory implementation

## Data Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL with Neon serverless driver
- **Schema**: User management schema with username/password authentication
- **Validation**: Zod schemas for type-safe data validation
- **Migrations**: Drizzle Kit for database migrations

## Component Architecture
- **Layout Components**: Modular header and footer with Telegram integration
- **Section Components**: Landing page broken into reusable sections (hero, benefits, testimonials, etc.)
- **UI Components**: Comprehensive component library using Radix UI primitives
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Styling System
- **Theme**: Dark theme with CSS custom properties
- **Color Palette**: Primary (green), secondary (cyan), accent (orange/gold) colors
- **Typography**: Inter font family with multiple weights
- **Component Variants**: Class Variance Authority for component styling variants

# External Dependencies

## Core Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **UI Framework**: Radix UI component primitives (@radix-ui/*)
- **Styling**: Tailwind CSS, Class Variance Authority, clsx for conditional classes
- **Animations**: Framer Motion for page transitions and micro-interactions
- **State Management**: TanStack React Query for API state management

## Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM, @neondatabase/serverless for PostgreSQL
- **Development**: tsx for TypeScript execution, Vite for development server
- **Validation**: Zod for schema validation and type inference

## Development Tools
- **Build Tools**: Vite with React plugin, esbuild for production builds
- **TypeScript**: Full TypeScript setup with path mapping
- **Replit Integration**: Replit-specific plugins for development environment
- **CSS Processing**: PostCSS with Tailwind CSS and Autoprefixer

## External Services
- **Database**: Neon PostgreSQL serverless database
- **Telegram Integration**: All CTA buttons redirect to Telegram (@thedeeniss)
- **Image Assets**: Unsplash for stock photography
- **Fonts**: Google Fonts (Inter), Font Awesome for icons

## Production Considerations
- **Environment Variables**: DATABASE_URL for database connection
- **Build Process**: Separate client and server build processes
- **Static Assets**: Vite handles static asset optimization and bundling
- **Session Management**: connect-pg-simple for PostgreSQL session storage (configured but not actively used)