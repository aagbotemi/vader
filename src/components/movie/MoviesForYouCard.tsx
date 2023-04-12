import { Link } from "react-router-dom"
import { IMoviesForYouCard } from "../../interface"

const MoviesForYouCard = ({ _i }: IMoviesForYouCard) => {
    return (
        <div className=''>
            <Link to={`/movie/${_i}`}>
                <div className="mr-2 md:mr-5">

                    <img src='/movie_avatar.svg' alt="" />

                    <p className="mt-4 font-semibold text-base text-white">The Phantom Menace {_i + 1}</p>

                    <div className="flex items-center text-[#E0E3E8] text-[12px] leading-[20px]">
                        <span className="">2017</span>
                        <span className="text-[#7B808B] mx-3">|</span>
                        <span className="">1h 53m</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export { MoviesForYouCard as default }