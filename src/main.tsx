import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './App';
import './styles/global.css';
import { themeClass } from './styles/theme.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className={themeClass}>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
);
