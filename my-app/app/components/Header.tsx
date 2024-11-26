"use client";

import { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import imgAlphaLogo from "/public/alpha_letter.png";

const Header = (): JSX.Element => {

    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

    const handleClick = (): void => {
        setIsOpenMenu((prevState) => !prevState);
    };

    return (
        <header className='absolute z-10 flex flex-row w-full h-[80px] text-slate-500 bg-slate-100 border border-b-slate-700'>
            {/* Div contenant l'image du logo avec position relative */}
            <div className="flex flex-col items-center justify-start w-[112px] h-[80px] relative">
                <Image 
                    src={imgAlphaLogo} 
                    width={626} 
                    height={626}
                    alt="no img alpha"
                    className="relative -top-6 flex w-[107px] h-[107px] opacity-60"
                />
                <legend className='absolute text-sm font-bold top-12'>en minuscule</legend>
            </div>

            <nav className="w-full">
                <ul className="flex items-end justify-end h-[70px]">

                    <li className="list-none mr-10">
                        <Link href="/" className="w-full text-base no-underline text-xl font-bold">Home</Link>
                    </li>

                    {/* Bouton "Arts" avec un conteneur relatif pour le menu déroulant */}
                    <div className="relative">
                        <button 
                            onClick={handleClick} 
                            className="text-xl font-bold transition duration-200 ease-in-out hover:text-slate-300 active:text-slate-100
                                hover:bg-slate-800 active:bg-slate-900 cursor-pointer mr-10 px-6 py-1 border"
                        >
                            Arts <span className='text-sm'>⬇</span>
                        </button>

                        {/* Menu déroulant, positionné absolument par rapport au conteneur parent */}
                        {isOpenMenu === true ? (
                            <ul className='absolute w-[200px] bg-slate-900 text-white mt-2 rounded-md shadow-lg'>
                                <li className="list-none">
                                    <Link href="/Movies" className="block w-full text-base no-underline text-xl font-bold px-4 py-2 hover:bg-slate-700">Movies</Link>
                                </li>
                                <li className="list-none">
                                    <Link href="/Paintings" className="block w-full text-base no-underline text-xl font-bold px-4 py-2 hover:bg-slate-700">Paintings</Link>
                                </li>
                                <li className="list-none">
                                    <Link href="/Photos" className="block w-full text-base no-underline text-xl font-bold px-4 py-2 hover:bg-slate-700">Photos</Link>
                                </li>                    
                                <li className="list-none">
                                    <Link href="/Theatre" className="block w-full text-base no-underline text-xl font-bold px-4 py-2 hover:bg-slate-700">Theatre</Link>
                                </li>
                            </ul>
                        ) : null}
                    </div>

                    <li className="list-none mr-10">
                        <Link href="/Shop" className="w-full text-base no-underline text-xl font-bold">Shop</Link>
                    </li>
                    <li className="list-none mr-10">
                        <Link href="/Contact" className="w-full text-base no-underline text-xl font-bold">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
