"use client";

import { useEffect, useState } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { FaLongArrowAltDown } from "react-icons/fa";
import imgAlphaLogo from "/public/alpha_letter.png";

const Header = (): JSX.Element => {

    const pathname = usePathname();
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

    const handleClick = (): void => {
        setIsOpenMenu((prevState) => !prevState);
    };

    useEffect(() => {
        const handleOpen = () => {
            setIsOpenMenu((prev) => prev);
        }
        handleOpen();
        return () => console.log("clean-up");
    }, [isOpenMenu]);

    return (
        <header className='absolute z-10 flex flex-row w-full h-[80px] text-slate-500 bg-slate-100 border-b border-slate-500/90'>
            <div className="relative flex flex-col items-center justify-start w-[112px] h-[80px]">
                <Image 
                    src={imgAlphaLogo}
                    width={626} 
                    height={626}
                    alt="no img alpha"
                    className="relative -top-[20px] flex w-[107px] h-[107px] opacity-50"
                />
                <legend className='absolute text-sm font-bold top-[50px]'>en minuscule</legend>
            </div>

            <nav className="w-full">
                <ul className="flex items-end justify-end h-[69px]">

                    <li className={`list-none transform transition-transform duration-200 ease-in-out hover:text-slate-700 hover:scale-110 active:text-slate-300 active:scale-95 mr-8 ${pathname === '/' ? "text-slate-700 scale-110" : "text-slate-500"}`}>
                        <Link 
                            href="/" 
                            className="w-full text-xl font-bold"
                        >
                            Home
                        </Link>
                    </li>

                    <div onMouseEnter={() => setIsOpenMenu(true)}
                        onMouseLeave={() => setIsOpenMenu(false)}
                        onClick={handleClick}
                        className={`${pathname === "/Presentation"
                            ? "text-slate-700 scale-110 hover:text-slate-300" 
                            : pathname === "/Movies" 
                            ? "text-slate-700 scale-110 hover:text-slate-300" 
                            : pathname === "/Paintings" 
                            ? "text-slate-700 scale-110 hover:text-slate-300"
                            : pathname === "/Photos" 
                            ? "text-slate-700 scale-110 hover:text-slate-300" 
                            : pathname === "/Theatre" 
                            ? "text-slate-700 scale-110 hover:text-slate-300" 
                            : "font-bold hover:scale-110"} "relative cursor-pointer text-xl font-bold transition duration-200 ease-in-out hover:text-slate-300
                            hover:bg-slate-800 rounded-tr rounded-tl -mb-2 mr-8`}>

                        <div className="flex flex-row items-center justify-between mb-1 pr-2 pl-1 py-1">

                            <p className="pl-2">
                                {pathname === "/Presentation" ? "Presentation" : pathname === "/Movies" ? "Movies" : pathname === "/Paintings" ? "Paintings" : pathname === "/Photos" ? "Photos" : pathname === "/Theatre" ? "Theatre" : "Arts"}
                            </p>
                            <span><FaLongArrowAltDown size={20} /></span>

                        </div>

                        {isOpenMenu === true ? (
                            <ul className='absolute w-[200px] bg-slate-800 text-slate-300 mt-0 rounded-br-md rounded-bl-md shadow-lg'>
                                {pathname !== "/Presentation" ? (
                                    <li className="list-none">
                                        <Link 
                                            href="/Presentation" 
                                            className="block w-full text-lg font-normal pl-3 py-2 hover:text-slate-300 hover:bg-slate-700 active:text-slate-50 active:bg-slate-600"
                                        >
                                            Presentation    
                                        </Link>
                                    </li>
                                ) : null}
                                {pathname !== "/Movies" ? (
                                    <li className="list-none">
                                        <Link 
                                            href="/Movies" 
                                            className="block w-full text-lg font-normal pl-3 py-2 hover:text-slate-300 hover:bg-slate-700 active:text-slate-50 active:bg-slate-600"
                                        >
                                            Movies    
                                        </Link>
                                    </li>
                                ) : null}
                                {pathname !== "/Paintings" ? (
                                    <li className="list-none">
                                        <Link 
                                            href="/Paintings" 
                                            className="block w-full text-lg font-normal pl-3 py-2 hover:text-slate-300 hover:bg-slate-700 active:text-slate-50 active:bg-slate-600"
                                        >
                                            Paintings
                                        </Link>
                                    </li>
                                ) : null}
                                {pathname !== "/Photos" ? (
                                    <li className="list-none">
                                        <Link 
                                            href="/Photos" 
                                            className="block w-full text-lg font-normal pl-3 py-2 hover:text-slate-300 hover:bg-slate-700 active:text-slate-50 active:bg-slate-600 hover:rounded-br-md hover:rounded-bl-md"
                                        >
                                            Photos
                                        </Link>
                                    </li> 
                                ) : null}
                                {pathname !== "/Theatre" ? (
                                    <li className="list-none">
                                        <Link 
                                            href="/Theatre" 
                                            className="block w-full text-lg font-normal pl-3 py-2 hover:text-slate-300 hover:bg-slate-700 active:text-slate-50 active:bg-slate-600 rounded-br-md rounded-bl-md"
                                        >
                                            Theatre
                                        </Link>
                                    </li>
                                ) : null}
                            </ul>
                        ) : null}
                    </div>

                    <li className={`list-none transform transition-transform duration-200 ease-in-out hover:text-slate-700 hover:scale-110 active:text-slate-300 active:scale-95 mr-10 ${pathname === '/Shop' ? "text-slate-700 scale-110" : "text-slate-500"}`}>
                        <Link href="/Shop" className="w-full text-xl font-bold">Shop</Link>
                    </li>
                    <li className={`list-none transform transition-transform duration-200 ease-in-out hover:text-slate-700 hover:scale-110 active:text-slate-300 active:scale-95 mr-12 ${pathname === '/Contact' ? "text-slate-700 scale-110" : "text-slate-500"}`}>
                        <Link href="/Contact" className="w-full text-xl font-bold">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
