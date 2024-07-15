import React from 'react'
 import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import SignIn_UpPage from './components/SignIn_UpPage.jsx';
import LoginPage from './components/LoginPage.jsx';
import Apple from './components/Apple.jsx';
import Resident from './components/Resident.jsx';
import Result from './components/Result.jsx';
import './index.css';
import App from './App.jsx'

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
  },
  
  {
    path:"/SignIn_UpPage/LoginPage/Apple",
    element:<Apple/>
  },
  
  {
    path:"/SignIn_UpPage/LoginPage/Apple/Resident",
    element:<Resident/>
  },
  
  {
    path:"/SignIn_UpPage/LoginPage/Apple/Resident/Result",
    element:<Result/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>
// )

