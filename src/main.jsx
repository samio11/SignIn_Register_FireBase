import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root.jsx'
import Signin from './Signin.jsx'
import Register from './Register.jsx'
import Dashbord from './Dashbord.jsx'

const my_web_page = createBrowserRouter([
  {
    path : '/',
    element : <Root></Root>,
    children : [
      {
        path : '/',
        element : <Signin></Signin>
      },
      {
        path : '/register',
        element : <Register></Register>
      }
    ]
  },{
    path : '/Dashbord',
    element : <Dashbord></Dashbord>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={my_web_page}></RouterProvider>
  </React.StrictMode>,
)
