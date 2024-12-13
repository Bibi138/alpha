import type { Metadata } from "next";
import Image from "next/image";
import loadingSpirale from "/public/loading-spirale-modified.png";
import { Lavishly_Yours } from 'next/font/google';

const lavishlyFont = Lavishly_Yours({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
    title: "Paintings",
    description: "access accepted"
};

const Paintings = (): JSX.Element => {
    return (
        <div className="w-full min-h-screen">
            <div className="pt-28 pl-4">
                <h1 className={`text-5xl text-slate-500 ${lavishlyFont.className}`}>Peintures</h1> 
            </div>

            <main className="flex flex-col items-center justify-content w-full h-full mb-[120px]">
                {/* <h3 className="text-5xl font-bold text-slate-500 bg-slate-50 m-auto mt-[200px]">! En maintenance !</h3> */}

                <div className="text-slate-500 bg-slate-100/90 dark:text-slate-300 dark:bg-slate-700/70 m-10 px-4 py-2 rounded shadow-box">
                    <p className="text-justify my-2">
                        C&apos;est une chose que j&apos;ai toujours été attiré vers, car c&apos;est un espace de liberté incroyable. 
                        Aucune idée n&apos;est &apos;nulle&apos;. À chaque personne le droit de dessiner ce qu&apos;elle veut. Il ne s&apos;agit 
                        pas de dessiner dans le but que ce soit simplement vu, mais plutôt que ces peintures soient 
                        comme un outil pouvant servir à une émancipation de l&apos;être humain de la société contemporaine 
                        sclérosante et sclérosée.
                    </p>

                    <p className="text-justify my-2">
                        Il y aura des possibilités de découvrir ces peintures en live lorsque les fonds le permettront.
                        Ce sera affiché ici-même également, mais rien ne vaut de voir les choses en vrai,  avoir quelque 
                        chose de moins distant. Un écran d&apos;ordinateur ou de tablette ne permet pas aussi &apos;facilement&apos; de 
                        transmettre une émotion. C&apos;est ce que je trouve important dans le fait de voir une peinture en live, 
                        c&apos;est une constatation que j&apos;ai faite en tentant de comprendre des peintures qui ont leurs histoires 
                        à raconter également.
                    </p>

                    <p className="text-justify my-2">
                        Cela peut sembler différent d&apos;une photo. C&apos;est vrai que lorsque l&apos;on ne connaît pas, c&apos;est le cas, 
                        mais je pense qu&apos;il n&apos;en est pas question, donc il y aura également des photographies. Lorsque j&apos;imagine 
                        l&apos;art en général, je ne distingue aucunes différences dans le but final que je souhaite créer chez le visiteur.

                    </p>
                </div>

                <div className="flex flex-row items-center justify-between w-full px-10">

                    <div className="flex align-items justify-center sm:w-[200px] sm:h-[120px] md:w-[400px] md:h-[240px] xl:w-[600px] xl:h-[360px] 2xl:w-[600px] 2xl:h-[360px] bg-slate-200/50 border border-slate-300 shadow-box rounded">
                        <Image  src={loadingSpirale} alt="img 1" className="sm:w-[100px] sm:h-[100px] md:w-[200px] md:h-[200px] xl:w-[300px] xl:h-[300px] 2xl:w-[300px] 2xl:h-[300px] animate-spin m-auto" />
                    </div>

                    <div className="flex align-items justify-center sm:w-[200px] sm:h-[120px] md:w-[400px] md:h-[240px] xl:w-[600px] xl:h-[360px] 2xl:w-[600px] 2xl:h-[360px] bg-slate-200/50 border border-slate-300 shadow-box rounded">
                        <Image  src={loadingSpirale} alt="img 2" className="sm:w-[100px] sm:h-[100px] md:w-[200px] md:h-[200px] xl:w-[300px] xl:h-[300px] 2xl:w-[300px] 2xl:h-[300px] animate-spin m-auto" />
                    </div>

                </div>
                <div className="flex flex-row items-center justify-between w-full mt-10 px-10">
                    
                    <div className="flex align-items justify-center sm:w-[200px] sm:h-[120px] md:w-[400px] md:h-[240px] xl:w-[600px] xl:h-[360px] 2xl:w-[600px] 2xl:h-[360px] bg-slate-200/50 border border-slate-300 shadow-box rounded">
                        <Image  src={loadingSpirale} alt="img 3" className="sm:w-[100px] sm:h-[100px] md:w-[200px] md:h-[200px] xl:w-[300px] xl:h-[300px] 2xl:w-[300px] 2xl:h-[300px] animate-spin m-auto" />
                    </div>
                    
                    <div className="flex align-items justify-center sm:w-[200px] sm:h-[120px] md:w-[400px] md:h-[240px] xl:w-[600px] xl:h-[360px] 2xl:w-[600px] 2xl:h-[360px] bg-slate-200/50 border border-slate-300 shadow-box rounded">
                        <Image  src={loadingSpirale} alt="img 4" className="sm:w-[100px] sm:h-[100px] md:w-[200px] md:h-[200px] xl:w-[300px] xl:h-[300px] 2xl:w-[300px] 2xl:h-[300px] animate-spin m-auto" />
                    </div>
                
                </div>

            </main>
        
        </div>
    )
}
export default Paintings;