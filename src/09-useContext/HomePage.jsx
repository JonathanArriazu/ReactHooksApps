import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const HomePage = () => {

    const {user} = useContext(UserContext);
    console.log(user)

    return (
      <>
          <h1>Home Page</h1>
          <hr />
  
          
      </>
    )
  }