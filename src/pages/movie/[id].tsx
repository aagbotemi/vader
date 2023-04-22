import { useEffect } from 'react'
import { MoviesForYou } from '@/section/home'
import { Cast, DetailsHero, MobileMovieDetail } from '@/section/movie-details'
import { fetchMovie } from '@/store/slices/movie'
import { useAppDispatch, useAppSelector } from '@/store'
import { useRouter } from 'next/router'
import { Footer, Navbar } from '@/components/navigation'
import Head from 'next/head'

const MovieDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchMovie(id));
    }, [])

    return (
        <>
            <Head>
                <title>Vader | Details</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
            </Head>

            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex-auto">
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
                </div>
                <Footer />
            </div>
        </>
    )
}

export { MovieDetail as default }

