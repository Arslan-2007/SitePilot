# SitePilot – Software Architecture

**Version:** 1.0  
**Status:** Locked (Update only through architectural decisions)  
**Owner:** Technical Team  
**Last Updated:** July 2026

---

# 1. Purpose

This document defines the software architecture for SitePilot.

Every feature, component, API, page, and future contribution must follow these rules.

These standards exist to ensure:

- Scalability
- Maintainability
- Readability
- Performance
- Security
- Consistency

---

# 2. Architecture Philosophy

SitePilot follows these principles:

- Modular
- Feature-first
- Reusable
- Scalable
- Mobile-first
- Accessibility-first
- API-driven
- Type-safe

Avoid shortcuts that create technical debt.

---

# 3. Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router
- Framer Motion
- React Hook Form
- Zod
- TanStack Query

## Backend

Supabase

## Database

PostgreSQL

## Payments

Stripe

## Hosting

Netlify

---

# 4. Folder Structure

```text
src/
│
├── app/
│   ├── providers/
│   ├── router/
│   └── layouts/
│
├── assets/
│
├── components/
│   ├── common/
│   ├── forms/
│   ├── ui/
│   └── charts/
│
├── features/
│   ├── auth/
│   ├── dashboard/
│   ├── audits/
│   ├── reports/
│   ├── ai-coach/
│   └── settings/
│
├── hooks/
├── services/
├── lib/
├── pages/
├── styles/
├── types/
├── utils/
├── constants/
└── main.tsx
```

---

# 5. Feature-Based Architecture

Every major feature owns its own logic.

Example:

```text
features/
    audits/
        components/
        hooks/
        services/
        types/
        pages/
```

Never place feature-specific code into global folders.

Global folders are only for reusable code.

---

# 6. Component Rules

Reusable UI components belong in:

components/ui

Examples:

- Button
- Card
- Dialog
- Input
- Badge
- Table

Business-specific components belong inside their feature folder.

Example:

```text
features/audits/components/AuditScoreCard.tsx
```

---

# 7. State Management

Use local state whenever possible.

Use Context only for global concerns:

- Theme
- Authentication
- User preferences

Use TanStack Query for:

- Server state
- API caching
- Background refetching

Avoid unnecessary global state.

---

# 8. Routing

Routes should remain clean.

Example:

```
/
login
signup
pricing
dashboard
dashboard/audits
dashboard/reports
dashboard/settings
```

Use lazy loading for page components.

---

# 9. API Layer

Never call APIs directly inside React components.

Correct flow:

```
Component
↓

Custom Hook

↓

Service

↓

Supabase/API
```

Example:

```ts
Dashboard
↓

useAudits()

↓

auditService.ts

↓

Supabase
```

---

# 10. Error Handling

Never ignore errors.

Every API call must:

- Handle failures
- Show friendly messages
- Log unexpected errors (future)

---

# 11. Validation

Never trust user input.

Use:

Zod

React Hook Form

Server validation

---

# 12. Styling Rules

Only Tailwind CSS.

Never use:

Inline styles

CSS frameworks

Random utility classes

Keep spacing consistent.

---

# 13. Naming Conventions

Components

PascalCase

Example:

AuditCard.tsx

Hooks

camelCase

Example:

useAudit.ts

Utilities

camelCase

Example:

formatDate.ts

Constants

UPPER_SNAKE_CASE

Example:

MAX_AUDITS

---

# 14. TypeScript Rules

Never use:

any

Always create interfaces or types.

Prefer explicit typing.

Strict mode must remain enabled.

---

# 15. Accessibility

Every page must support:

- Keyboard navigation
- Focus indicators
- ARIA labels where needed
- Semantic HTML
- Screen readers

Accessibility is a requirement, not an enhancement.

---

# 16. Performance

Always:

Lazy load pages

Optimize images

Avoid unnecessary renders

Memoize expensive calculations

Keep bundle size small

---

# 17. Security

Never expose secrets.

Store keys in environment variables.

Validate all user input.

Protect backend APIs.

---

# 18. Logging

Development:

Console logging allowed only during debugging.

Production:

Remove unnecessary console statements.

Future:

Centralized logging service.

---

# 19. Testing Strategy

Future versions should include:

Unit Tests

Integration Tests

End-to-End Tests

Testing framework decisions will be documented later.

---

# 20. Git Workflow

Branch naming:

feature/dashboard

feature/auth

feature/ai-coach

fix/navbar

Commit messages:

Good:

feat: add audit history page

fix: resolve routing issue

refactor: simplify theme provider

Avoid:

update

fix

changes

asdf

---

# 21. Code Review Checklist

Every pull request or sprint review should verify:

- Builds successfully
- No TypeScript errors
- No ESLint errors
- Responsive layout
- Accessible UI
- No duplicated code
- Reusable components
- Clean folder structure

---

# 22. Definition of Done

A feature is complete only if:

- Requirements are met
- Responsive
- Accessible
- Type-safe
- Reusable
- Tested manually
- No lint errors
- No TypeScript errors
- Code reviewed

---

# 23. Architecture Principles

When in doubt:

Choose simplicity.

Choose readability.

Choose maintainability.

Never sacrifice long-term quality for short-term speed.