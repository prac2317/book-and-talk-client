import { createBrowserRouter, Navigate } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Home from './pages/home/Home';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import ClubDetailPage from './pages/club/ClubDetailPage.tsx';
import ClubCreatePage from './pages/club/ClubCreatePage.tsx';
import BookDetailPage from './pages/book/BookDetailPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
      },
      {
        path: 'books/:isbn13',
        element: <BookDetailPage />,
      },
      {
        path: 'clubs/create',
        element: <ClubCreatePage />,
      },
      {
        path: 'clubs/:clubId',
        element: <ClubDetailPage />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export default router;
