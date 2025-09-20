import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "./button";

const SendMoney = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { id, firstName, lastName } = location.state || {};
    const [amount, setAmount] = useState("")
    const handleChange = (e) => {
        setAmount(e.target.value);
    };
    function handleTransfer() {
        axios.post('http://localhost:3000/api/v1/account/transfer', {
            to: id,
            amount: amount
        }, {
            headers: {
                token: localStorage.getItem("token")
            }
        }).then((response)=>{
            alert(response.data.message)
            navigate('/dashboard')
        })
    }
    return (
        <div className="flex justify-center font-[Montserrat] h-screen bg-gray-950 text-gray-100">
            <div className="h-full flex flex-col justify-center">
                <div className="border border-gray-700 max-w-md p-6 space-y-8 w-96 bg-gray-900 shadow-xl rounded-xl">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-blue-400">Send Money</h2>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                            <span className="text-2xl text-white">A</span>
                        </div>
                        <h3 className="text-xl font-semibold">{firstName} {lastName}</h3>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label
                                htmlFor="amount"
                                className="block text-md font-medium text-gray-300 pb-2"
                            >
                                Amount (in ₹)
                            </label>
                            <input
                                type="number"
                                id="amount"
                                placeholder="Enter amount"
                                value={amount}
                                onChange={handleChange}
                                className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <Button label={"Initiate Transfer"} onClick={handleTransfer}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendMoney;
