// import React, { useState } from 'react';
// import logo from '../assets/logo.png';
// import { IoMdMenu } from "react-icons/io";
// import { FaWindowClose } from "react-icons/fa";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <input type='checkbox' id='check' className="hidden" checked={isOpen} onChange={toggleMenu} />
//       <label htmlFor='check'>
//         <a id='btn' onClick={toggleMenu} className={`absolute top-6 left-10 text-white bg-blue-800 p-2 rounded-md cursor-pointer transition-all duration-500 ${isOpen ? 'opacity-0 pointer-events-none' : 'text-3xl'}`}>
//           <IoMdMenu />
//         </a>
//         <a id='cancel' onClick={toggleMenu} className={`absolute top-4 left-48 text-white bg-blue-800 text-2xl p-2 rounded-md cursor-pointer transition-all duration-500 ${isOpen ? 'block' : 'hidden'}`}>
//           <FaWindowClose />
//         </a>
//       </label>

//       <div className={`fixed top-0 left-0 w-64 h-full bg-green-800 transition-all duration-500 ${isOpen ? 'left-0' : '-left-64'}`}>
//         <div className="text-white text-center bg-green-900 py-5">
//           <img src={logo} alt="Logo" className="w-16 h-16 mx-auto rounded-full" />
//         </div>
//         <ul className="mt-6">
//           <li className="border-b border-gray-700"><a href="#" className="block py-4 pl-10 text-white text-xl transition-all duration-300 hover:pl-12">Home</a></li>
//           <li className="border-b border-gray-700"><a href="#" className="block py-4 pl-10 text-white text-xl transition-all duration-300 hover:pl-12">About</a></li>
//           <li className="border-b border-gray-700"><a href="#" className="block py-4 pl-10 text-white text-xl transition-all duration-300 hover:pl-12">Info</a></li>
//           <li className="border-b border-gray-700"><a href="#" className="block py-4 pl-10 text-white text-xl transition-all duration-300 hover:pl-12">Services</a></li>
//           <li className="border-b border-gray-700"><a href="#" className="block py-4 pl-10 text-white text-xl transition-all duration-300 hover:pl-12">Contact</a></li>
//         </ul>
//       </div>

//       <section className="h-screen bg-cover bg-center transition-all duration-500" style={{ backgroundImage: "url(../assets/Green5.jpg)" }}></section>
//     </>
//   );
// }

// export default Navbar;

import React, { useState } from 'react'
import logo from '../assets/logo.png';
import control from '../assets/control.png';
import { FaHome } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";

function Navbar() {
    const[open, setOpen] = useState(false);

    const Menus = [
        {title: "Home", src: <FaHome />},
        {title: "About", src: <RiContactsBook2Fill />},
        {title: "Info", src: <FaInfoCircle />, gap: true},
        {title: "Services", src: <RiServiceFill />},
        {title: "Contact", src: <IoMdContact />},
    ]

  return (

    <div className="flex">
        <div className={`${open ? 'w-72' : 'w-20'} duration-300 h-screen relative`} style={{background:'#6fdcae'}}>
            <img src={control} className={`absolute text-slate-900 text-3xl cursor-pointer rounded-full -right-3 top-12 w-7 border-4 border-emerald-500 ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
            
            <div className='flex gap-x-4 items-center mt-2 ml-4'>
                <img src={logo} alt='logo' className={`cursor-pointer rounded-full duration-500 size-8 mt-2 ml-2 ${open && 'rotate-[360deg]'}`} />
                <span className={`text-white origin-left font-medium text-2xl duration-300 mt-2 ${!open && 'scale-0'}`}>Recyglo_<i className='text-xs'>Waste Management</i></span>
            </div>

            <ul className='pt-6'>
                {Menus.map((menu,index) => (
                    <li key={index} className={`text-white flex items-center gap-x-4 cursor-pointer p-2 hover:bg-teal-500 rounded-md ${menu.gap ? 'mt-9' : 'mt-2'} ${index === 0 && 'bg-teal-500'}`}>
                        {menu.src} <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
                    </li>
                ))}
            </ul>
        </div>

        <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
            
        </div>

    </div>
    
  )
}

export default Navbar
