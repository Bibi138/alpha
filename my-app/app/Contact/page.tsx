import type { Metadata } from "next";
import Link from "next/link";
import { Lavishly_Yours } from 'next/font/google';
import Image from 'next/image';
import imgPhotoContact from "/public/photo-contact-3.jpg";

const lavishlyFont = Lavishly_Yours({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
    title: "Contact",
    description: "access accepted"
};

const Contact = (): JSX.Element => {
    return (
        <div className="w-full h-full">
            <h1 className={`text-5xl text-slate-500 pt-28 pl-4 ${lavishlyFont.className}`}>Contact</h1>

            <main className="flex flex-col items-center justify-content w-full h-full">
                <div className='flex flex-row items-center justify-center w-[1000px] h-[306px] bg-slate-100/90 rounded shadow-box mt-20 pt-4 pb-4 pl-4'>

                    <div className="flex flex-row items-center justify-center w-[1200px]">
                        <p className="text-xl text-slate-500 font-serif">Email: &nbsp;</p>
                        <Link href="mailto:fabio.lourenco@protonmail.com" className="text-xl font-bold text-slate-500 hover:text-blue-500">fabio.lourenco@protonmail.com</Link>
                    </div>

                    <div className="flex w-[520px] h-auto bg-slate-100/90 rounded-tr-md rounded-br-md p-4">
                        <Image
                            src={imgPhotoContact} 
                            width={1840} height={4080} 
                            alt="img photo contact" 
                            className="flex w-[100%] h-auto object-cover rounded-md shadow-box"
                        />
                    </div>

                </div>
            </main>
        </div>
    )
}
export default Contact;