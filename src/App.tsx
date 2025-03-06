import { createBrowserRouter, Navigate } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
// import PrivateRoute from './layouts/PrivateRoute';
import Home from './pages/home/Home.tsx';

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
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

export default router;
