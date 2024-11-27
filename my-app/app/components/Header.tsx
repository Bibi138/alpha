"use client";

import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import imgAlphaLogo from "/public/alpha_letter.png";

const Header = (): JSX.Element => {

    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

    const handleClick = (): void => {
        setIsOpenMenu((prevState) => !prevState);
    };

    useEffect(() => {
        setIsOpenMenu((prev) => prev);
    }, [isOpenMenu]);

    return (
        <header className='absolute z-10 flex flex-row w-full h-[80px] text-slate-500 bg-slate-100 border border-b-slate-700'>
            <div className="relative flex flex-col items-center justify-start w-[112px] h-[80px]">
                <Image 
                    src={imgAlphaLogo} 
                    width={626} 
                    height={626}
                    alt="no img alpha"
                    className="relative -top-[20px] flex w-[107px] h-[107px] opacity-60"
                />
                <legend className='absolute text-sm font-bold top-[50px]'>en minuscule</legend>
            </div>

            <nav className="w-full">
                <ul className="flex items-end justify-end h-[70px]">

                    <li className="list-none mr-6">
                        <Link href="/" className="w-full no-underline text-xl font-bold">Home</Link>
                    </li>

                    <div onMouseEnter={() => setIsOpenMenu(true)}
                        onMouseLeave={() => setIsOpenMenu(false)}
                        onClick={handleClick}
                        className="relative cursor-pointer text-xl font-bold transition duration-200 ease-in-out hover:text-slate-300 active:text-slate-100
                            hover:bg-slate-800 active:bg-slate-900 rounded-tr rounded-tl -mb-2 mr-6">
                        <div className='flex flex-row items-center justify-between py-1 pb-2'>
                            <p className="pl-2"
                            >
                                Arts
                            </p>
                            <span className='text-sm pr-2 pl-1 pt-1'>⬇</span>
                        </div>

                        {isOpenMenu === true ? (
                            <ul className='absolute w-[200px] bg-slate-900 text-white mt-0 rounded-br-md rounded-bl-md shadow-lg'>
                                <li className="list-none">
                                    <Link href="/Movies" className="block w-full no-underline text-xl font-bold bg-slate-800 px-4 py-2 hover:text-slate-300 hover:bg-slate-700">Movies</Link>
                                </li>
                                <li className="list-none">
                                    <Link href="/Paintings" className="block w-full no-underline text-xl font-bold bg-slate-800 px-4 py-2 hover:text-slate-300 hover:bg-slate-700">Paintings</Link>
                                </li>
                                <li className="list-none">
                                    <Link href="/Photos" className="block w-full no-underline text-xl font-bold bg-slate-800 px-4 py-2 hover:text-slate-300 hover:bg-slate-700">Photos</Link>
                                </li>                    
                                <li className="list-none">
                                    <Link href="/Theatre" className="block w-full no-underline text-xl font-bold bg-slate-800 px-4 py-2 hover:text-slate-300 hover:bg-slate-700 rounded-br-md rounded-bl-md">Theatre</Link>
                                </li>
                            </ul>
                        ) : null}
                    </div>

                    <li className="list-none mr-10">
                        <Link href="/Shop" className="w-full no-underline text-xl font-bold">Shop</Link>
                    </li>
                    <li className="list-none mr-10">
                        <Link href="/Contact" className="w-full no-underline text-xl font-bold">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
