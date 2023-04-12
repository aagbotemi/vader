import { useState } from 'react'
import Slider from 'react-slick'
import { ArrowLeft, ArrowRight } from '../../assets/icons';
import { CastCard } from '../../components/movie';
import { ICast, ISliderRef } from '../../interface';

const Cast = ({ heading }: ICast) => {
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
        <div className='max-w-[1280px] mx-auto'>

            <div className="pt-12">

                <div className="flex justify-between items-center mb-6 pl-4 pr-5 px-[15px] md:px-[50px] lg:px-[112px]">

                    <h1 className="font-semibold text-[20px] leading-[28px] text-[#FDFDFD]">{heading}</h1>
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
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((movie: any, _i: any) => <CastCard key={_i} />)}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export { Cast as default }
