import { createBrowserRouter, Navigate } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import HomePage from './pages/home/HomePage.tsx';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import ClubDetailPage from './pages/club/ClubDetailPage.tsx';
import ClubCreatePage from './pages/club/ClubCreatePage.tsx';
import BookDetailPage from './pages/book/BookDetailPage.tsx';
import ClubApplicationPage from './pages/club/ClubApplicationPage.tsx';
import FavoriteListPage from './pages/favorites/FavoriteListPage.tsx';
import ChatListPage from './pages/chat/ChatListPage.tsx';
import ProfilePage from './pages/member/Profile.tsx';
import ChatRoomPage from './pages/chat/ChatRoomPage.tsx';
import Notification from './pages/notification/Notification.tsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
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
        path: 'clubs/applications',
        element: <ClubApplicationPage />,
      },
      {
        path: 'favorites',
        element: <FavoriteListPage />,
      },
      {
        path: 'chat',
        element: <ChatListPage />,
      },
      {
        path: 'notifications',
        element: <Notification />,
      },
      {
        path: 'chat/:roomId',
        element: <ChatRoomPage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export default router;
