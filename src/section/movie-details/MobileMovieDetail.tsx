import { useState } from 'react'
import { TabButton } from '../../components/core';
import { CastCard, RecommendationCard } from '../../components/movie';

const MobileMovieDetail = () => {
    const [activeTab, setActiveTab] = useState<string>("Cast");

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

            <div className="pt-4 pb-10">
                {activeTab.toLowerCase().includes("cast") ? (
                    <div className="grid grid-cols-2 gap-5">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((movie: any, _i: any) => <CastCard key={_i} />)}
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-5">
                        {[1, 2, 3, 4].map((movie: any, _i: any) => <RecommendationCard key={_i} _i={_i} />)}
                    </div>
                )}
            </div>
        </div>
    )
}

export { MobileMovieDetail as default }