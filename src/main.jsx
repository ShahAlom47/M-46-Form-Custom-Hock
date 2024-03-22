import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import Banner from './Components/Banner.jsx';
import LogIn1 from './Components/LogIn1.jsx';
import LogIn2 from './Components/Login2.jsx';
import LogIn3 from './Components/Login3.jsx'; 
import PropsContext from './Components/ContextAPI/PropsContext.jsx';

const router = createBrowserRouter([
{
  path: "/",
  element: <Home></Home>,
  children:[
    {
      path: "/",
      element: <Banner></Banner>,
    },
    {
      path: "/log1",
      element: <LogIn1></LogIn1>,
    },
    {
      path: "/log2",
      element: <LogIn2></LogIn2>,
    },
    {
      path: "/log3",
      element: <LogIn3></LogIn3>,
    },
    {
      path: "/context",
      element: <PropsContext></PropsContext>,
    },
  ]
}
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
