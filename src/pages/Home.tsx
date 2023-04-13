import { Hero, MoviesForYou } from '../section/home'

const Home = () => {
  return (
    <div className='bg-[#1B1F32]'>
      <Hero learnMore={true} />
      <MoviesForYou heading={"Movies for you"} /> 
    </div>
  )
}

export { Home as default }