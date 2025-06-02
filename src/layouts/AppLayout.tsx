import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import { container, view } from './AppLayout.css.ts';
import Navigation from '../components/Navigation';

const AppLayout = () => {
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
