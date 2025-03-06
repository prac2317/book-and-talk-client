import { createBrowserRouter, Navigate } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
// import PrivateRoute from './layouts/PrivateRoute';
import Home from './pages/home/Home.tsx';
import LoginPage from './pages/auth/LoginPage.tsx';
import SignupPage from './pages/auth/SignupPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      // <PrivateRoute>
      <AppLayout />
      // </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

export default router;
