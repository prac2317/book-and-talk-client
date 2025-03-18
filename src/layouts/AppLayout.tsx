import { Outlet, ScrollRestoration } from 'react-router-dom';
import { container, view } from './AppLayout.css.ts';
import Navigation from '../components/Navigation';

const AppLayout = () => (
  <div className={container}>
    <main className={view}>
      <Outlet />
    </main>
    <Navigation />
    <ScrollRestoration />
  </div>
);

export default AppLayout;
