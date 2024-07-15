import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom'

import control from '../assets/control.png';
import { FaHome } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";

function Resident() {
  const navigate = useNavigate();

  const clicknxt = async () => {
    navigate("Result")
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

        {/* Resident */}
        <div className='pl-3 flex-1 h-screen bg-green-200'>
          <div className="flex items-center justify-center h-screen bg-green-200 relative">

            <div className="text-center w-full">

              <div className="flex justify-center items-start space-x-8">
                <div className="flex flex-col items-start space-y-4">
                  <div className="flex flex-col items-start">
                    <label className="block text-lg font-medium mb-2">Waste type</label>
                    <select className="p-2 bg-white border border-black rounded-full">
                      <option>Select</option>
                      <option>Waste 1</option>
                      <option>Waste 2</option>
                      <option>Waste 3</option>
                    </select>
                  </div>
                  <div className="flex flex-col items-start">
                    <label className="block text-lg font-medium mb-2">Electricity Bill</label>
                    <button className="p-2 bg-gray-200 rounded-full shadow-md">upload file</button>
                  </div>
                  <div className="flex flex-col items-start">
                    <label className="block text-lg font-medium mb-2">Customer Counts</label>
                    <input
                      type="text"
                      placeholder="Customer Counts"
                      className="p-2 bg-gray-200 rounded-full shadow-md"
                    />
                  </div>
                  <div className="flex items-center space-x-8">
                    <div className="flex flex-col items-start">
                      <label className="block text-lg font-medium mb-2">Packaging Use</label>
                      <input
                        type="text"
                        placeholder="Packaging Use"
                        className="p-2 bg-gray-200 rounded-full shadow-md"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <label className="block text-lg font-medium mb-2">Amount</label>
                      <input
                        type="text"
                        placeholder="Amount"
                        className="p-2 bg-gray-200 rounded-full shadow-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-200 h-64 w-64 flex items-center justify-center shadow-md">
                    Electric Bill Preview
                  </div>
                </div>
              </div>
              <button className="absolute bottom-4 right-4 pl-4 pr-4 pt-2 pb-2 bg-gray-300 rounded-full hover:bg-gray-200 shadow-lg" onClick={clicknxt}>next</button>
            </div>
          </div>
        </div>

      </div>


    </>
  );
}

export default Resident;
