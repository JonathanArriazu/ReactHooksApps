import { useState } from "react"
import { UserContext } from "./UserContext"

/* const user = {
    id: 123,
    name: "Jonathan Arriazu",
    email: "joni.arriazu2@gmail.com"
} */

{/* <UserContext.Provider value={{hola: 'Mundo', user}}> */}
export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}
