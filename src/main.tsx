import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './App';
import './styles/global.css';

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
