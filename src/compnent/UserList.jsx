import axios from "axios";
import UserItem from "./UserItem";
import { useQuery} from "@tanstack/react-query";
import { useState } from "react";



    const getData = async ({queryKey}) => {
        
        const response = await axios.get(`http://localhost:2000/users/?_page=${queryKey[1]}&_per_page=6`)
        return (response.data.data)
    }

export default function UserList() {

  const [next, setNext] = useState(1)

    const { data: users, error, isFetching } = useQuery({
        queryKey: ["users", next],
        queryFn: getData,
       
      
        
    })
     

    
   
    



    if (isFetching) return <div>Data is loading ..</div>
    if (error) return <div>Something error {error.message}</div>


    


    return (
       
            <div className="w-6/12">  
                <div className="p-2 border">
                    <h1 className="text-2xl font-semibold mb-5">All Users Here</h1>

                    <div className="flex flex-wrap">
                        {users instanceof Array && users.map((item) => <UserItem key={item.id} item={item} />)}
                        

                    </div>
                    <div className="flex justify-center items-center py-5">
                        {next > 1 && <button onClick={() => next > 1 && setNext(next - 1)} className="px-3 py-1 bg-green-600 text-white rounded">prev</button>}
                        
                        {next < 6 && <button onClick={() => setNext(next + 1)} className="px-3 py-1 bg-green-600 text-white rounded ml-5 ">Next</button>}
                    </div>

                </div>
            </div>
       
    );
}
