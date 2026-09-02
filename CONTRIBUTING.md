# Contributing to Solar Calculator

Thank you for your interest in contributing to the Solar Calculator project! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and professional in all interactions
- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Create meaningful pull requests with detailed descriptions

## Development Workflow

### 1. Set Up Your Environment

```bash
# Clone the repository
git clone https://github.com/cyeezy08/solar-intern.git
cd solar-intern

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local
```

### 2. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
# or for bug fixes:
git checkout -b fix/your-bug-name
```

### 3. Make Your Changes

- Follow TypeScript best practices (strict mode enabled)
- Keep components modular and reusable
- Add comments for complex logic
- Ensure all changes pass linting

### 4. Run Quality Checks

```bash
# Lint your code
npm run lint

# Type check
npx tsc --noEmit

# Recommended: check for any regressions
npm run dev
```

### 5. Commit Your Work

```bash
# Write descriptive commit messages
git commit -m "feat: Add feature description

- Detailed explanation of changes
- Impact and reasoning
- Related issues if applicable"
```

### 6. Push and Create a Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a PR on GitHub with:
- Clear title describing the change
- Detailed description of what and why
- Screenshots if UI changes
- Reference to related issues

## Code Style Guidelines

### TypeScript
- Use strict type checking (no `any` types)
- Export interfaces from components
- Use meaningful variable names
- Add JSDoc comments for public functions

```typescript
/**
 * Calculate solar energy production metrics
 * @param roofArea - Available roof area in m²
 * @returns Calculation results
 */
export function calculateSolar(roofArea: number): CalcResult {
  // implementation
}
```

### React Components
- Use functional components with hooks
- Keep components focused and small
- Extract reusable logic to utilities
- Use TypeScript for prop types

```typescript
interface CardProps {
  title: string
  children: React.ReactNode
}

export function Card({ title, children }: CardProps) {
  return <div>{children}</div>
}
```

### Database
- Use Drizzle ORM for type safety
- Define schemas clearly
- Add comments for complex queries
- Use the repository pattern

## Testing

While we don't have a formal test suite yet, consider:
- Testing calculation logic manually
- Verifying API responses
- Testing edge cases in the calculator
- Checking responsive design on multiple devices

## Documentation

If you're adding features, please update:
- README.md for user-facing features
- Inline code comments for complex logic
- JSDoc comments for exported functions

## Performance Considerations

- Use React Server Components where possible
- Optimize images and assets
- Minimize bundle size
- Consider database query performance

## Deployment

This project is designed for Google Cloud Run deployment:

```bash
# Build Docker image
docker build -t solar-intern .

# Run locally
docker run -p 3000:3000 solar-intern

# Deploy to Cloud Run
gcloud run deploy solar-intern --source .
```

## Questions or Issues?

- Check the README for common setup issues
- Review existing PRs for similar changes
- Open an issue for bugs or feature requests
- Reach out to the maintainers

## Mentorship Program

This project is part of the Trexon Solar Software Engineering Internship program under the mentorship of Chandra Rau (Founder, MIT CS). All contributions are reviewed in real time as part of the learning experience.

---

**Thank you for contributing! Your work helps improve solar energy accessibility.** 🌞
