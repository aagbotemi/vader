import { useEffect } from 'react'
import { MoviesForYou } from '../section/home'
import { Cast, DetailsHero, MobileMovieDetail } from '../section/movie-details'
import { fetchMovie } from '../store/slices/movie'
import { useAppDispatch, useAppSelector } from '../store'
import { useParams } from 'react-router-dom'

const MovieDetail = () => {
  const {id} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [])
  
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


