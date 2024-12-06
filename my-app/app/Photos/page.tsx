import type { Metadata } from "next";
import { Lavishly_Yours } from 'next/font/google';

const lavishlyFont = Lavishly_Yours({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
    title: "Photos",
    description: "access accepted"
};

const Photos = (): JSX.Element => {
    return (
        <div className="w-full min-h-screen">
            <h1 className={`text-5xl text-slate-500 pt-28 pl-4 ${lavishlyFont.className}`}>Photos</h1>

            <main className="w-full h-screen">
                {/* <h3 className="text-5xl font-bold text-slate-500 bg-slate-50 m-auto mt-[200px]">! En maintenance !</h3> */}

                <div className="bg-slate-100/90 m-10 px-4 py-2 rounded shadow-box">
                    <p className="text-justify my-2">
                        Bienvenue à toi dans cette partie du projet monumental en devenir. Ici, toutes sortes de photographies vont 
                        parsemer cette page, je ferai une exposition de certaines images lorsque je le pourrai, beaucoup d&apos;idées 
                        fourmillent dans ma tête et je sais que je vais les lancer. La photographie est l&apos;un de ces projets dont je 
                        veux rendre compte.
                    </p>

                    <p className="text-justify my-2">
                        Effectivement, je pourrais dire beaucoup de choses capitales sans un mot et cela me ravi. J&apos;ai un goût prononcé 
                        pour les photographies en noir et blanc, mais cela ne veut pas dire que je n&apos;aime pas les couleurs. Je trouve 
                        plutôt qu&apos;il est fascinant de voir que, tout comme les langues, les mots ne sont pas l&apos;essentiel, mais ce qui 
                        compte compte sont les messages véhiculés par ce médias.
                    </p>

                    <p className="text-justify my-2">
                        Ce qui est intéressant, je trouve, est le fait qu&apos;il n&apos;y ait pas de bonne ou mauvaise réponse à une image. Tout 
                        dépend de ton ressenti. Bien entendu que l&apos;auteur de cela a une vision précise des choses qu&apos;il a produites, 
                        c&apos;est là que les mots sont importants, mais il n&apos;y a pas de bonne vision d&apos;un ressenti.
                    </p>
                </div>

            </main>
        
        </div>
    )
}
export default Photos;