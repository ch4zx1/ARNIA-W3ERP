import { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// PAGES
import Login from '@/pages/login/login'
import Dashboard from '@/pages/dashboard/dashboard'
import { Spinner } from '@/components/ui'
import Produtos from '@/pages/produtos/produtos'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/produtos',
    element: <Produtos />
  }
])

export default function Router() {
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
