import { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// PAGES
import Login from '@/pages/login/login'
import Dashboard from '@/pages/dashboard/dashboard'
import { Spinner } from '@/components/ui'
import Produtos from '@/pages/produtos/produtos'
import Predicoes from '@/pages/predicoes/predicoes'

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
  },
  {
    path: '/predicoes',
    element: <Predicoes />
  }
])

export default function Router() {
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
