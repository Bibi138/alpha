import type { Metadata } from "next";
import Image from 'next/image';
import imgPhotoContact from "/public/photo-contact-3.jpg";

export const metadata: Metadata = {
    title: "Contact",
    description: "access accepted"
};

const Contact = (): JSX.Element => {
    return (
        <div className="w-full min-h-screen">
            <h1 className="text-2xl font-bold text-slate-500 pt-24 pl-4">Contact</h1>

            <main className="flex flex-col items-center justify-content w-full h-screen">
                <div className="mt-20">

                    <div className='flex flex-row items-center justify-center w-[1000px] h-[300px] bg-slate-50 rounded shadow-box'>

                        <div className="flex flex-row items-center justify-center w-[1200px]">
                            <p className="text-xl text-slate-500">Email: &nbsp;</p>
                            <p className="text-xl font-bold text-slate-500">fabio.lourenco@protonmail.com</p>
                        </div>

                        <Image 
                            src={imgPhotoContact} 
                            width={1840} height={4080} 
                            alt="img photo contact" 
                            className="flex w-[300px] h-[300px] rounded-tr-md rounded-br-md"
                        />

                    </div>
                </div>
            </main>
        </div>
    )
}
export default Contact;