import { ChangeEvent, Fragment, useState } from 'react'
import { CloseCircle, Logo, SearchIcon } from '../../assets/icons'
import { InputField } from '../core';
import "animate.css"
import Link from 'next/link';

const Navbar = () => {
    const [search, setSearch] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    console.log("SEARCH: ", search);

    return (
        <Fragment>

            <div className='bg-[#1D283C]'>
                <div className='relative max-w-[1280px] mx-auto pl-4 pr-5 py-4 md:py-5 px-[15px] md:px-[50px] lg:px-[112px]'>
                    <div className="flex items-center justify-between">
                        <Link href={'/'}>
                            <Logo />
                        </Link>

                        <div className="md:hidden">
                            {
                                isOpen
                                    ? <button onClick={() => setIsOpen(false)} className="">
                                        <CloseCircle />
                                    </button>
                                    : <button onClick={() => setIsOpen(true)} className="">
                                        <SearchIcon className="w-6 h-6" />
                                    </button>
                            }
                        </div>

                        <div className="relative hidden md:flex">
                            <div className="absolute top-[14px] left-[10px]">
                                <SearchIcon />
                            </div>

                            <InputField
                                type='text'
                                placeholder='Search'
                                className='py-[10px] pl-[30px] pr-[10px] bg-[#1B1F32] text-sm placeholder:text-[#8F929B] text-white'
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>

                </div>
            </div>
            {
                isOpen &&
                <div className="bg-[rgba(0,0,0,0.6)] backdrop-blur-[3px] h-screen absolute w-full">
                    <div className="animate__animated animate__fadeInDown absolute top-0 left-0 px-6 pt-6 pb-8 bg-[#1B1F32] w-full md:hidden ">
                        <div className=" fixed top-[2.35rem] left-9">
                            <SearchIcon />
                        </div>

                        <InputField
                            type='text'
                            placeholder='Search'
                            className='py-[10px] pl-[30px] pr-[10px] bg-[#1B1F32] text-sm placeholder:text-[#8F929B] text-white'
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
            }
        </Fragment>
    )
}

export { Navbar as default }