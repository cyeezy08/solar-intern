# Development Guide

## Project Overview

Solar Calculator is a production-grade web application built with modern tools and best practices. This guide explains the architecture and conventions used.

## Architecture

### Directory Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── calculation.ts   # Core solar calculations
│   ├── calculator.tsx   # Calculator component
│   ├── proposals/       # Proposal management pages
│   └── api/             # Server routes
│       └── proposals/   # Proposal API endpoints
├── components/          # Reusable React components
│   └── ui/              # Base UI components (Card, Button, Table)
├── db/                  # Database layer
│   ├── schema.ts        # Drizzle ORM schema
│   ├── repo.ts          # Data access functions
│   └── index.ts         # Database client
└── lib/                 # Utilities
    ├── ga.tsx           # Analytics
    ├── kysely.ts        # Kysely configuration
    └── utils.tsx        # Helper functions
```

## Key Technologies

### Frontend
- **Next.js 16** with App Router for server-side rendering
- **React 19** for UI components
- **Tailwind CSS v4** for styling
- **TypeScript 5** for type safety

### Backend
- **Next.js API Routes** for serverless functions
- **PostgreSQL** for data persistence
- **Drizzle ORM** for type-safe database queries

### Deployment
- **Docker** for containerization
- **Google Cloud Run** for serverless deployment

## Type Safety

This project uses strict TypeScript settings:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true
  }
}
```

**Never use `any` type.** Instead:
- Define proper interfaces
- Use type guards for runtime validation
- Leverage TypeScript inference

## Component Patterns

### Server Components (Default)
Use for data fetching and server-only logic:

```typescript
export default async function Page() {
  const data = await fetchData()
  return <div>{data}</div>
}
```

### Client Components
Use for interactivity and state management:

```typescript
'use client'

import { useState } from 'react'

export default function Calculator() {
  const [value, setValue] = useState(0)
  return <input onChange={(e) => setValue(Number(e.target.value))} />
}
```

## Database Access

All database operations go through the Drizzle ORM:

```typescript
import { db } from '@/db/index'
import { calculatorResults } from '@/db/schema'

// Query
const results = await db
  .select()
  .from(calculatorResults)
  .limit(10)

// Insert
const [result] = await db
  .insert(calculatorResults)
  .values({ /* ... */ })
  .returning()
```

## API Routes

All API endpoints follow REST conventions:

```typescript
export async function GET(request: Request) {
  try {
    const data = await db.select().from(table)
    return Response.json(data)
  } catch (error) {
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate
    if (!isValid(body)) {
      return Response.json({ error: 'Invalid data' }, { status: 400 })
    }
    
    // Process
    const result = await db.insert(table).values(body).returning()
    return Response.json(result, { status: 201 })
  } catch (error) {
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

## Calculation Logic

The `calculation.ts` module contains the core business logic:

```typescript
export function calculateSolar(
  roofArea: number,
  panelEfficiency: number,
  sunHours: number,
  systemSize: number
): SolarCalculationResult {
  // Calculations based on Malaysian climate and rates
  // See JSDoc for detailed explanations
}
```

Key parameters:
- **roofArea**: Available space in m²
- **panelEfficiency**: Panel efficiency percentage (15-25%)
- **sunHours**: Average daily sun hours (typically 3-8 in Malaysia)
- **systemSize**: Desired system capacity in kW

## Error Handling

- API routes include try-catch blocks
- Input validation happens on POST requests
- Error responses include meaningful messages
- Console errors are logged for debugging

## Performance Optimization

- Components use React Server Components by default
- Images are optimized through Next.js
- Database queries are scoped with `.limit()`
- CSS is purged automatically

## Development Commands

```bash
npm run dev       # Start development server with hot reload
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Run ESLint
```

## Environment Variables

See `.env.example` for all required variables:

```
DATABASE_URL=postgresql://...
NEXT_PUBLIC_GA_ID=G_...
NODE_ENV=development
```

## Common Tasks

### Adding a New Page
1. Create file in `src/app/[name]/page.tsx`
2. Export default component
3. Use TypeScript for props/state
4. Link from navigation

### Adding a New API Route
1. Create file in `src/app/api/[route]/route.tsx`
2. Export GET/POST/etc functions
3. Add input validation
4. Include error handling
5. Return Response.json()

### Adding a New Component
1. Create in `src/components/[name].tsx`
2. Export component function
3. Define TypeScript interface for props
4. Use Tailwind for styling
5. Keep components focused

### Updating Database Schema
1. Modify `src/db/schema.ts`
2. Update any related queries
3. Test data persistence
4. Update API routes if needed

## Testing Considerations

While formal testing isn't implemented yet, verify:
- Calculation logic produces reasonable results
- API endpoints return correct status codes
- Form validation works correctly
- Database operations persist data
- UI is responsive on mobile devices

## Deployment

### Local Docker
```bash
docker build -t solar-intern .
docker run -p 3000:3000 solar-intern
```

### Google Cloud Run
```bash
gcloud run deploy solar-intern --source .
```

Ensure `DATABASE_URL` and other env vars are configured in Cloud Run settings.

---

For questions or clarifications, refer to the main README or open a GitHub issue.
