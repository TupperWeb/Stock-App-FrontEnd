import Swal from 'sweetalert2'
import { Send } from 'lucide-react';

export const Login = () => {
  const submitForm = function(event){
    event.preventDefault()
    /*Swal.fire({
      title: "The Internet?",
      text: "That thing is still around?",
      icon: "question"
      
    });*/
    window.location.href = "/dashboard"

  }
  return (
      <main className="p-8">
          <div className="flex justify-center items-center w-full max-w-[800px] m-auto rounded-sm overflow-hidden shadow-md">

              <div className="contenedor-login flex flex-col w-full p-5 items-center my-14" >
                  <form onSubmit={submitForm} className="form_login mt-8">
                      <h2 className="text-4xl py-5 text-gray-800">Iniciar Sesión</h2>
                      <input type="email" placeholder="Email" required className="w-full p-3 my-2 mb-5 border-none border-b-2 border-gray-300/50 outline-none text-lg transition-all duration-300 ease-in-out focus:border-gray-500"/>
                      <input type="password" placeholder="Contraseña" required className="w-full p-3 my-2 mb-5 border-none border-b-2 border-gray-300/50 outline-none text-lg transition-all duration-300 ease-in-out focus:border-gray-500"/>
                      <div className="separador">
                          <a href="https://www.ejemplo.com/recuperar-contraseña" className="text-[#8394af] text-sm no-underline transition-colors duration-300 ease-in-out hover:text-[#6f819b] my-12 mt-5">¿Olvidaste tu contraseña?</a>
                      </div>
                      <button type="submit" className="mt-8 w-full px-5 py-2.5 bg-[#8394af] text-white border-none cursor-pointer text-lg transition-colors duration-300 rounded-md hover:bg-[#6f819b] flex justify-center items-center gap-4">Login <Send /> </button>
                  </form>

              </div>
          </div>
      </main>
  )
}