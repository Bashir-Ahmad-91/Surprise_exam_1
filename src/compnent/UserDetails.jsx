
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getData = async ({queryKey}) => {
    const response = await axios.get(`http://localhost:2000/users/${queryKey[1]}`)
    
    return (response.data)
}

export default function UserDetails({id}) {
 
    const {data: users, error, isFetching} = useQuery({
        queryKey: ["users", id],
        queryFn: getData 
    })
    

    if (isFetching) return <div>Data is loading ..</div>
    if (error) return <div>Something error {error.message}</div>
    

    return (
        <div className="w-3/12">
            <div className="p-2 border">
                <h1 className="text-2xl font-semibold mb-3">User Details</h1>

                <hr />

                <h2 className="text-xl font-semibold">{users.name}</h2>
                <p>{users.username}</p>
                <p>{users.email}</p>
            </div>
        </div>
    );
}
