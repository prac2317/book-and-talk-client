import { Outlet, ScrollRestoration } from 'react-router-dom';
import { container, view } from './AppLayout.css.ts';

const AppLayout = () => (
  <div className={container}>
    <main className={view}>
      <Outlet />
    </main>
    <ScrollRestoration />
  </div>
);

export default AppLayout;
