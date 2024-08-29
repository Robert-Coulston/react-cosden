import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import AuthProvider from './components/AuthProvider';
import DemoUseEfect from './components/DemoUseEffect';
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
    element: <DemoUseEfect i={5}/>,
  },
  {
    path: '/protected/:id?',
    element: <ProtectedContent />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
