import { Search, ChevronLeft, ChevronRight, PlusCircle, Trash2, X } from "lucide-react"
import { useState } from "react"
import Swal from "sweetalert2"

export const Table = () => {

  const [cart, setCart] = useState([])

  // Función para agregar al carrito
  const agregarACarrito = (e, product) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const quantity = parseInt(formData.get('quantity')) || 1
    
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prevCart, { ...product, quantity }]
    })
  }

  const calcularTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  // Función para eliminar del carrito
  const eliminarDelCarrito = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }
  
  const crearOrden = () => {
    if (cart.length === 0) {
      return Swal.fire({
        title: "Carrito vacío",
        text: "Agregá productos al carrito antes de crear una orden",
        icon: "error"
      })
    } else {
      Swal.fire({
        title: "Orden creada con éxito",
        text: "Esperá mientras aprobamos la orden",
        icon: "success"
      })
      setCart([])
      closeModal()
    }
  }

  const closeModal = () => {
    const modal = document.querySelector('.modal')
    modal.classList.add('hidden')
  }

  const showModal = () => {
    const modal = document.querySelector('.modal')
    modal.classList.remove('hidden')
    modal.classList.add('flex')
  }

  const products = [
    { id: 1, code: '051570', name: 'Papas', stock: 150, price: 2.50 },
    { id: 2, code: '051571', name: 'Manzanas', stock: 89, price: 3.20 },
    { id: 3, code: '051572', name: 'Naranjas', stock: 120, price: 2.80 },
    { id: 4, code: '051573', name: 'Uvas', stock: 100, price: 3.50 },
    { id: 5, code: '051574', name: 'Zanahorias', stock: 180, price: 3.00 },
    { id: 6, code: '051575', name: 'Fresas', stock: 130, price: 3.70 },
    { id: 7, code: '051576', name: 'Peras', stock: 110, price: 3.30 },
    { id: 8, code: '051577', name: 'Bananas', stock: 200, price: 2.70 },
    { id: 9, code: '051578', name: 'Maracuyas', stock: 140, price: 3.90 },
  ];

  return (
    <div className="p-4 relative overflow-x-auto sm:rounded-lg">
      <header className="flex flex-col items-center justify-between mb-4">
        <div className="mb-6 p-4 bg-white rounded-lg shadow-md border border-slate-200 ml-auto">
          <h3 className="text-lg font-semibold mb-4 text-right">Orden de Compras</h3>
          <span className="text-lg font-bold flex justify-end">Total: ${calcularTotal().toFixed(2)}</span>
          <button onClick={showModal} className="cursor-pointer px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors">
            Detalles del carrito
          </button>
          <div className="modal absolute hidden flex-col top-14 right-[50%] w-80 bg-white border border-slate-200 rounded-md shadow-md p-4 z-10">
            <button className="cursor-pointer" onClick={closeModal}>
              <X className="ml-auto mb-4" />
            </button>
            {cart.map(item => (
              <div key={item.id} className="flex items-center justify-between mb-2 p-2 hover:bg-slate-50">
                <div className="flex-1">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-sm text-slate-600 ml-2">
                    (x{item.quantity} - ${(item.price * item.quantity).toFixed(2)})
                  </span>
                </div>
                <button 
                  onClick={() => eliminarDelCarrito(item.id)}
                  className="text-red-500 hover:text-red-700 flex items-center"
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Eliminar
                </button>
              </div>
            ))}
            <div className="mt-4 pt-2 border-t border-slate-200">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total:</span>
                <span className="text-lg font-bold">${calcularTotal().toFixed(2)}</span>
              </div>
              <button 
                onClick={crearOrden}
                className="cursor-pointer mt-3 w-full bg-slate-800 text-white p-2 rounded-md hover:bg-slate-700 transition-colors"
              >
                Confirmar Orden (${calcularTotal().toFixed(2)})
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center w-full py-2">
          <button className="px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors">
            Crear Orden
          </button>
          <button className="ml-3 px-4 py-2 border border-gray-300 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            Export
          </button>
          <button className="ml-3 px-4 py-2 border border-gray-300 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center">
            Más acciones <span className="ml-1">▾</span>
          </button>
          <div className="relative ml-auto">
            <input
              type="text"
              placeholder="Buscar orden"
              className="pl-4 pr-10 py-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
            <Search className="w-5 h-5 absolute right-3 top-2.5 text-gray-400 dark:text-gray-500" />
          </div>
        </div>
      </header>
      {/* Tabs */}
      <div className="flex mb-4 border-b border-gray-200 dark:border-gray-700">
        {['DISPONIBLES', 'CANCELACIONES', 'COMPLETADOS'].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 mr-1 -mb-px font-medium ${
              tab === 'UNPAID' 
                ? 'text-blue-600 border-b-2 border-blue-500 dark:text-blue-400 dark:border-blue-400' 
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <section className="rounded-lg border border-slate-200 shadow-sm overflow-hidden">
        <div className="w-full overflow-x-auto">
          <table className="w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                  Código de producto
                </th>
                <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                  Nombre de producto
                </th>
                <th scope="col" className="px-6 py-3 text-right text-sm font-semibold text-slate-900">
                  Stock
                </th>
                <th scope="col" className="px-6 py-3 text-right text-sm font-semibold text-slate-900">
                  Precio
                </th>
                <th scope="col" className="px-6 py-3 text-center text-sm font-semibold text-slate-900">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
            {products.map(product => (
              <tr key={product.id} className="hover:bg-slate-50 transition-colors">
                <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-900">{product.code}</td>
                <td className="px-6 py-4 text-sm text-slate-900">{product.name}</td>
                <td className="px-6 py-4 text-sm text-slate-900 text-right">{product.stock} unidades</td>
                <td className="px-6 py-4 text-sm text-slate-900 text-right">${product.price.toFixed(2)}</td>
                <td className="px-6 py-4 text-sm text-center">
                  <form 
                    onSubmit={(e) => agregarACarrito(e, product)}
                    className="flex justify-center space-x-2"
                    >
                    <input 
                      type="number" 
                      name="quantity"
                      min="1"
                      max={product.stock}
                      defaultValue="1"
                      className="w-16 px-2 py-1 border border-gray-300 rounded-md text-sm text-center"
                    />
                    <button 
                      type="submit"
                      className="flex items-center gap-1 text-green-600 hover:text-green-800"
                    >
                      <PlusCircle className="w-5 h-5" />
                      Agregar
                    </button>
                  </form>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Navegación */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-700 dark:text-gray-300">
          Mostrando 1 a 10 de 100 resultados
        </span>
        
        <div className="flex space-x-1">
          <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700">
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`px-3 py-1 rounded-md ${
                page === 1 
                  ? 'bg-blue-600 text-white' 
                  : 'border border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700'
              }`}
            >
              {page}
            </button>
          ))}
          
          <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}