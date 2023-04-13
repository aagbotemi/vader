import { Link } from "react-router-dom"
import { IMoviesForYouCard } from "../../interface"
import { IMovie } from "../../store/slices/movie"

const MoviesForYouCard = ({ movie }: any) => {
    return (
        <div className=''>
            <Link to={`/movie/${movie.id}`}>
                <div className="mr-2 md:mr-5">

                    <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "/movie_avatar.svg"} alt="" />

                    <p className="mt-4 font-semibold text-base text-white">{movie.title}</p>

                    <div className="flex items-center text-[#E0E3E8] text-[12px] leading-[20px]">
                        <span className="">{movie.release_date.substring(0, 4)}</span>
                        <span className="text-[#7B808B] mx-3">|</span>
                        <span className="">1h 53m</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export { MoviesForYouCard as default }