import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png';

function SignIn_UpPage() {
    const navigate = useNavigate();

    const clickLogin = async() =>{
        navigate("LoginPage")
    }

    return (
        <div className="flex items-center justify-center h-screen bg-100" style={{background:'#dff0d8'}}>
          <div className="bg-white rounded-2xl p-8 w-96 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-teal-500 mb-2">Sign Up</h2>
              <div className="w-16 h-1 bg-teal-500 mx-auto rounded"></div>
            </div>
    
            <div className="space-y-6">
              <div className="flex items-center border-b border-gray-300 py-2">
                <FaUser className="text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                />
              </div>
              <div className="flex items-center border-b border-gray-300 py-2">
                <MdEmail className="text-gray-400 mr-3" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                />
              </div>
              <div className="flex items-center border-b border-gray-300 py-2">
                <RiLockPasswordFill className="text-gray-400 mr-3" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
                />
              </div>
            </div>
    
            <div className="text-center mt-4">
              <a href="#" className="text-sm text-gray-500 hover:text-teal-500">
                Already have an account? <span className="text-teal-500 cursor-pointer" onClick={clickLogin}>Login</span>
              </a>
            </div>
    
            <div className="mt-8 flex justify-center">
              <button className="bg-teal-500 text-white font-bold py-2 px-6 rounded-full hover:bg-teal-600 transition">
                Sign Up
              </button>
              {/* <button className="bg-teal-500 text-white font-bold py-2 px-6 rounded-full hover:bg-teal-600 transition">
                Login
              </button> */}
            </div>
          </div>
        </div>
      );
}

export default SignIn_UpPage