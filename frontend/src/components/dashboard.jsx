import { useEffect, useState } from "react";
import { Appbar } from "./appbar";
import { Balance } from "./balance";
import { Users } from "./users";
import axios from "axios";

function Dashboard() {
    const [balance, setBalance] = useState('')
    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/account/balance', {
            headers: {
                token: localStorage.getItem("token"),
            },
        }).then((response)=>{
            setBalance(response.data.balance)
        })
    }, [])
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-100 font-[Montserrat]">
            {/* Top appbar */}
            <Appbar />

            {/* Content wrapper with spacing */}
            <div className="px-8 py-8 space-y-8">
                {/* Balance Card */}
                <div className="backdrop-blur-lg bg-gray-900/60 border border-gray-700 rounded-2xl shadow-xl p-6">
                    <Balance value={balance} />
                </div>

                {/* Users Card */}
                <div className="backdrop-blur-lg bg-gray-900/60 border border-gray-700 rounded-2xl shadow-xl p-6">
                    <Users />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
