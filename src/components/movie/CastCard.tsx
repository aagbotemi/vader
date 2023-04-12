const CastCard = () => {
    return (
        <div className='col-span-1'>
            <div className="mr-2 md:mr-5">

                <img src='/movie_avatar.svg' alt="cast avatar" />

                <p className="mt-4 font-semibold text-base text-white">Adam Driver</p>

                <div className="flex items-center text-[#E0E3E8] text-[12px] leading-[20px]">
                    Kylo  Ren
                </div>
            </div>
        </div>
    )
}

export { CastCard as default }