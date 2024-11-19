import Image from 'next/image';
import imgAlphaLogo from "/public/alpha_letter.png";

const Header = () => {
    return (
        <header>
            <div className="div-img">
                <Image 
                    src={imgAlphaLogo} 
                    width={626} height={626}
                    alt="no img alpha"
                    className=""
                />
                <legend>en minuscule</legend>
            </div>

            <nav className="nav-header">
                <ul className="ul-header">

                    <li className="list-none">
                        <a href="/" className="text-base no-underline">Home</a>
                    </li>
                    <li className="list-none">
                        <a href="/Shop" className="text-base no-underline">Shop</a>
                    </li>
                    <li className="list-none">
                        <a href="/Movies" className="text-base no-underline">Movies</a>
                    </li>
                    <li className="list-none">
                        <a href="/Paintings" className="text-base no-underline">Paintings</a>
                    </li>
                    <li className="list-none">
                        <a href="/Contact" className="text-base no-underline">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;