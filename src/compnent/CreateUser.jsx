import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

export default function CreateUser() {

    const queryClient = useQueryClient()

    const mutatuin = useMutation({
        mutationKey: ["users"],
        mutationFn: (variables) => {
            return axios.post("http://localhost:2000/users", variables)
        },

        onSuccess: (data, variables, context) => {
            console.log(data, variables, context);

            queryClient.invalidateQueries("users")
            
        },
        onMutate: (variables) => {
            return `hallo ${variables.name} Conratulation`
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const newData = Object.fromEntries(formData)
        
        mutatuin.mutate({
            ...newData,
            id: crypto.randomUUID()
        })
        

    } 
            return (
        <div className="w-3/12">
            <div className="p-2 border">
                <h1 className="text-2xl font-semibold mb-5">
                    Create a new user
                </h1>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="John"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label
                            htmlFor="username"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="John"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="John"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Save User
                    </button>
                </form>
            </div>
        </div>
    );
}
