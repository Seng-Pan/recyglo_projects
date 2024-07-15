// import React from 'react'
// import logo from "../assets/recyglo_logo.png"
// import { FaArrowDown } from "react-icons/fa6"
// import { FaArrowAltCircleLeft } from "react-icons/fa"
// import { useNavigate } from 'react-router-dom'
// import './Apple.css'

// function Apple() {

//     const navigate = useNavigate();

//     const clickbackarrow = async () => {
//         navigate("/Company")
//     }

//     const clickeatery = async () => {
//         navigate("Resident")
//     }

//     return (
//         <div class="apple-container">
//             <div class="back-arrow" onClick={clickbackarrow}>
//                 <FaArrowAltCircleLeft />
//             </div>
//             <img src={logo} alt="Logo" class="logo" />

//             <div class="wrap-text">
//                 <div class="header">
//                     <p>Apple Inc.</p>
//                 </div>

//                 <form class='form'>
//                     <div class='form-section'>
//                         <div class="lb-formgp">
//                             <label for="employee-name">Employee name</label>
//                             <input type="text" id="employee-name" class="input" />
//                         </div>

//                         <div class="form-group">
//                             <p>Comp.Type</p>

//                             <div class="dropdown">
//                                 <button class="dropbtn">
//                                     <div class="sel">
//                                         <span>Select</span>
//                                         <FaArrowDown />
//                                     </div>
//                                 </button>

//                                 <div class="dropdown-content">
//                                     <a href="" class="apple-content" onClick={clickeatery}>Eatery</a>
//                                     <a href="" class="apple-content" onClick={clickeatery}>Resident</a>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>

//                     <button class="next-button">Next</button>
//                 </form>
//             </div>

//         </div>
//     )
// }

// export default Apple


import React,{useState} from 'react'
import logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom'

import control from '../assets/control.png';
import { FaHome } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";

function Apple() {
    const navigate = useNavigate();

    const clickresident = async () => {
        navigate("Resident")
    }

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

                {/* Apple */}
                <div className='pl-3 flex-1 h-screen bg-green-200'>
                    <div className="flex items-center justify-center h-screen bg-green-200">
                        <div className="text-center">
                            <h1 className="text-2xl font-bold mb-6">Apple Inc.</h1>
                            <div className="flex flex-col items-center space-y-4">
                                <div className="flex items-center space-x-8">
                                    <div>
                                        <label className="block text-lg font-medium mb-2">Employee name</label>
                                        <input
                                            type="text"
                                            placeholder="Employee name"
                                            className="p-2 bg-gray-300 rounded-full shadow-md"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-lg font-medium mb-2">Comp. Type</label>
                                        <select className="p-2 bg-white border border-black rounded-full">
                                            <option>Select</option>
                                            <option >Eatery</option>
                                            <option >Resident</option>
                                        </select>
                                    </div>
                                </div>
                                <button className="mt-4 pl-4 pr-4 pt-2 pb-2 shadow-md bg-gray-300 rounded-full hover:bg-gray-200" onClick={clickresident}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
}

export default Apple