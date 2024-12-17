import type { Metadata } from "next";
import { Lavishly_Yours } from 'next/font/google';

const lavishlyFont = Lavishly_Yours({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
    title: "Movies",
    description: "access accepted"
};

const Movies = (): JSX.Element => {
    return (
        <div className="w-full min-h-screen">
            <h1 className={`text-5xl text-slate-500 pt-28 pl-4 ${lavishlyFont.className}`}>Vidéos</h1>

            <main className="flex flex-col items-center justify-content w-full h-screen">
                {/* <h3 className="text-5xl font-bold text-slate-500 bg-slate-50 m-auto mt-[200px]">! En maintenance !</h3> */}

                <div className="text-slate-500 bg-slate-100/90 dark:text-slate-300 dark:bg-slate-700/70 m-10 px-4 py-2 rounded shadow-box">
                    <p className="text-justify my-2">
                        Clairement, c&apos;est un axe qui paraît tout à fait différent et pourtant. Qui parle de Cinéma parle 
                        d&apos;écriture également. C&apos;est simplement un moyen de parler, mais de façon bien différente de 
                        certains sujets qui me touchent également et c&apos;est via ce média que je peux y mettre toutes sortes 
                        de choses qui me permettent de sortir des limitations.
                    </p>

                    <p className="text-justify my-2">
                        Cela prend du temps de créer de toutes pièces un tel projet et je ne pouvais pas réellement le faire sans aide. 
                        C&apos;est pourquoi Julien Sulser m&apos;aide et fait amplement partie du projet lanceur de cette ligne-ci. 
                        C&apos;est grâce à ce dernier que je reste focus, par extrapolation, sur l&apos;avancée de mes projets. Je ne 
                        suis pas certain qu&apos;il le voie, mais je le remercie pour tout.
                    </p>

                    <p className="text-justify my-2">
                        En ce qui concerne le film, cela s&apos;est gentiment développé et ce n&apos;est largement pas terminé. 
                        Par contre, j&apos;ai toujours la même envie de l&apos;écrire, puis d&apos;y jouer mon rôle. En suis-je 
                        capable? Je n&apos;en sais trop rien, mais il est certain que je vais donner le meilleur de moi-même. 
                        Donc livre, cinéma, théâtre, photos et peintures,  n&apos;ai-je pas l&apos;impression de trop en faire ? 
                        C&apos;est une possibilité, mais j&apos;en ai surtout pris conscience et je ne me limite aucunement dans 
                        le temps.
                    </p>
                </div>

                
            </main>

        </div>
    )
}
export default Movies;