import { Outlet, ScrollRestoration } from 'react-router-dom';
// import Navigation from '../components/layout/Navigation';
import * as styles from './AppLayout.css.ts';

const AppLayout = () => (
  <div className={styles.container}>
    <main className={styles.view}>
      <Outlet />
    </main>
    {/*<Navigation />*/}
    <ScrollRestoration />
  </div>
);
export default AppLayout;
