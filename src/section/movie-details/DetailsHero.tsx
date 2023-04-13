import { StarIcon, WatchNow } from '@/assets/icons'
import { Button } from '@/components/core'
import { useAppSelector } from '@/store';
import { Bars } from 'react-loader-spinner';
import { Fragment } from 'react';

const DetailsHero = () => {
  const { payload_detail, loading } = useAppSelector((state: any) => state.movies);

  return (
    <div style={{ backgroundImage: payload_detail.poster_path ? `url(https://image.tmdb.org/t/p/w500${payload_detail.poster_path})` : "url(/movie_avatar.svg)" }} className='bg-center bg-no-repeat bg-cover w-full h-[calc(100vh-16rem)] md:h-[calc(100vh-8rem)]'>
      <div className='max-w-[1280px] mx-auto pl-4 pr-5 px-[15px] md:px-[50px] lg:px-[112px] '>

        <div className="pt-[105px] md:pt-[175px]">

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
              <Fragment>
                <div className="flex items-center text-[14px] leading-[22px]">
                  <span className="text-[#E8BA35] pr-2">Featured</span>
                  <span className="text-white">|</span>
                  <span className="text-white ml-2">{payload_detail.release_date?.substring(0, 4)} | {payload_detail.genres?.map((genre: any) => genre.name).join(", ")}</span>
                </div>

                <div className="mt-4 max-w-[400px] text-[#FDFDFD] text-[27px] leading-[36px] md:text-[42px] md:leading-[44px] font-semibold">
                  {payload_detail.title}
                </div>

                <div className="text-white mt-[18px] flex items-center font-medium text-[16px] leading-[20px]">
                  <StarIcon />
                  <span className="ml-2">{payload_detail.vote_average}</span>
                  <span className="ml-4 border border-[#FFFFFF] py-[5px] md:py-2 px-[10px] md:px-4 rounded-3xl">16+</span>
                </div>

                <div className="mt-6 text-[#FDFDFD] text-[15px] md:text-[16px] leading-[20px] max-w-[520px]">
                  {payload_detail.overview}
                </div>

                <div className="mt-8 flex items-center">
                  <Button
                    type='button'
                    className={'bg-[#3772FF] text-[#FFFFFF]'}
                  // onClick={() => navigate('/movie/1')}
                  >
                    <WatchNow />
                    <span className="ml-2">Watch now</span>
                  </Button>
                </div>
              </Fragment>
            )
          }


        </div>
      </div>
    </div>
  )
}

export { DetailsHero as default }
