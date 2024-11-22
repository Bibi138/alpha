import Image from 'next/image';
import imgAlphaLogo from "/public/alpha_letter.png";

const Header = () => {
    return (
        <header className='absolute z-10 flex flex-row w-full h-[80px] text-slate-500 border border-b-slate-700'>
            <div className="flex flex-col items-center justify-start w-[112px] h-[80px] border ml-0">
                <Image 
                    src={imgAlphaLogo} 
                    width={626} 
                    height={626}
                    alt="no img alpha"
                    className="relative -top-6 flex w-[107px] h-[107px] opacity-60 border border-blue-500"
                />
                <legend className='absolute w-[107px]text-sm font-bold top-12'>en minuscule</legend>
            </div>

            <nav className="w-full">
                <ul className="flex items-end justify-end h-[70px]">

                    <li className="list-none mr-20">
                        <a href="/" className="w-full text-base no-underline text-xl font-bold">Home</a>
                    </li>
                    <li className="list-none mr-20">
                        <a href="/Shop" className="w-full text-base no-underline text-xl font-bold">Shop</a>
                    </li>
                    <li className="list-none mr-20">
                        <a href="/Movies" className="w-full text-base no-underline text-xl font-bold">Movies</a>
                    </li>
                    <li className="list-none mr-20">
                        <a href="/Paintings" className="w-full text-base no-underline text-xl font-bold">Paintings</a>
                    </li>
                    <li className="list-none mr-20">
                        <a href="/Contact" className="w-full text-base no-underline text-xl font-bold">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;