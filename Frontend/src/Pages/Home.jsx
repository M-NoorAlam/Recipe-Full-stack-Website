import React from 'react'
import Vector from '../assets/Vector.png'
import Hambur from '../assets/Hambur.svg'
import HamburClose from '../assets/HamburClose.svg'
import { useState } from 'react'
import Plate from '../assets/plate.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const [HamburgerToogle, setHamburgerToogle] = useState(false);
  const handleHamburgerToogle = () => {
    setHamburgerToogle(!HamburgerToogle)
  }
  return (
    <div>
      <div className="header">

        <div className="img relative flex justify-end ">
          <img className='w-[43%] h-[350px] absolute' src={Vector} alt="" />
        </div>

        <div className="navbar flex justify-between items-center mx-5 my-1">

          <div className="logo">
            <h1 className='font-rightcious font-semibold md:text-2xl sm:text-xl'>NUTRITION MAPPER</h1>
          </div>

          <div className="nav">
            <nav>
              <ul className='sm:flex gap-x-6 font-inter font-semibold sm:text-[12px] md:text-[15px] hidden'>
                <li className='hover:underline cursor-pointer'>Home</li>
                <li className='hover:underline cursor-pointer'>Recipe</li>
                <li className='hover:underline cursor-pointer'>Share Recipe</li>
                <li className='hover:underline cursor-pointer'>Contact Us</li>
              </ul>
            </nav>
          </div>

      
      {!HamburgerToogle ?
        <div className="hamburger relative">
          <img src={Hambur} onClick={handleHamburgerToogle} className='sm:hidden mx-5 block' alt="" />

        </div>

        : <div>
          <img src={HamburClose} className='sm:hidden mx-5 block' onClick={handleHamburgerToogle} alt="" />
          <div className="nav text-sm font-inter sm:hidden absolute z-0 bg-white/95 w-[50%] h-[30%] px-3 py-2">
            <nav>
              <ul className='flex flex-col'>
                <li className='hover:underline'>Home</li>
                <li className='hover:underline'>Recipe</li>
                <li className='hover:underline'>Share Recipe</li>
                <li className='hover:underline'>Contact Us</li>
              </ul>
            </nav>
          </div>
        </div>

      }
        </div>
      </div>


      <div className="main flex justify-between mt-8 mx-4">
        <div className="content  w-[50%] ">
          <h1 className='font-rightcious font-semibold sm:text-[50px] md:text-[60px] text-[20px]'>Your daily plate A <span className='text-[#DB8A89]'>Tasteful</span> Journey</h1>
        </div>
        <div className="img w-[50%] flex justify-center items-center">
          <img className='sm:w-[300px] w-[250px]' src={Plate} alt="" />
        </div>
      </div>




      <div className="achivments grid-cols-1 place-content-center place-items-center sm:grid-cols-3 gap-y-9 mt-2 sm:gap-0 grid gap-x-4">
        <div>
          <h1 className='text-[#DB8A89] text-[50px] sm:text-[75px] font-semibold'>5000+</h1>
          <p className='text-black font-rightcious font-semibold text-[17px] sm:text-[24px] text-center'>Contributors</p>
        </div>
        <div>
          <h1 className='text-[#DB8A89] text-[50px] sm:text-[75px] font-semibold'>340K+</h1>
          <p className='text-black font-rightcious font-semibold text-[17px] sm:text-[24px] text-center'>Racipes</p>
        </div>
        <div>
          <h1 className='text-[#DB8A89] text-[50px] sm:text-[75px] font-semibold'>450+</h1>
          <p className='text-black font-rightcious font-semibold text-[17px] sm:text-[24px] text-center'>Cities</p>
        </div>
      </div>





    </div>
  )
}

export default Home
