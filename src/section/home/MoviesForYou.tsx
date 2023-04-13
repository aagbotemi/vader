import { useState } from 'react'
import Slider from 'react-slick'
import { ArrowLeft, ArrowRight } from '../../assets/icons';
import { MoviesForYouCard } from '../../components/movie';
import { IMoviesForYou, ISliderRef } from '../../interface';
import { useAppSelector } from '../../store';
import { IMovie } from '../../store/slices/movie';
import { Bars } from 'react-loader-spinner';

const MoviesForYou = ({ heading }: IMoviesForYou) => {
    const [sliderRef, setSliderRef] = useState<ISliderRef | null>();

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

    const { payload, loading } = useAppSelector((state) => state.movies);

    console.log("payloaddddddddddddddddd: ", payload);
    
    return (
        <div className='max-w-[1280px] mx-auto'>

            <div className="pt-12 pb-16">

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
                        <div className='overflow-x-hidden overflow-y-hidden pl-4 md:pl-[50px] lg:pl-[112px]'>
                            <Slider ref={(c) => setSliderRef(c)} {...settings}>
                                {Array.isArray(payload.results) && payload.results.length > 0 ? payload.results.map((movie: IMovie, _i: any) => <MoviesForYouCard key={movie.id} movie={movie} />) : null}
                            </Slider>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export { MoviesForYou as default }