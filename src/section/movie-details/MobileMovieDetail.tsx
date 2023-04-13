import { useState } from 'react'
import { TabButton } from '../../components/core';
import { CastCard, MoviesForYouCard } from '../../components/movie';
import { useAppSelector } from '../../store';
import { Bars } from 'react-loader-spinner';

const MobileMovieDetail = () => {
    const [activeTab, setActiveTab] = useState<string>("Cast");

    const { payload_cast, payload, loading } = useAppSelector(state => state.movies)

    return (
        <div className=" pl-4 pr-5 px-[15px] md:px-[50px] lg:px-[112px]">

            <div className="flex gap-4 rounded-[5px] p-[3px] mt-8 mb-6">
                <TabButton
                    title="Cast"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                <TabButton
                    title="Recommendations"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
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
                    <div className="pt-4 pb-10">
                        {activeTab.toLowerCase().includes("cast") ? (
                            <div className="grid grid-cols-2 gap-5">
                                {payload_cast.map((cast: any, _i: any) => <CastCard key={cast.id} cast={cast} />)}
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 gap-5">
                                {payload.results.map((movie: any, _i: any) => <MoviesForYouCard key={movie.id} movie={movie} />)}
                            </div>
                        )}
                    </div>
                )
            }

        </div>
    )
}

export { MobileMovieDetail as default }