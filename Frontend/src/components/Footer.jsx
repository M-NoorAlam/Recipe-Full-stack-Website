import React from 'react'
import FB from '../assets/fb.png'
import X from '../assets/x.png'
import Insta from '../assets/insta.png'

const Footer = () => {
    return (
        <div>
            <div className="footer w-[100%] h-[100%] mt-4 p-4 bg-[#F1F1F1] grid grid-cols-3 gap-6 place-content-center place-items-center">

                <div className="webLogo">
                    <h1 className='font-rightcious text-[18px] sm:text-[27px] md:text-[32px] font-semibold text-black'>WEB LOGO</h1>
                    <p className='font-inter text-[10px] sm:text-[13px] md:text-[16px] text-gray-500'>Lorem ipsum dolor sit amet consectetur.
                        Duis lorem purus ipsum sed id tortor
                        vulputate iaculis. Aliquam bibendum dictu
                        felis aenean nisl duis. Dictumst sed integ
                        vitae velit lectus nunc. Tristique tincidun
                        in tellus sagittis ab.</p>
                </div>


                <div className="quickLinks flex flex-col gap-4">
                    <h1 className='font-rightcious text-[18px] sm:text-[24px] font-semibold text-black'>QUICK LINKS</h1>
                    <nav>
                        <ul className='flex flex-col font-inter sm:text-[15px] text-[11px]'>
                            <li className='cursor-pointer hover:underline'>Home</li>
                            <li className='cursor-pointer hover:underline'>Recipe</li>
                            <li className='cursor-pointer hover:underline'>Share Recipe</li>
                            <li className='cursor-pointer hover:underline'>Contact Us</li>
                        </ul>
                    </nav>
                </div>

                <div className="socialMedia ">
                    <div className="heading">
                        <h1 className='font-rightcious text-[18px] sm:text-[24px] font-semibold'>FOLLOW US ON</h1>
                    </div>
                    <div className="imgs grid grid-cols-3 gap-x-5 mt-16">
                        <div className="img1"><img src={FB} alt="" /></div>
                        <div className="img2"><img src={X} alt="" /></div>
                        <div className="img3"><img src={Insta} alt="" /></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
