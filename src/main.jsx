import React from 'react'
import ReactDOM from 'react-dom/client'
import './layout/Js/fontAwesome'

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ApolloProvider } from '@apollo/client'
import client from './layout/Js/apolloClient'
import Auth from "./Authentication"

import Root from './layout/JSX/Root/root'
import UserLandingPage from './layout/JSX/User/userLandingPage'
import Login from './layout/JSX/Login'
import Register from './layout/JSX/Register'
import RootUser from './layout/JSX/Root/rootUser'
import RootAdmin from './layout/JSX/Root/rootAdmin'
import FormMenuUser from './layout/JSX/User/formMenuUser'
import FormMenuAdmin from './layout/JSX/Admin/formMenuAdmin'
import AdminAddMenuForm from './layout/JSX/Admin/adminAddMenuForm'
import DetailMenus from './layout/JSX/Admin/detailMenus'
import Cart from './layout/JSX/User/cart'
import Checkout from './layout/JSX/User/checkout'
import CheckoutHistory from './layout/JSX/User/checkoutHistory'
import CheckoutList from './layout/JSX/Admin/checkoutList'

const {mustAdmin,mustLogin,mustUser} = Auth()

const router = createBrowserRouter([
    {
      path:"/",
      element:<Root/>,
      loader:mustLogin,
      children:[
      {
          path:"/Register",
          element:<Register/>
      },
      {
          path:"/",
          element: <Login/>
      }]
    },
    {
        path:"/Homepage",
        element: <RootUser/>,
        loader:mustUser,
        children: [
        {
            path:"/Homepage/",
            element: <UserLandingPage/>,
        },
        {
            path:"/Homepage/Menus",
            element: <FormMenuUser/>,
        },
        {
            path:"/Homepage/Cart",
            element: <Cart/>
        },
        {
          path:"/Homepage/Cart/CheckOut",
          element: <Checkout/>
        },
        {
          path:"/Homepage/History",
          element: <CheckoutHistory/>
      },
        ]
    },
    {
        path:"/Homepage/Admin",
        element: <RootAdmin/>,
        loader:mustAdmin,
        children: [
          {
            path:"/Homepage/Admin/",
            element: <FormMenuAdmin/>,
          },
          {
            path:"/Homepage/Admin/AddMenus",
            element: <AdminAddMenuForm/>,
          },
          {
            path:"/Homepage/Admin/AddMenus/:id",
            element: <DetailMenus/>
          },
          {
            path:"/Homepage/Admin/Checkout",
            element: <CheckoutList/>,
          },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
)
