import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className='bg-[#1D283C]'>
            <div className='max-w-[1280px] mx-auto pl-4 pr-5 py-6 px-[15px] md:px-[50px] lg:px-[112px]'>
                <div className="flex items-center justify-center text-[#C3C5CA] text-[14px] leading-[22px]">
                    &copy; {year} Front-end assessment. Obiex
                </div>
            </div>
        </div>
    )
}

export { Footer as default }