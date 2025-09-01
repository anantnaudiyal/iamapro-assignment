import React from 'react';
import { useState } from 'react';
import { RxFontRoman } from "react-icons/rx";
import card1 from '../Images/card-1.png';
import card2 from '../Images/card-2.png';
import card3 from '../Images/card-3.png';
import { MdKeyboardArrowRight } from "react-icons/md";

import '../Component/Hero.css';

const Room = () => {
    const [isHovered, setIsHovered] = useState(false);


    const defaultBtn = ' max-[1280px]:h-[50px] p-8 h-[68px] border-gray-400 rounded-4xl border-2 text-gray-500 font-semibold ';
    const hoveredBtn = 'max-[1280px]:w-[100px] max-[1280px]:h-[100px] w-[150px] h-[150px] bg-[#214766] rounded-full text-white';
    const cardData = [
        { title: 'Rooms', image: card1, bgColor: '#505870' },
        { title: 'Pools', image: card2, bgColor: '#574b44ae' },
        { title: 'Dining', image: card3, bgColor: '#6D3E07' },
    ];


    return (
        <div className="flex flex-col justify-around items-center overflow-x-auto mt-[200px] max-[1280px]:mt-[100px] ">
            <div className="max-[1280px]:w-[50px] max-[1280px]:h-[70px] max-[1280px]:p-0 h-[84px] w-[64px] border-2 border-[#CDCDCD] flex justify-center items-center p-4 mb-[20px]">
                <div className="h-[62px] w-[42px] border-2 border-[#B0ACAC] text-[#979797] flex items-center justify-center">
                    <p
                        className="
    hero__title
    text-[#979797]
     font-normal
    text-[32px] leading-[40px]
    tracking-[0.06em]
    text-center align-middle
  "
                    >
                        II
                    </p>
                </div>
            </div>

            <div className="flex justify-center max-[1280px]:flex-col gap-6 overflow-x-auto px-6 mb-6">
                {cardData.map((card, index) => (
                    <div
                        key={`card-${index}`}
                        className="group relative max-[1280px]:w-[300px] max-[1280px]:h-70vh w-[470px] h-[470px] overflow-hidden border-b-1 border-l-2 border-r-[0.1px] border-[#CDCDCD] bg-transparent"
                    >
                        <img
                            src={card.image}
                            alt={card.title}
                            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <h2
                                className="text-[#3C6B8A] font-normal max-[1280px]:text-[80px] text-[127.2px] leading-[60px] tracking-[0.06em] align-middle transition-all duration-500 transform group-hover:text-white group-hover:scale-105 hero__title"
                            >
                                {card.title}
                            </h2>
                        </div>
                    </div>

                ))}
            </div>

            <div className='h-[120px] max-[1280px]:h-[70px]  mt-7 mb-5 overflow-visible flex justify-center items-center'>
                <button
                    className={`flex  justify-center items-center transition-all duration-600 ${isHovered ? hoveredBtn : defaultBtn
                        }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {isHovered ? <MdKeyboardArrowRight size={50} /> : 'Accommodation'}
                </button>
            </div>
        </div>
    );
};

export default Room;
