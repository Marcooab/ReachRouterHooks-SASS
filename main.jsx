import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

//Imports/Configs React-Router
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import ErrorPage from './Routes/ErrorPage'
import ContactDetails from './Routes/ContactDetails'

const router = createBrowserRouter([
  {
    path:  "/",
    element: <App />,
    //Error Treatment
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      }, 
      {// Nested Route - Dynamic Route
        path: "/contact/:id",
        element: <ContactDetails />
      }, 
      {// Navigate to a page that does not exist anymore on the Project
        path: "oldcontact",
        element: <Navigate to="/contact" />
      }
    ]
  },
]);
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
