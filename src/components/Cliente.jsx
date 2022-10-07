import { useNavigate, Form, useActionData, useLoaderData, redirect } from 'react-router-dom'
import {eliminarCliente} from '../data/clientes'

export async function action({params}){
    
    await eliminarCliente(params.id)
    return redirect('/')
}

const Cliente = ({cliente}) => {

    const navigate = useNavigate()

    const {id, nombre, telefono, email, empresa} = cliente
  return (
    <tr className="border-b">
        <td className="p-6 space-y-2 ">
            <p className="text-xl text-gray-800 ">{nombre}</p>
            <p> {empresa} </p>
        </td>

        <td className="p-6 font-bold ">
            <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold ">Email: </span>{email}</p>
            <p className="text-gray-600"><span className="text-gray-800 uppercase ">Numero:  </span>{telefono}</p>
        </td>

        <td className="p-6 flex gap-5">

            <button type="button" onClick={() => navigate(`/clientes/${id}/editar`) }
            className=" text-blue-600 hover:text-blue-800 uppercase font-bold text-xs mt-5" >
                Editar
            </button>

            <Form method='post' action={`/clientes/${id}/eliminar`} onSubmit={e => {
                
                if(!confirm('¿Deseas eliminar este registro?')){
                    e.preventDefault();
                }
            }} >
                
                <button type="submit" className=" text-red-600 hover:text-red-800 uppercase font-bold text-xs mt-5" >
                    Eliminar
                </button>
            </Form>
        </td>
            
    </tr>
  )
}

export default Cliente