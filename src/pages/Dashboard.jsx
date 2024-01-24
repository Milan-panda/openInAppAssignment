import LeftSidebar from "../components/LeftSidebar"
import {Outlet} from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="w-full md:flex">
      <LeftSidebar />

      <section className="flex flex-1 h-full bg-[#FAFAFB] px-10 pt-10">
        <Outlet />
      </section>
    </div>
  )
}

export default Dashboard
