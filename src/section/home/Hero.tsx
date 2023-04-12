import { LearnMore, StarIcon, WatchNow } from '../../assets/icons'
import { Button } from '../../components/core'
import { useNavigate } from 'react-router-dom'
import { IHero } from '../../interface';

const Hero = ({ learnMore }: IHero) => {
  const navigate = useNavigate();
  return (
    <div className='font-[Archivo] bg-[url(/hero.svg)] bg-center bg-no-repeat bg-cover w-full h-[calc(100vh-16rem)] md:h-[calc(100vh-8rem)]'>
      <div className='max-w-[1280px] mx-auto pl-4 pr-5 px-[15px] md:px-[50px] lg:px-[112px] '>

        <div className="pt-[105px] md:pt-[175px]">
          <div className="flex items-center text-[14px] leading-[22px]">
            <span className="text-[#E8BA35] pr-2">Featured</span>
            <span className="text-white">|</span>
            <span className="text-white ml-2">2019 | Action, Sci-Fi, Drama</span>
          </div>

          <div className="mt-4 text-[#FDFDFD] text-[27px] leading-[36px] md:text-[42px] md:leading-[44px] font-semibold">
            Star Wars: The Rise of <br /> Skywalker
          </div>

          <div className="text-white mt-[18px] flex items-center font-medium text-[16px] leading-[20px]">
            <StarIcon />
            <span className="ml-2">9.0</span>
            <span className="ml-4 border border-[#FFFFFF] py-[5px] md:py-2 px-[10px] md:px-4 rounded-3xl">16+</span>
          </div>

          <div className="mt-6 text-[#FDFDFD] text-[15px] md:text-[16px] leading-[20px] max-w-[520px]">
            The revival of Emperor Palpatine resurrects the battle between the Resistance and the First Order while the Jedi's legendary conflict with the Sith Lord comes to a head.
          </div>

          <div className="mt-8 flex items-center">
            <Button
              type='button'
              className={'bg-[#3772FF] text-[#FFFFFF]'}
              onClick={() => navigate('/movie/1')}
            >
              <WatchNow />
              <span className="ml-2">Watch now</span>
            </Button>

            {
              learnMore &&
              <Button
                type='button'
                className={'ml-2 bg-[#21354A] text-[#FDFDFD] border border-[#98B6FF]'}
                onClick={() => navigate('/movie/1')}
              >
                <LearnMore />
                <span className="ml-2">Learn more</span>
              </Button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export { Hero as default }
