export const APP_NAME = import.meta.env.VITE_APP_NAME ?? 'SitePilot'
export const APP_ENV = import.meta.env.VITE_APP_ENV ?? 'development'

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  DASHBOARD: '/dashboard',
  REPORTS: '/reports',
  COACH: '/coach',
  PRICING: '/pricing',
  SETTINGS: '/settings',
} as const
