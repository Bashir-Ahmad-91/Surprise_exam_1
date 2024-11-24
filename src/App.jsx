import { useState } from "react";
import CreateUser from "./compnent/CreateUser";
import UserDetails from "./compnent/UserDetails";
import UserList from "./compnent/UserList";
import { userContext } from './contaxt/usercontext.js'



function App() {
    const [details, setDetails] = useState(1)
    const [next, setNext] = useState(2)

  
    
    const providervalue = {
        details,
        setDetails,
        next, 
        setNext
    }
    return (
        <userContext.Provider value={providervalue}>

            <div className="flex">
                <CreateUser />
    
                <UserList />
    
                <UserDetails id={details} />
            </div>
        </userContext.Provider>
        );
}

export default App;
