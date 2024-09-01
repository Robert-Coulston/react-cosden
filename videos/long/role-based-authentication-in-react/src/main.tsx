import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import AuthProvider from './components/AuthProvider';
import DemoUseCallback from './components/DemoUseCallback';
import DemoUseEfect from './components/DemoUseEffect';
import DemoUseState from './components/DemoUseState';
import ProtectedContent from './components/ProtectedContent';
import ProtectedRoute from './components/ProtectedRoute';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/use-effect',
    element: <DemoUseEfect i={5} />,
  },
  {
    path: '/use-state',
    element: <DemoUseState i={5} />,
  },
  {
    path: '/use-callback',
    element: <DemoUseCallback  />,
  },
  {
    path: '/protected/:id?',
    element: <ProtectedContent />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  // </React.StrictMode>,
);
