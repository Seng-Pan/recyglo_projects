import React from 'react'
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import './index.css';
import SignIn_UpPage from './components/SignIn_UpPage.jsx';
import LoginPage from './components/LoginPage.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<LandingPage/>
  },
  {
    path:"/SignIn_UpPage",
    element:<SignIn_UpPage/>
  },
  {
    path:"/SignIn_UpPage/LoginPage",
    element:<LoginPage/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

