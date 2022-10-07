import { useNavigate, useLoaderData, Form, useActionData, redirect } from 'react-router-dom'
import { getCliente } from '../data/clientes'
import Error from '../components/Error'
import Formulario from '../components/Formulario'
import {editarCLiente} from "../data/clientes"

export async function loader({params}){
    const cliente = await getCliente(params.id)
    if(Object.values(cliente).length === 0){
        throw new Response ('', {
            status: 404,
            statusText: 'Results Not Found'
        })
    }
    
    return cliente
}

export async function action({request, params}){
    const formData = await request.formData()
  const datos = Object.fromEntries(formData)
  const email = formData.get('email')

  //validacion
  const errores = []
  if(Object.values(datos).includes('')){
    errores.push('Todos los campos son obligatorios')
  }

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  if(!regex.test(email)){
    errores.push('El Email no es Valido')
  }

  //retornar objeto de errores 
    if(Object.keys(errores).length){
      return errores
    }

    // actualizar cliente
    await editarCLiente(params.id, datos)
    return redirect('/')
}

const EditarCLiente = () => {

    const navigate = useNavigate()
    const errores = useActionData()
    const cliente = useLoaderData()

  return (
    <>
        <h1 className="font-black text-4xl text-blue-800">Editar Cliente</h1>
        <p className="mt-3 ">Aqui puedes Editar los Datos de los Clientes</p>

        <div className="flex justify-end ">
          <button className="bg-blue-800 text-white px-3 py-1 font-bold uppercase rounded-lg"
          onClick={() => navigate(-1)}
          >
              volver
          </button>
        </div>

        <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10'>

          {errores?.length && errores.map( (error, i ) => <Error key={i}>{error}</Error> )}
          

          <Form method='post' noValidate>
            <Formulario cliente={cliente}/>
            <input type="submit" value="Editar Cliente"
            className='mt-5 w-full bg-blue-600 p-3 uppercase font-bold text-white text-lg hover:bg-blue-800 cursor-pointer transition-all'/>
          </Form>

        </div>
    </>
  )
}

export default EditarCLiente