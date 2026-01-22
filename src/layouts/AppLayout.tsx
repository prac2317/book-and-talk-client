import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import { container, view } from './AppLayout.css.ts';
import Navigation from '../components/Navigation';
import { useEffect, useState } from 'react';
import { fetchMemberId } from '@api/auth.ts';
import { useNotificationStore } from '@store/notificationStore.ts';

const AppLayout = () => {
  const [connected, setConnected] = useState(false);
  const [memberId, setMemberId] = useState('');

  const { unreadCount, increaseUnreadCount } = useNotificationStore();

  useEffect(() => {
    console.log('unreadCount 변경됨:', unreadCount);
  }, [unreadCount]);

  useEffect(() => {
    loadMemberId();
  }, []);

  useEffect(() => {
    if (!memberId) {
      return;
    }
    // setIsAuthenticated(true);
    console.log('memberId AppLayout에 들어옴!!', memberId);
  }, [memberId]);

  useEffect(() => {
    if (!memberId) {
      return;
    }

    console.log(memberId);

    const eventSource = new EventSource(
      `${import.meta.env.VITE_BASE_URL}/api/notifications/subscribe?memberId=${memberId}`,
      {
        withCredentials: true,
      },
    );

    console.log('이벤트 시작');

    eventSource.addEventListener('message', (e) => {
      console.log('message', e);
    });

    eventSource.addEventListener('open', (e) => {
      console.log('open', e);
      console.log(connected);
      setConnected(true);
    });

    eventSource.addEventListener('notification', (e) => {
      const notification = JSON.parse(e.data);
      console.log('notification', notification);

      increaseUnreadCount();
    });

    console.log('이벤트 계속');
  }, [memberId]);

  const loadMemberId = async () => {
    try {
      const res = await fetchMemberId();
      console.log(res);
      setMemberId(res);
    } catch (error) {
      console.error(error);
    }
  };

  const location = useLocation();

  const noNavRoutes = ['/clubs/applications', '/clubs/create', '/notifications'];

  const showNavigation =
    !noNavRoutes.includes(location.pathname) && !location.pathname.startsWith('/chat/');

  return (
    <div className={container}>
      <main className={view}>
        <Outlet />
      </main>
      {showNavigation && <Navigation />}
      <ScrollRestoration />
    </div>
  );
};

export default AppLayout;
