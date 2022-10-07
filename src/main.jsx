import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import {action as actionDelete} from './components/Cliente'
import NuevoCLiente, {action as actionNuevoCliente} from './pages/NuevoCLiente'
import Index, { loader as clientesLoader } from './pages/Index'
import EditarCLiente, {loader as editarLoader, action as actionEditCliente} from './pages/EditarCLiente'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Index/>,
        loader: clientesLoader,
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCLiente/>,
        action: actionNuevoCliente,
      },
      {
        path: '/clientes/:id/editar',
        element: <EditarCLiente />,
        loader: editarLoader,
        action: actionEditCliente,
      },
      {
        path: '/clientes/:id/eliminar',
        action: actionDelete,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
