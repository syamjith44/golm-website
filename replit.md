# Overview

This is a full-stack React application for "golm ai", an AI agent company showcasing their products and vision. The application features a modern cyberpunk-themed design with interactive elements, particle backgrounds, and glassmorphism effects. It's built as a single-page application with multiple pages including home, products, vision, technology, and contact sections. The application allows users to submit contact forms and view information about AI agent products.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Client-side routing implemented with Wouter for lightweight navigation
- **UI Components**: Shadcn/ui component library with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom cyberpunk theme variables and glassmorphism effects
- **Animations**: Framer Motion for page transitions and component animations
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing

## Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **API Design**: RESTful API endpoints with JSON responses
- **Request Processing**: Express middleware for JSON parsing, URL encoding, and request logging
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Development Setup**: Vite integration for hot module replacement in development mode
- **Static Serving**: Express static file serving for production builds

## Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for database migrations and schema updates
- **Development Storage**: In-memory storage implementation for development/testing
- **Connection**: Neon Database serverless connection for PostgreSQL hosting
- **Schema Definition**: Shared TypeScript schema definitions between client and server

## Authentication and Authorization
- **Session Management**: PostgreSQL session store using connect-pg-simple
- **Schema**: User table with username/password fields prepared for authentication implementation
- **Security**: Placeholder for future authentication middleware integration

## External Dependencies
- **Database Hosting**: Neon Database serverless PostgreSQL
- **UI Components**: Radix UI primitives for accessible component foundations
- **Font Loading**: Google Fonts integration for Inter, Geist Mono, and other typography
- **Development Tools**: Replit-specific plugins for development environment integration
- **Form Validation**: Zod schema validation library for runtime type checking
- **Date Handling**: date-fns library for date manipulation and formatting