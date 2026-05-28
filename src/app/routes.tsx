import { createBrowserRouter, Navigate } from 'react-router-dom';
// Layouts
import { SiteLayout } from './site/layout';
import { AuthLayout } from './auth/layout';
import { AdminLayout } from './admin/layout';
// Pages
import { Home } from './site/Home/Home';
import { Profile } from './site/Profile/Profile';
import { Login } from './auth/Login/Login';
import { Register } from './auth/Register/Register';
import { Dashboard } from './admin/Dashboard/Dashboard';
import { ErrorPage } from './ErrorPage/ErrorPage';
import { NotFound } from './NotFound/NotFound';
// Actions
import { loginAction } from './auth/Login/action';
import { registerAction } from './auth/Register/action';



export const router = createBrowserRouter([
    {
    path: '/',
    element: <SiteLayout />,
    errorElement: <ErrorPage />, 
    children: [
      {
        index: true, 
        element: <Home />,  
      },
      {
        path: 'profile/:userId',
        element: <Profile />,
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="login" replace />
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />,
  }
])