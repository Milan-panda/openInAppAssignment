import LeftSidebar from "../components/LeftSidebar"
import {Outlet} from 'react-router-dom'
import TopBar from "../components/TopBar"
import { useState } from "react";

const RootLayout = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleNavbar = ()=>{
    setShowNavbar(!showNavbar)
  }

  return (
    <div className={"w-full md:flex " + (showNavbar && "overflow-hidden")}>
      <TopBar showNavbar={showNavbar} triggerClick={handleNavbar}/>
      <LeftSidebar />

      <section className="flex flex-col overflow-y-auto min-h-screen flex-1 bg-[#FAFAFB] px-10 pt-10">
        <Outlet />
      </section>
    </div>
  )
}

export default RootLayout
