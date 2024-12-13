"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaLongArrowAltDown } from "react-icons/fa";

type PathProps = {
    pathname: string;
}

const DropDown = ({pathname}: PathProps): JSX.Element => {
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
        <div onMouseEnter={() => setIsOpenMenu(true)}
            onMouseLeave={() => setIsOpenMenu(false)}
            onClick={handleClick}
            className={`${pathname === "/Presentation"
                ? "text-slate-700 scale-110 hover:text-slate-300 dark:text-slate-200" 
                : pathname === "/Movies" 
                ? "text-slate-700 scale-110 hover:text-slate-300 dark:text-slate-200" 
                : pathname === "/Paintings" 
                ? "text-slate-700 scale-110 hover:text-slate-300 dark:text-slate-200"
                : pathname === "/Photos" 
                ? "text-slate-700 scale-110 hover:text-slate-300 dark:text-slate-200" 
                : pathname === "/Theatre" 
                ? "text-slate-700 scale-110 hover:text-slate-300 dark:text-slate-200" 
                : "font-bold hover:scale-110"} relative cursor-pointer dark:text-slate-500 text-xl font-bold transition duration-200 ease-in-out hover:text-slate-300
                hover:bg-slate-800 rounded-tr rounded-tl -mb-2 mr-8`}
        >

        <div className={`flex flex-row items-center justify-between text-slate-500 ${pathname === "/Presentation" 
                ? "dark:text-slate-300" : pathname === "/Movies" 
                ? "dark:text-slate-300" : pathname === "/Paintings" 
                ? "dark:text-slate-300" : pathname === "/Photos" 
                ? "dark:text-slate-300" : pathname === "/Theatre" ? "dark:text-slate-300" : "dark:text-slate-400 dark:hover:text-slate-400"} mb-1 pr-2 pl-1 py-1`}>
            <p className="pl-2">
                {pathname === "/Presentation" ? "Présentation" : pathname === "/Movies" ? "Vidéos" : pathname === "/Paintings" 
                    ? "Peintures" : pathname === "/Photos" ? "Photos" : pathname === "/Theatre" ? "Théâtre" : "Arts"}
            </p>
            <span><FaLongArrowAltDown size={20} /></span>
        </div>

        {isOpenMenu === true ? (
            <ul className='absolute w-[200px] bg-slate-800 text-slate-300 dark:text-slate-300/80 mt-0 rounded-br-md rounded-bl-md shadow-lg'>
                {pathname !== "/Presentation" ? (
                    <li className="list-none">
                        <Link 
                            href="/Presentation" 
                            className="block w-full text-lg font-normal pl-3 py-2 hover:text-slate-300 hover:bg-slate-700 active:text-slate-50 active:bg-slate-600 dark:active:text-slate-200"
                        >
                            Présentation    
                        </Link>
                    </li>
                ) : null}
                {pathname !== "/Movies" ? (
                    <li className="list-none">
                        <Link 
                            href="/Movies" 
                            className="block w-full text-lg font-normal pl-3 py-2 hover:text-slate-300 hover:bg-slate-700 active:text-slate-50 active:bg-slate-600 dark:active:text-slate-200"
                        >
                            Vidéos    
                        </Link>
                    </li>
                ) : null}
                {pathname !== "/Paintings" ? (
                    <li className="list-none">
                        <Link 
                            href="/Paintings" 
                            className="block w-full text-lg font-normal pl-3 py-2 hover:text-slate-300 hover:bg-slate-700 active:text-slate-50 active:bg-slate-600 dark:active:text-slate-200"
                        >
                            Peintures
                        </Link>
                    </li>
                ) : null}
                {pathname !== "/Photos" ? (
                    <li className="list-none">
                        <Link 
                            href="/Photos" 
                            className="block w-full text-lg font-normal pl-3 py-2 hover:text-slate-300 hover:bg-slate-700 active:text-slate-50 active:bg-slate-600 dark:active:text-slate-200 hover:rounded-br-md hover:rounded-bl-md"
                        >
                            Photos
                        </Link>
                    </li> 
                ) : null}
                {pathname !== "/Theatre" ? (
                    <li className="list-none">
                        <Link 
                            href="/Theatre" 
                            className="block w-full text-lg font-normal pl-3 py-2 hover:text-slate-300 hover:bg-slate-700 active:text-slate-50 active:bg-slate-600 dark:active:text-slate-200 rounded-br-md rounded-bl-md"
                        >
                            Théâtre
                        </Link>
                    </li>
                ) : null}
            </ul>
        ) : null}
    </div>
    )
}
export default DropDown;
