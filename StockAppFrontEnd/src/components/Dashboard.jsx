
import { Aside } from "./Aside"
import { NavBar } from "./NavBar"
import { Table } from "./Table"

export const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-12 h-screen overflow-hidden">
    {/* Navbar - Fila 1 */}
    <div className="sticky top-0 col-span-12 border-b border-gray-200 row-span-1">
      <NavBar />
    </div>

    {/* Aside - Fila 2 a 12 */}
    <div className="col-span-2 row-span-11 row-start-2 border-r border-gray-200">
      <Aside />
    </div>

    {/* Contenedor de Table con scroll - Fila 2 a 12 */}
    <div className="col-span-10 col-start-3 row-start-2 row-span-11 overflow-y-auto">
      <Table />
    </div>
  </div>
  )
}