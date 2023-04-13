import { MoviesForYou } from '../section/home'
import { Cast, DetailsHero, MobileMovieDetail } from '../section/movie-details'

const MovieDetail = () => {
  return (
    <div className='bg-[#1B1F32]'>
      <DetailsHero />

      <div className="hidden md:block">
        <Cast heading={"Cast"} />
        <MoviesForYou heading={"You might also like"} />
      </div>

      <div className="md:hidden max-w-[1280px] mx-auto">
        <MobileMovieDetail />
      </div>
    </div>
  )
}

export { MovieDetail as default }


