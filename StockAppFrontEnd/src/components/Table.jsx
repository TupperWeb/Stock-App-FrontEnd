import { Search, ChevronLeft, ChevronRight } from "lucide-react"

export const Table = () => {
  return (
    <div className="p-4 relative overflow-x-auto sm:rounded-lg">
      <header className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Crear Orden
          </button>
          <button className="ml-3 px-4 py-2 border border-gray-300 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            Export
          </button>
          <button className="ml-3 px-4 py-2 border border-gray-300 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center">
            Más acciones <span className="ml-1">▾</span>
          </button>
        </div>
        {/* Buscador */}
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar orden"
            className="pl-4 pr-10 py-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          <Search className="w-5 h-5 absolute right-3 top-2.5 text-gray-400 dark:text-gray-500" />
        </div>
      </header>

      {/* Tabs */}
      <div className="flex mb-4 border-b border-gray-200 dark:border-gray-700">
        {['UNPAID', 'TOTAL ORDER', 'CANCELACIONES', 'COMPLETADOS'].map((tab) => (
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

      {/* Tabla */}
      <table className="w-full shadow-sm text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <table className="w-full shadow-sm text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th scope="col" className="px-6 py-3">
                      Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                      <div className="flex items-center">
                          Color
                          <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
    </svg></a>
                      </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                      <div className="flex items-center">
                          Category
                          <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
    </svg></a>
                      </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                      <div className="flex items-center">
                          Price
                          <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
    </svg></a>
                      </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Edit</span>
                  </th>
              </tr>
          </thead>
          <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Apple MacBook Pro 17
                  </th>
                  <td className="px-6 py-4">
                      Silver
                  </td>
                  <td className="px-6 py-4">
                      Laptop
                  </td>
                  <td className="px-6 py-4">
                      $2999
                  </td>
                  <td className="px-6 py-4 text-right">
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Microsoft Surface Pro
                  </th>
                  <td className="px-6 py-4">
                      White
                  </td>
                  <td className="px-6 py-4">
                      Laptop PC
                  </td>
                  <td className="px-6 py-4">
                      $1999
                  </td>
                  <td className="px-6 py-4 text-right">
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Magic Mouse 2
                  </th>
                  <td className="px-6 py-4">
                      Black
                  </td>
                  <td className="px-6 py-4">
                      Accessories
                  </td>
                  <td className="px-6 py-4">
                      $99
                  </td>
                  <td className="px-6 py-4 text-right">
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
              </tr>
          </tbody>
      </table>
      </table>

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