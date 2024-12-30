import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className='mx-11 mt-8 flex justify-between items-center'>
        <div className="heading">
          <h1 className='font-rightcious text-[22px] sm:text-[28px] md:text-[35px] font-semibold'>CONTACT US</h1>
        </div>
        <div className="btn">
          <button className='font-inter text-white font-semibold md:px-7 sm:px-5 sm:py-2 py-1 hover:bg-[#d07775] bg-[#DB8A89] rounded-3xl'>Submit</button>
        </div>
      </div>



      <div className="form p-6 flex sm:flex-row flex-col justify-center items-center sm:w-1/2 m-auto mt-5 text-center">
        <form action="#" className='flex sm:flex-row flex-col flex-wrap gap-4 justify-center'>
          <div>
            <input
              type="text"
              placeholder='First name'
              className='border border-gray-400 sm:w-[460px] lg:w-56 px-2 py-1 rounded-xl'
            />
          </div>
          <div>
            <input
              type="text"
              placeholder='Last name'
              className='border border-gray-400 sm:w-[460px] lg:w-56 px-2 py-1 rounded-xl'
            />
          </div>
          <div>
            <input
              type="email"
              placeholder='Email'
              className='border border-gray-400 sm:w-[460px] w-[200px] px-4 py-1 rounded-xl'
            />
          </div>
          <div>
            <select className='font-semibold border border-gray-400 sm:w-[460px] w-[200px] px-4 py-1 rounded-xl' >
              <option className='font-semibold' value="default">Select Subject</option>
              <option value="sugetion">Sugetion</option>
              <option value="complain">Complain</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div>
            <textarea placeholder='Description'
            cols={23}
            rows={7}
            className='border border-gray-400 sm:w-[460px] h-16 sm:h-[150px] w-[200px] px-4 py-1 rounded-xl'
            >

            </textarea>
          </div>

        </form>
      </div>
      <Footer/>


    </div>
  )
}

export default ContactUs
