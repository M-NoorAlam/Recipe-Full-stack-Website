import React from 'react'
import Background from '../assets/Frame 5.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';



const Signup = () => {

  const [username, setUsername] = useState('');
 const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');


  const navigate = useNavigate();

  const handleNavigate = ()=>{
    navigate('/')
  }
  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent form reload idk what this is 

    const data = {
      username:username,
      email: email,
      password: password,
      ConfirmPassword:ConfirmPassword
    };

    console.log('Signup data:', data);

    try {
      const response = await axios.post('http://localhost:3000/post/user', data);
      console.log('API response:', response.data);

      if (password != ConfirmPassword) {
        alert('password is not matching');
      } else {
        console.log('signup successful',response.data);
        navigate('/home'); // Navigate to the home screen
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred. Please check the console for details.');
    }
  };




  return (
    
    <div  className="absolute inset-0 flex flex-col">
      <div className="bgImg w-full h-screen relative flex flex-col  items-center">
        <img className='absolute w-full h-full object-cover' src={Background} alt="Background pic" />
        <div className='z-0'>
          <div className="login flex flex-col justify-center items-center">
            <h1 className='text-[22px] font-semibold font-rightcious sm:text-[40px] lg:mt-9 md:mt-1'>Signup</h1>
          </div>
          <form
          onSubmit={handleSignup}
           className='flex lg:mt-4 px-5 flex-col sm:justify-center md:mt-2 sm:px-11 rounded-3xl sm:items-center bg-white sm:w-full sm:h-full w-[300px] h-[357px] '>
            <input className='border border-gray-400 px-4 mt-4 sm:mt-0 sm:px-8 py-2 rounded-2xl mb-2' type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
            <input className='border border-gray-400 px-4 mt-4 sm:mt-0 sm:px-8 py-2 rounded-2xl mb-2' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
            <input className='border border-gray-400 px-4 mt-4 sm:mt-0 sm:px-8 py-2 rounded-2xl mb-2' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
            <input className='border border-gray-400 px-4 mt-4 sm:mt-0 sm:px-8 py-2 rounded-2xl mb-2' type="password" value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' />
            
            <div className='mt-3'>
              <button
              type='submit'
               className='bg-[#DB8A89] ml-9 sm:m-0 px-16 sm:px-24 py-2 rounded-3xl text-white hover:bg-[#c87d7c]'>Signup</button>
            </div>
            <div className='flex gap-2 mt-3 ml-11 sm:ml-5'>
              <p className='sm:text-[14px] text-[12px] font-inter'>Already have an Account? <span className='sm:text-[15px] text-[13px] text-[#DB8A89] cursor-pointer hover:underline' onClick={handleNavigate}> Login</span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
