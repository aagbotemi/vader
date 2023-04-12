import React, { useState } from 'react'
import Slider from 'react-slick'
import { ArrowLeft, ArrowRight } from '../../assets/icons';

interface ISliderRef {
    slickPrev: () => void;
    slickNext: () => void;
}

const MoviesForYou = () => {
    const [sliderRef, setSliderRef] = useState<ISliderRef | null>();

    let settings = {
        infinite: true,
        speed: 1000,
        arrows: false,
        cssEase: "linear",
        className: "center",
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 2,
        responsive: [
            {
                breakpoint: 995,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className='font-[Archivo] bg-[#1B1F32]'>
            <div className='max-w-[1280px] mx-auto'>

                <div className="pt-12 pb-16">

                    <div className="flex justify-between items-center mb-6 pl-4 pr-5 px-[15px] md:px-[50px] lg:px-[112px]">

                        <h1 className="font-semibold text-[20px] leading-[28px] text-[#FDFDFD]">Movies for you</h1>
                        <div className="flex items-center">
                            <div className="">
                                <button
                                    className=""
                                    onClick={() => sliderRef?.slickPrev()}
                                >
                                    <ArrowLeft />
                                </button>
                                <button
                                    className="cursor-pointer ml-5"
                                    onClick={() => sliderRef?.slickNext()}
                                >
                                    <ArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className='overflow-x-hidden overflow-y-hidden  pl-4 md:pl-[50px] lg:pl-[112px]'>
                        <Slider ref={(c) => setSliderRef(c)} {...settings}>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((movie: any, _i: any) => {
                                    return (
                                        <div key={_i} className=''>
                                            <div className="mr-2 md:mr-5">

                                                <img src='/movie_avatar.svg' alt="" />

                                                <p className="mt-4 font-semibold text-base text-white">The Phantom Menace {_i + 1}</p>

                                                <div className="flex items-center text-[#E0E3E8] text-[12px] leading-[20px]">
                                                    <span className="">2017</span>
                                                    <span className="text-[#7B808B] mx-3">|</span>
                                                    <span className="">1h 53m</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { MoviesForYou as default }