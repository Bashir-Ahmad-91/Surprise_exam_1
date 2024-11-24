import { useContext } from "react";
import { userContext } from "../contaxt/usercontext";

export default function UserItem({item}) {
    const {setDetails} = useContext(userContext)
    
    return (
        <div className="w-6/12 text-center">
            <div className="p-2">
                <div className="border p-2 bg-slate-100">
                    <p className="text-2xl font-semibold">{item.name + "-" +item.id}</p>
                    <p>{item.username}</p>
                    <p className="text-red-600 mb-3">{item.email}</p>
                    <button onClick={() => setDetails(item.id)} className="px-3 py-1 bg-green-600 text-white rounded">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
}
