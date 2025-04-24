import React from 'react'
import { BrowserRouter } from 'react-router'
import AppRoutes from './routes/routes'
import { ToastContainer } from 'react-toastify';

export default function App  ()  {
  return (
    <BrowserRouter>
      <AppRoutes />
      <ToastContainer />
    </BrowserRouter>
  );
}
