import React, { useState } from 'react'
import logo from '../assets/logo.png';

import control from '../assets/control.png';
import { FaHome } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";

function Result() {
    const [open, setOpen] = useState(false);

    const Menus = [
        { title: "Home", src: <FaHome /> },
        { title: "About", src: <RiContactsBook2Fill /> },
        { title: "Info", src: <FaInfoCircle />, gap: true },
        { title: "Services", src: <RiServiceFill /> },
        { title: "Contact", src: <IoMdContact /> },
    ]

    return (
        <>
            {/* Sidebar */}

            <div className="flex">
                <div className={`${open ? 'w-72' : 'w-20'} duration-300 h-screen relative`} style={{ background: '#6fdcae' }}>
                    <img src={control} className={`absolute text-slate-900 text-3xl cursor-pointer rounded-full -right-3 top-12 w-7 border-4 border-emerald-500 ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />

                    <div className='flex gap-x-4 items-center mt-2 ml-4'>
                        <img src={logo} alt='logo' className={`cursor-pointer rounded-full duration-500 size-8 mt-2 ml-2 ${open && 'rotate-[360deg]'}`} />
                        <span className={`text-white origin-left font-medium text-2xl duration-300 mt-2 ${!open && 'scale-0'}`}>Recyglo_<i className='text-xs'>Waste Management</i></span>
                    </div>

                    <ul className='pt-6'>
                        {Menus.map((menu, index) => (
                            <li key={index} className={`text-white flex items-center gap-x-4 cursor-pointer p-2 hover:bg-teal-500 rounded-md ${menu.gap ? 'mt-9' : 'mt-2'} ${index === 0 && 'bg-teal-500'}`}>
                                <span> </span>{menu.src} <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Result */}
                <div className='pl-3 flex-1 h-screen bg-green-200'>
                    <div className="flex-1 relative min-h-screen bg-green-200 p-10">
                        <div className="absolute top-4 left-4">
                            <h1 className="text-4xl font-bold mb-1">Company name</h1>
                            <p className="text-lg">XX/XX Address rd. Address province, XXXXX, Address</p>
                        </div>
                        <div className="flex flex-wrap justify-center mt-20 space-x-6 pr-28">
                            <div className="w-2/6 h-96 bg-gray-200 h-74 w-64 flex items-center justify-center shadow-md">
                                <p className="text-center">This is your Total<br />Carbon Footprint Calculation</p>
                            </div>
                            <div className="relative flex flex-col">
                                <div className="bg-gray-200 h-48 w-48 flex items-center justify-center shadow-md">
                                    <p className="text-center">This is your Scope 1<br />Carbon Footprint Calculation</p>
                                </div>
                                <div className="absolute bg-gray-200 h-48 w-48 flex items-center justify-center shadow-md top-48 left-48">
                                    <p className="text-center">This is your Scope 2<br />Carbon Footprint Calculation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Result page */}



            </div>


        </>
    );
}

export default Result