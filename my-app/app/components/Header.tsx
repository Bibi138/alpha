"use client";

import { useEffect, useState } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import DropDown from './DropDown';
import FlagsComponent from './FlagsComponent';
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import imgAlphaLogo from "/public/alpha_letter.png";

const Header = (): JSX.Element | null => {

    const pathname = usePathname();
    
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
        return () => console.log("Clean-up mounted (header)");
    }, []);

    if(!mounted) return null;

    return (
        <header className='fixed top-0 z-10 flex flex-row w-full h-[80px] text-slate-500 bg-slate-100 dark:text-slate-50 dark:bg-black shadow-box'>
            <div className="relative flex flex-col items-center justify-start w-[112px] h-[80px]">
                <Image 
                    src={imgAlphaLogo}
                    width={626} 
                    height={626}
                    alt="no img alpha"
                    className="relative -top-[20px] flex w-[107px] h-[107px] dark:filter dark:invert opacity-100"
                />
                <legend className='absolute text-sm font-bold top-[50px]'>en minuscule</legend>
            </div>

            <nav className="w-full">
                <ul className="flex items-end justify-end h-[69px]">
                    <li className={`list-none transform transition-transform duration-200 ease-in-out hover:text-slate-700 dark:hover:text-slate-400 hover:scale-110 active:text-slate-300 active:scale-95 mr-8 ${pathname === '/' ? "text-slate-700 dark:text-slate-300 scale-110" : "text-slate-500 dark:text-slate-400"}`}>
                        <Link 
                            href="/" 
                            className="w-full text-xl font-bold"
                        >
                            Accueil
                        </Link>
                    </li>

                    <DropDown pathname={pathname}/>

                    <li className={`list-none transform transition-transform duration-200 ease-in-out hover:text-slate-700 dark:hover:text-slate-400 hover:scale-110 active:text-slate-300 active:scale-95 mr-10 ${pathname === '/Shop' ? "text-slate-700 dark:text-slate-300 scale-110" : "text-slate-500 dark:text-slate-400"}`}>
                        <Link href="/Shop" className="w-full text-xl font-bold">Magasin</Link>
                    </li>
                    <li className={`list-none transform transition-transform duration-200 ease-in-out hover:text-slate-700 dark:hover:text-slate-400 hover:scale-110 active:text-slate-300 active:scale-95 mr-10 ${pathname === '/Contact' ? "text-slate-700 dark:text-slate-300 scale-110" : "text-slate-500 dark:text-slate-400"}`}>
                        <Link href="/Contact" className="w-full text-xl font-bold">Contact</Link>
                    </li>

                    {mounted === true ? (
                        <li className="list-none transform bg-white dark:bg-slate-800 border dark:border-slate-500/50 border-slate-300 mr-10 p-2 rounded-full">
                            <div
                                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} 
                                className="w-full text-xl font-bold transition-transform duration-200 ease-in-out hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 hover:scale-110 active:text-slate-300 active:scale-95"
                            >
                                {theme === 'light' 
                                    ? <IoMoon size={20} /> 
                                    : <IoSunnyOutline size={20} />
                                }
                            </div>
                        </li>
                        ) : null
                    }

                    <li className='list-none'>
                        <FlagsComponent />
                    </li> 

                </ul>
            </nav>
        </header>
    );
}

export default Header;
