import React from 'react'
import Hambur from '../assets/Hambur.svg';
import HamburClose from '../assets/HamburClose.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '../components/Footer'
import egePic from '../assets/ege pic.png'
import deshFacts from '../assets/deshfacts.png'
import Frame75 from '../assets/Frame 75.png'
import desh1 from '../assets/desh1.png'
import desh2 from '../assets/desh2.png'
import desh3 from '../assets/desh3.png'
import desh4 from '../assets/desh4.png'
import desh5 from '../assets/desh5.png'
import { useState } from 'react';
const Recipe = () => {


    const [hamburgerToggle, setHamburgerToggle] = useState(false);
    const navigate = useNavigate()
    const navigateHome = () => {
        navigate('/home')
    }
    const navigateShareRecipes = () => {
        navigate('/shareRecipes')
    }
    const navigateRecipes = () => {
        navigate('/recipes')
    }
    const navigateContactUs = () => {
        navigate('/contactUs')
    }



    const handleHamburgerToggle = () => {
        setHamburgerToggle(!hamburgerToggle);
    };

    return (
        <div>
            {/* navbar  */}
            <div className="navbar flex justify-between items-center mx-5 my-1">
                <div className="logo">
                    <h1 className="font-rightcious font-semibold md:text-2xl sm:text-xl">
                        NUTRITION MAPPER
                    </h1>
                </div>

                <div className="nav">
                    <nav>
                        <ul className="sm:flex gap-x-6 font-inter font-semibold sm:text-[12px] md:text-[15px] hidden">
                            <li
                                className="cursor-pointer 
                                font-inter text-black hover:underline"
                                onClick={navigateHome}
                            >
                                Home
                            </li>
                            <li
                                className="cursor-pointer 
                                font-inter text-[#DB8A89] hover:underline"
                                onClick={navigateRecipes}
                            >
                                Recipes
                            </li>
                            <li
                                className="cursor-pointer 
                                font-inter text-black hover:underline"
                                onClick={navigateShareRecipes}
                            >
                                Share Recipes
                            </li>
                            <li
                                className="cursor-pointer 
                                font-inter text-black hover:underline"
                                onClick={navigateShareRecipes}
                            >
                                Contact Us
                            </li>
                        </ul>
                    </nav>
                </div>

                {!hamburgerToggle ? (
                    <div className="hamburger relative">
                        <img
                            src={Hambur}
                            onClick={handleHamburgerToggle}
                            className="sm:hidden mx-5 block"
                            alt="Open Menu"
                        />
                    </div>
                ) : (
                    <div>
                        <img
                            src={HamburClose}
                            className="sm:hidden mx-5 block"
                            onClick={handleHamburgerToggle}
                            alt="Close Menu"
                        />
                        <div className="nav text-sm font-inter sm:hidden absolute z-0 bg-white/95 w-[50%] h-[30%] px-3 py-2">
                            <nav>
                                <ul className="flex flex-col">

                                    <li
                                        className="cursor-pointer 
                                font-inter text-black hover:underline"
                                        onClick={navigateHome}
                                    >
                                        Home
                                    </li>
                                    <li
                                        className="cursor-pointer 
                                font-inter text-[#DB8A89] underline"
                                        onClick={navigateRecipes}
                                    >
                                        Recipes
                                    </li>
                                    <li
                                        className="cursor-pointer 
                                font-inter text-black hover:underline"
                                        onClick={navigateShareRecipes}
                                    >
                                        Share Recipes
                                    </li>
                                    <li
                                        className="cursor-pointer 
                                font-inter text-black hover:underline"
                                        onClick={navigateShareRecipes}
                                    >
                                        Contact Us
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                )}
            </div>




            {/* main  */}
            <div className="main mx-10 mt-14">

                <div className="heading ">
                    <h1 className='font-rightcious font-semibold text-[32px]'>RECIPE NAME...</h1>
                </div>





                <div className="main mt-9 gap-x-8 flex sm:flex-row flex-col">



                    <div className="left w-[100%] sm:w-[65%] flex flex-col gap-y-9">
                        <div className="deshPic">
                            <img src={egePic}
                                alt="Desh img"
                                className='w-[500px]' />
                        </div>
                        <div className="img">
                            <img src={Frame75}
                                alt=""
                                className='sm:w-1/2' />
                            <p className='font-inter text-gray-500 mt-3 sm:text-[16px]'>Lorem ipsum dolor sit amet consectetur. Duis lorem purus ipsum sed id tortor vulputate iaculis.
                                Aliquam bibendum dictu felis aenean nisl duis. Dictumst sed integ vitae velit lectus nunc. Tristique
                                tincidun in tellus sagittis ab.</p>
                        </div>
                        <div className='INGREDIENTS flex flex-col gap-y-4'>
                            <h3 className='font-rightcious text-[25px] sm:text-[32px] font-semibold'>INGREDIENTS:</h3>
                            <ul className='list-disc flex flex-col gap-y-2 sm:text-[20px] font-inter'>
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                            </ul>
                        </div>
                        <div className='notes flex flex-col gap-y-4'>
                            <h3 className='font-rightcious text-[25px] sm:text-[32px] font-semibold'>COOKING NOTES:</h3>
                            <ul className='list-disc flex flex-col gap-y-2 sm:text-[20px] font-inter'>
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                            </ul>
                        </div>



                    </div>











                    <div className="right flex flex-col gap-y-8">

                        <div className="imgFacts">
                            <img src={deshFacts} 
                            alt=""
                            className='h-[350px] w-[300px]' />
                        </div>

                        <div className="recentRecipe">
                            <h3 className='font-rightcious sm:text-[24px] text-[19px] md:text-[27px]  lg:text-[32px]  font-semibold'>RECENT RECIPE</h3>
                            <div className="imgs mt-6 flex flex-row gap-x-5 sm:flex-col  sm:gap-y-3 justify-center items-center">
                                <div className="img1">
                                    <img
                                    className='h-[200px] w-[200px]'
                                    src={desh1} alt="" />
                                </div>
                                <div className="img2">
                                    <img
                                    className='h-[200px] w-[200px]'
                                    src={desh2} alt="" />
                                </div>
                                <div className="img3">
                                    <img
                                    className='h-[200px] w-[200px]'
                                    src={desh3} alt="" />
                                </div>
                            </div>
                        </div>


                        <div className="relatedRecipe">
                            <h3 className='font-rightcious sm:text-[24px] text-[19px] md:text-[27px]  lg:text-[32px]  font-semibold'>RELATED RECIPES</h3>
                            <div className="imgs mt-6 flex flex-row gap-x-5 sm:flex-col  sm:gap-y-3 justify-center items-center">
                            <div className="img1">
                                    <img
                                    className='h-[200px] w-[200px]'
                                    src={desh4} alt="" />
                                </div>
                                <div className="img2">
                                    <img
                                    className='h-[200px] w-[200px]'
                                    src={desh5} alt="" />
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>





            <Footer />
        </div>
    )
}

export default Recipe
