import LeftSidebar from "../components/LeftSidebar"
import {Outlet} from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="w-full md:flex">
      <LeftSidebar />

      <section className="flex flex-col overflow-y-auto min-h-screen flex-1 bg-[#FAFAFB] px-10 pt-10">
        <Outlet />
      </section>
    </div>
  )
}

export default Dashboard
