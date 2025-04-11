import React from 'react'
import { BrowserRouter } from 'react-router'
import AppRoutes from './routes/routes'

export default function App  ()  {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
