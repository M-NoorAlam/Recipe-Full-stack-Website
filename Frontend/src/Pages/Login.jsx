import React, { useState } from 'react';
import Background from '../assets/Frame 5.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/signup');
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form reload idk what this is 

    const data = {
      email: email,
      password: password,
    };

    console.log('Login data:', data);

    try {
      const response = await axios.post('http://localhost:3000/login/user', data);
      console.log('API response:', response.data);

      if (response.data.success) {
        console.log('Login successful!',response.data);
        navigate('/home'); // Navigate to the home screen
      } else {
        alert('Wrong email or password. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please check the console for details.');
    }
  };

  return (
    <div className="absolute inset-0 flex flex-col">
      <div className="bgImg w-full h-screen relative flex flex-col items-center">
        <img className="absolute w-full h-full object-cover" src={Background} alt="Background" />
        <div className="z-0">
          <div className="login flex flex-col justify-center items-center">
            <h1 className="text-[18px] font-semibold sm:text-[40px] mt-9">LOGIN</h1>
            <p className="text-[13px] sm:text-[16px] font-thin">
              Over <span className="text-white font-semibold">5000K</span> Recipes from the world
            </p>
          </div>
          <form
            id="/"
            className="flex mt-4 px-5 flex-col sm:justify-center sm:px-11 rounded-3xl sm:items-center bg-white sm:w-full sm:h-full w-[250px] h-[300px]"
            onSubmit={handleLogin}
          >
            <input
              className="border border-gray-400 px-4 mt-4 sm:mt-0 sm:px-8 py-2 rounded-2xl mb-4"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="border border-gray-400 px-4 mt-2 sm:px-8 py-2 rounded-2xl"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <div className="sm:ml-52 mb-11">
              <p className="sm:text-[14px] text-[12px] text-[#DB8A89] hover:underline cursor-pointer">
                Forgot Password?
              </p>
            </div>
            <div className="mt-3">
              <button
                type="submit"
                className="bg-[#DB8A89] ml-4 sm:m-0 px-16 sm:px-24 py-2 rounded-3xl text-white hover:bg-[#c87d7c]"
              >
                Login
              </button>
            </div>
            <div className="flex gap-2 mt-3 ml-5 sm:ml-5">
              <p className="sm:text-[14px] text-[12px]">
                Don't have an Account?{' '}
                <span
                  onClick={handleNavigate}
                  className="sm:text-[15px] text-[13px] text-[#DB8A89] cursor-pointer hover:underline"
                >
                  Signup
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
