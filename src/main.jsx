import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import router from './routes/Routes';
import AuthProvider from './providers/AuthProvider';
import '@smastrom/react-rating/style.css';
import { Toaster } from 'react-hot-toast';
import 'aos/dist/aos.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <Toaster />
    <RouterProvider router={router} />
  </AuthProvider>
);
