import axios from "axios"
import { useContext } from "react"
import { userContext } from "../contaxt/usercontext"

function Pagenate() {
    const {next, setNext} = useContext(userContext)
     
    const clickHandler = async () => {
        
        console.log(next);
        const response = await axios.get(`http://localhost:2000/users/?_page=1&_per_page=6`)
        setNext(response.data.next)
    }
   
    


    
  return (
    <div className="flex justify-center items-center py-5">
        <button  className="px-3 py-1 bg-green-600 text-white rounded">prev</button>
        <button onClick={clickHandler} className="px-3 py-1 bg-green-600 text-white rounded ml-5 ">Next</button>
    </div>
  )
}

export default Pagenate