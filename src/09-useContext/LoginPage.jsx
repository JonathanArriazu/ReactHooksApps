import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const Loginpage = () => {

    const {user, setUser} = useContext(UserContext);
    console.log(user)

    return (
      <>
        <h1>Login Page</h1>
        <hr />
  
        <button className="btn btn-primary" onClick={() => setUser({id: 123, name: 'Jonathan', email: "joni.arriazu2@gmail.com"})}>
            Establecer Usuario
        </button>        
      </>
    )
  }