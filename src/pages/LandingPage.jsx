import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png'
import bgImage from '../assets/landingbg.jpg'
import { useNavigate } from 'react-router-dom'


function LandingPage() {
    const navigate = useNavigate();

    const clickSignIn = async() =>{
        navigate("SignIn_UpPage")
    }

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImage})`}}>
      <header className="flex justify-between items-center p-8 md:px-20">
        <div className="logo-container -mt-2 -ml-8 border-4 rounded-full shadow-2xl" style={{border:'solid 4px #336600'}}>
          <img src={logo} alt="Logo" className="w-16 h-16 rounded-full shadow-xl"/>
        </div>
        <nav className="flex space-x-8 text-lg">
          <a href="#" className="text-white text-shadow-lg font-medium hover:bg-gray-200 hover:text-black px-3 py-1 rounded transition">Home</a>
          <a href="#" className="text-white text-shadow-lg font-medium hover:bg-gray-200 hover:text-black px-3 py-1 rounded transition">About</a>
          <a href="#" className="text-white text-shadow-lg font-medium hover:bg-gray-200 hover:text-black px-3 py-1 rounded transition">Info</a>
          <a href="#" className="text-white text-shadow-lg font-medium hover:bg-gray-200 hover:text-black px-3 py-1 rounded transition">Services</a>
          <a href="#" className="text-white text-shadow-lg font-medium hover:bg-gray-200 hover:text-black px-3 py-1 rounded transition">Contact</a>
        </nav>
      </header>
      <section className="flex flex-col justify-start">
        <div className="content min-w-lg mx-8 md:mx-20 my-12">
          <div className="info">
            <h2 className=" text-5xl md:text-5xl text-shadow-lg font-extrabold text-800 uppercase opacity-80 leading-tight" style={{color:'#336600',opacity:'0.9'}}>
              Recyglo <br /><span className="text-white text-shadow-xl text-5xl text-opacity-95 font-bold">Waste Management</span>
            </h2>
            <p className="text-white text-sm text-opacity-75 md:text-base font-medium my-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <a href="#" className="text-white text-shadow-lg font-bold uppercase px-5 py-2 rounded-xl transition shadow-transparent hover:bg-green-700" style={{background:'#336600'}} onClick={clickSignIn} >
              Join us
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center my-16">
          <a href="#" className=" text-500 shadow-2xl text-3xl mx-4 hover:transform hover:scale-150 transition">
            <FaFacebookF />
          </a>
          <a href="#" className=" text-500 shadow-2xl text-3xl mx-4 hover:transform hover:scale-150 transition">
            <FaTwitter />
          </a>
          <a href="#" className=" text-500 shadow-2xl text-3xl mx-4 hover:transform hover:scale-150 transition">
            <FaInstagram />
          </a>
        </div>
      </section>
    </div>
  )
}

export default LandingPage



// style={{color:'#336600',opacity:'0.9'}}