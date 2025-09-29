import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import { container, view } from './AppLayout.css.ts';
import Navigation from '../components/Navigation';
import { useEffect, useState } from 'react';
import { fetchMemberId } from '@api/auth.ts';

const AppLayout = () => {
  const [memberId, setMemberId] = useState('');

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
      setUnreadCount(Number(e.data));
    });

    eventSource.addEventListener('open', (e) => {
      console.log('open', e);
      setConnected(true);
    });

    eventSource.addEventListener('notification', (e) => {
      const notification = JSON.parse(e.data);
      console.log('notification', notification);
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
