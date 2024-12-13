"use client";

import { useRouter } from "next/navigation";

const NotFound = (): JSX.Element => {

    const router = useRouter();

    const handleGoBack = (): void => {
        router.push("/");
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <div className="w-auto h-[240px] flex flex-col items-center justify-evenly bg-slate-100/90 dark:text-slate-300 dark:bg-slate-700/70 px-10 rounded-tl rounded-bl shadow-box">
                <h2 className="text-5xl font-bold text-slate-500 dark:text-slate-50">Error 404: Page not found !</h2>

                <button 
                    type="button" 
                    onClick={handleGoBack} 
                    className="text-slate-50 font-bold bg-blue-600 hover:bg-blue-700 active:bg-blue-800 px-6 py-2 rounded"
                >
                    Go Back
                </button>
            </div>
        </div>
    )
}
export default NotFound;