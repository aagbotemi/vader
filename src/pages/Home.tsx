import { useEffect } from 'react'
import { Hero, MoviesForYou } from '../section/home'
import { useAppDispatch, useAppSelector } from '../store'
import { fetchMovies } from '../store/slices/movie';
import axios from 'axios';

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchMovies())
  }, [])

  return (
    <div className='bg-[#1B1F32]'>
      <Hero learnMore={true} />
      <MoviesForYou heading={"Movies for you"} />
    </div>
  )
}

export { Home as default }