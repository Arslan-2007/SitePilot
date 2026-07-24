import type { ReactElement } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from '@pages/HomePage'
import LoginPage from '@pages/LoginPage'
import SignupPage from '@pages/SignupPage'
import PricingPage from '@pages/PricingPage'
import DashboardPage from '@pages/DashboardPage'
import ReportsPage from '@pages/ReportsPage'
import CoachPage from '@pages/CoachPage'
import SettingsPage from '@pages/SettingsPage'
import NotFoundPage from '@pages/NotFoundPage'

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignupPage /> },
  { path: '/pricing', element: <PricingPage /> },
  { path: '/dashboard', element: <DashboardPage /> },
  { path: '/reports', element: <ReportsPage /> },
  { path: '/coach', element: <CoachPage /> },
  { path: '/settings', element: <SettingsPage /> },
  { path: '*', element: <NotFoundPage /> },
])

const AppRouter = (): ReactElement => {
  return <RouterProvider router={router} />
}

export default AppRouter
