import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Dashboard from './components/Dashboard/Dashboard';
import Statistics from './components/Statistics/Statistics';
// import Statistics from './components/ProductDetail/ProductDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'gadget/:gadgetId',
        element:<ProductDetail></ProductDetail>,
        loader: ()=> fetch('./gadgetsData.json')
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        loader:()=> fetch('./gadgetsData.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
