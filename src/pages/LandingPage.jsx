import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png'
import bgImage from '../assets/Green5.jpg'
import { useNavigate } from 'react-router-dom'


function LandingPage() {
    const navigate = useNavigate();

    const clickSignIn = async() =>{
        navigate("SignIn_UpPage")
    }

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImage})` }}>
      <header className="flex justify-between items-center p-8 md:px-20">
        <div className="logo-container -mt-2 -ml-8">
          <img src={logo} alt="Logo" className="w-16 h-16 rounded-full"/>
        </div>
        <nav className="flex space-x-8">
          <a href="#" className="text-black font-medium hover:bg-gray-200 hover:text-black px-3 py-1 rounded transition">Home</a>
          <a href="#" className="text-black font-medium hover:bg-gray-200 hover:text-black px-3 py-1 rounded transition">About</a>
          <a href="#" className="text-black font-medium hover:bg-gray-200 hover:text-black px-3 py-1 rounded transition">Info</a>
          <a href="#" className="text-black font-medium hover:bg-gray-200 hover:text-black px-3 py-1 rounded transition">Services</a>
          <a href="#" className="text-black font-medium hover:bg-gray-200 hover:text-black px-3 py-1 rounded transition">Contact</a>
        </nav>
      </header>
      <section className="flex flex-col justify-start">
        <div className="content min-w-lg mx-8 md:mx-20 my-12">
          <div className="info">
            <h2 className="text-5xl md:text-5xl font-extrabold text-800 uppercase opacity-80 leading-tight" style={{color:'#7CBB59'}}>
              Recyglo <br /><span className="text-white text-5xl font-bold">Waste Management</span>
            </h2>
            <p className="text-sm md:text-base font-medium my-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <a href="#" className="text-white font-bold bg-800 hover:bg-700 uppercase px-5 py-2 rounded transition" style={{background:'#76B156',hover:{background:'#7CBB59'}}} onClick={clickSignIn} >
              Sign in
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center my-16">
          <a href="#" className="text-gray-800 text-3xl mx-4 hover:transform hover:scale-150 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-800 text-3xl mx-4 hover:transform hover:scale-150 transition">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-800 text-3xl mx-4 hover:transform hover:scale-150 transition">
            <FaInstagram />
          </a>
        </div>
      </section>
    </div>
  )
}

export default LandingPage