import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './pages/Home.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

const router = createBrowserRouter([
  {path: '/Pokedex-ReactJS', element: <Home />, errorElement: <ErrorPage />,},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)