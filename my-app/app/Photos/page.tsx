import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Photos",
    description: "access accepted"
};

const Photos = (): JSX.Element => {
    return (
        <div className="w-full min-h-screen">
            <h1 className="text-2xl font-bold text-slate-500 pt-24 pl-4">Photos</h1>

            <main className="flex flex-col items-center justify-content w-full h-screen">
                <h3 className="text-5xl font-bold text-slate-500 bg-slate-50 m-auto mt-[200px]">! En maintenance !</h3>
            </main>
        
        </div>
    )
}
export default Photos;