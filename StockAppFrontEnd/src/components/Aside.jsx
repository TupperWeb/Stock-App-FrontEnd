import { ChartPie, ClipboardList, Mail, Settings, Users } from "lucide-react"

export const Aside = () => {
  return (
    <aside id="logo-sidebar" className="w-full pt-4 transition-transform -translate-x-full bg-white sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
      <div className="px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-4 font-medium">
            <li>
                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <ChartPie />
                  <span className="ms-3">Dashboard</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <ClipboardList />
                  <span className="flex-1 ms-3 whitespace-nowrap">Inventario</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <Mail />
                  <span className="flex-1 ms-3 whitespace-nowrap">Mensajes</span>
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <Users />
                  <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <Settings />
                  <span className="flex-1 ms-3 whitespace-nowrap">Ajustes</span>
                </a>
            </li>
          </ul>
      </div>
    </aside>
  )
}