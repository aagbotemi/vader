const CastCard = ({cast}: any) => {

    console.log("CAASSSTTTT: ", cast);
    
    return (
        <div className='col-span-1'>
            <div className="mr-2 md:mr-5">

                <img src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} alt="cast avatar" />

                <p className="mt-4 font-semibold text-base text-white">
                    {cast.name}
                    </p>

                <div className="flex items-center text-[#E0E3E8] text-[12px] leading-[20px]">
                    {cast.character}
                </div>
            </div>
        </div>
    )
}

export { CastCard as default }