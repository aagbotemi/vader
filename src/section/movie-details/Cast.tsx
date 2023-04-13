import { useState } from 'react'
import Slider from 'react-slick'
import { ArrowLeft, ArrowRight } from '../../assets/icons';
import { CastCard } from '../../components/movie';
import { ICast, ISliderRef } from '../../interface';
import { useAppSelector } from '../../store';
import { Bars } from 'react-loader-spinner';

const Cast = ({ heading }: ICast) => {
    const [sliderRef, setSliderRef] = useState<ISliderRef | null>();
    const { payload_cast, loading } = useAppSelector(state => state.movies)


    console.log("payload_casttttttttttt: ", payload_cast);
    
    let settings = {
        infinite: true,
        speed: 500,
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

    const first = payload_cast[0]

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

                {
                    loading ? (
                        <div className="flex justify-center items-center">
                            <Bars
                                height="80"
                                width="80"
                                color="#1D283C"
                                ariaLabel="bars-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                    ) : (
                        <div className='overflow-x-hidden overflow-y-hidden  pl-4 md:pl-[50px] lg:pl-[112px]'>
                            <Slider ref={(c) => setSliderRef(c)} {...settings}>
                                {Array.isArray(payload_cast) && payload_cast.length > 0 ? payload_cast.map((cast: any) => <CastCard key={cast.id} cast={cast} />) : (
                                    <div className="text-white">No cast found</div>
                                )}
                            </Slider>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export { Cast as default }
