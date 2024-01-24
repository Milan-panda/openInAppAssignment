import {Outlet} from "react-router-dom"

const AuthPage = () => {
  return (
    <>
      
      <div>
        Hello
      </div>
      <section>
        <Outlet />
      </section>
    </>
  )
}

export default AuthPage
