import type { Metadata } from "next";
import { Lavishly_Yours } from 'next/font/google';

const lavishlyFont = Lavishly_Yours({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
    title: "Shop",
    description: "access accepted"
};

const Shop = (): JSX.Element => {
    return (
        <div className="w-full min-h-screen">
            <h1 className={`text-5xl text-slate-500 pt-28 pl-4 ${lavishlyFont.className}`}>Magasin</h1>

            <main className="flex flex-col items-center justify-content w-full h-screen">
                <h3 className="text-5xl font-bold text-slate-500 bg-slate-50 m-auto mt-[200px]">! En maintenance !</h3>
            </main>
        
        </div>
    )
}
export default Shop;