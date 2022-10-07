const Error = ({children}) => {
  return (
    <div className='bg-red-300 text-red-600 p-3 rounded-md text-center font-bold mb-2'>
        {children}
    </div>
  )
}

export default Error