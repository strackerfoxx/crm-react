import { useLoaderData } from "react-router-dom"
import Cliente from "../components/Cliente";
import {getClientes} from "../data/clientes"

export function loader(){
  const clientes =  getClientes()
  return clientes
}

const Index = () => {

  const clientes = useLoaderData()

  return (
    <>
        <h1 className="font-black text-4xl text-blue-800">Clientes</h1>
        <p className="mt-3 ">Administrador de clientes</p>

        {clientes.length ? (
          <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="p-2">Cliente</th>
                <th className="p-2">Contacto</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>

              <tbody>
                {clientes.map(cliente => (
                    <Cliente cliente={cliente} key={cliente.id} />
                ))}
                
              </tbody>
            
          </table>
        ) : (
          <p className="text-center mt-10 text-5xl font-bold text-blue-800">no hay clientes</p>
        )}
    </>
  )
}

export default Index