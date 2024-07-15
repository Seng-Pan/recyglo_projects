import React from 'react'
import logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';

function Minion() {
    const navigate = useNavigate();

    const clickeatery = async () => {
        navigate("Resident")
    }

    return (
        <>
            <div className="flex items-center justify-center h-screen bg-green-200">
                <div className="absolute top-4 right-4">
                    <img src={logo} alt="Logo" className="h-12 w-12 rounded-full" />
                </div>
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-6">Minions</h1>
                    <div className="flex flex-col items-center space-y-4">
                        <div className="flex items-center space-x-8">
                            <div>
                                <label className="block text-lg font-medium mb-2">Employee name</label>
                                <input
                                    type="text"
                                    placeholder="Employee name"
                                    className="p-2 bg-gray-300 rounded-full"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-medium mb-2">Comp. Type</label>
                                <select className="p-2 bg-white border border-black rounded-full">
                                    <option>Select</option>
                                    <option>Eatery</option>
                                    <option>Resident</option>
                                </select>
                            </div>
                        </div>
                        <button className="mt-4 pl-4 pr-4 pt-2 pb-2 bg-gray-300 rounded-full border-2 border-emerald-300">Next</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Minion