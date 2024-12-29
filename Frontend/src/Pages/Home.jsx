import React from 'react'
import Navbar from '../components/Navbar'
import Plate from '../assets/plate.png'
import MblSidePic from '../assets/mbl side img.png'
import contributor1 from '../assets/contributor1.png'
import contributor2 from '../assets/contributor2.png'
import contributor3 from '../assets/contributor3.png'
import desh1 from '../assets/desh1.png'
import desh2 from '../assets/desh2.png'
import desh3 from '../assets/desh3.png'
import desh4 from '../assets/desh4.png'
import desh5 from '../assets/desh5.png'
import desh6 from '../assets/desh6.png'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import pic from '../assets/Vector.png';

const Home = () => {


  return (
    <div>
<div className="img relative flex justify-end">
        <img className="w-[43%] h-[350px] absolute" src={pic} alt="Header Illustration" />
      </div>
    
<Navbar/>

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



      <div className="container flex flex-col md:flex-row gap-x-5 mt-14 justify-center items-center">
        <div className="img">
          <img src={MblSidePic} className='' alt="Person holding phone seeing recipe" />
        </div>

        <div className="content text-center ">
          <h1 className='font-rightcious sm:text-[40px] text-[35px] md:text-[48px] font-medium'>Share your <span className='text-[#DB8A89]'>Recipe</span></h1>
          <p className='font-inter sm:text-[18px] text-gray-500'>Lorem ipsum dolor sit amet consectetur. Penatibus molestie Amet
            adipiscing eu blandit et netus. Mi ante tristique volutpat
            vitae massa sit ac.</p>
         <Link to="/shareRecipes" > <button className='bg-[#DB8A89] mt-4 rounded-3xl text-white font-inter font-semibold text-center py-2 px-5 hover:bg-[#c07675]'>
            Share Recipe</button></Link>
        </div>
      </div>


      {/* contributors  */}
      <div className="contributors mt-14 mx-9 flex flex-col gap-4 justify-center items-center">
        <div className="heading">
          <h1 className='font-rightcious sm:text-[48px] text-[35px]'>Top contributor</h1>
        </div>
        <div className="imgs grid sm:grid-cols-3 sm:gap-x-5">
          <div className="img1">
            <img src={contributor1} alt="contributor1" />
            <div className="desc text-center px-2 py-1 bg-[#EDECF2] my-3 rounded-2xl font-semibold">
              <h1 className='font-rightcious text-xl text-black'>Contributor bane</h1>
              <p className='font-inter text-black'><span className='text-[#DB8A89]'>450</span> Recipes</p>
              </div>

          </div>
          <div className="img2">
            <img src={contributor2} alt="contributor2" />
            <div className="desc text-center px-2 py-1 bg-[#EDECF2] my-3 rounded-2xl font-semibold">
              <h1 className='font-rightcious text-xl text-black'>Contributor bane</h1>
              <p className='font-inter text-black'><span className='text-[#DB8A89]'>450</span> Recipes</p>
              </div>
          </div>
          <div className="img3">
            <img src={contributor3} alt="contributor3" />
            <div className="desc text-center px-2 py-1 bg-[#EDECF2] my-3 rounded-2xl font-semibold">
              <h1 className='font-rightcious text-xl text-black'>Contributor bane</h1>
              <p className='font-inter text-black'><span className='text-[#DB8A89]'>450</span> Recipes</p>
              </div>
          </div>
          
        </div>
      </div>


      {/* popular recipe  */}
      <div className="popularRecipe flex flex-col gap-x-5 my-7 mx-5 justify-center items-center">
        <div className="heading">
          <h1 className='font-rightcious text-[40px] font-semibold sm:text-[48px]'>Popular Recipes</h1>
        </div>
        <div className="imgs grid sm:grid-cols-3 grid-cols-1 place-content-center place-items-center sm:gap-x-7 gap-y-7 mx-5">
          <div className="img1">
            <img src={desh1} alt="desh 1" />
            </div>
          <div className="img2">
            <img src={desh2} alt="desh 2" />
            </div>
          <div className="img3">
            <img src={desh3} alt="desh 3" />
            </div>
          <div className="img4">
            <img src={desh4} alt="desh 4" />
            </div>
          <div className="img5">
            <img src={desh5} alt="desh 5" />
            </div>
          <div className="img6">
            <img src={desh6} alt="desh 6" />
            </div>
        </div>

            <div className="btn mt-6">
             <Link to="/recipes"> <button className='bg-[#DB8A89] py-2 px-5 rounded-2xl text-white hover:bg-[#b57271]'>See All Recipes</button>
           </Link> </div>
      </div>


<Footer/>


    </div>
  )
}

export default Home
