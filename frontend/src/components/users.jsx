import { useEffect, useState } from "react";
import { Button } from "./button";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    function handleSearch() {
        axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${search}`, {
            headers: {
                token: localStorage.getItem('token')
            }
        }).then((response) => {
            setUsers(response.data.user);
        }).catch((err) => console.log(err));
    }


    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/user/bulk', {
            headers: {
                token: localStorage.getItem('token')
            }
        }).then((response) => {
            setUsers(response.data.user)
        })
    }, [])


    return (
        <>
            <div className="font-bold mt-6 text-lg text-gray-200">Users</div>
            <div className="my-2 flex">
                <input
                    type="text"
                    placeholder="Search users..."
                    value={search}
                    onChange={handleChange}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()} 
                    className="flex-1 px-3 py-2 border rounded-l bg-gray-800 text-gray-200 border-gray-600 "
                />

                <button
                    className="px-5 py-2 bg-gradient-to-r from-blue-800 to-teal-600 text-white font-semibold rounded-r transition"
                    onClick={() => handleSearch()}
                >
                    Search
                </button>
                
            </div>

            <div className="space-y-3">
                {users.map((user) => (
                    <User key={user._id} user={user} />
                ))}
            </div>
        </>
    );
};

function User({ user }) {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between items-center bg-gray-800/60 hover:bg-gray-800 transition rounded-xl p-4 shadow-md">
            <div className="flex items-center">
                <div className="rounded-full h-12 w-12 bg-gradient-to-tr from-blue-500 to-teal-400 flex justify-center items-center text-white text-lg font-bold mr-3">
                    {user.firstName[0]}
                </div>
                <div className="text-gray-200">
                    {user.firstName} {user.lastName}
                </div>
            </div>
            <div className="w-32">
                <Button label={"Send Money"} onClick={() => navigate("/send", {
                    state: {
                        id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName
                    }
                })} />
            </div>
        </div>
    );
}

