import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import AuthProvider from './components/AuthProvider';
import DemoUseEfect from './components/DemoUseEffect';
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
    path: '/protected',
    element: (
      <ProtectedRoute allowedRoles={['admin', 'viewer']}>
        <div>Protected content</div>
      </ProtectedRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
