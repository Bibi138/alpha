import type { Metadata } from "next";
import { Lavishly_Yours } from 'next/font/google';

const lavishlyFont = Lavishly_Yours({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
    title: "Presentation",
    description: "access accepted"
};

const Presentation = (): JSX.Element => {
    return (
        <div className="w-full h-full">
            <h1 className={`text-5xl text-slate-500 pt-28 pl-4 ${lavishlyFont.className}`}>Arts</h1>

            <main className="w-full h-full">
                {/* <h3 className="text-5xl font-bold text-slate-500 bg-slate-50 m-auto mt-[200px]">! En maintenance !</h3> */}

                <div className="text-slate-500 bg-slate-100/90 m-10 px-4 py-2 rounded shadow-box">
                    <p className="text-justify my-2">
                        C&apos;est vis à vis de cet élément fondateur de ma nouvelle vie que je vais prendre le temps nécessaire pour 
                        réfléchir et rendre compte de l&apos;absurdité monumentale du monde dans lequel nous nous trouvons. Il est clair 
                        que je n&apos;ai pas fait de formation artistique, mais cela rend compte du fait que je cherche à décloisonner 
                        les esprits. Rien ne m&apos;empêche de créer des choses et c&apos;est très positif.
                    </p>

                    <p className="text-justify my-2">
                        Vivre de projets est ce que j&apos;ai pour ambition de faire. Jamais plus je ne pourrais consentir à un 
                        réductionnisme de mon être. Si je me sens l&apos;envie de créer un projet, j&apos;y vais à fond et c&apos;est là que 
                        se situe là base de tous mes projets. Étant assez perfectionniste dans l&apos;âme,  je cherche à donner une 
                        certaine cohérence à mes projets. Je ne sais pas du tout où je vais, mais j&apos;y vais.
                    </p>

                    <p className="text-justify my-2">
                        Il y a des projets de prévus,  mais ça ne pourrait pas se limiter à ça, c&apos;est clair. Il n&apos;y a pas de limites, 
                        à la pensée humaine tout du moins. Je te laisse parcourir toutes les pages de ce site qui ne sert pas 
                        uniquement à y déposer mes projets, mais c&apos;est un de ces projets artistiques. L&apos;art est partout, il n&apos;y a pas 
                        de frontières en soit. Je sais que je ne suis absolument pas comme ce monde a tendu à me le faire croire.
                    </p>

                    <p className="text-justify my-2">
                        Bonne visite dans tous les cas. N&apos;hésite pas à revenir sur le site, car les projets ne s&apos;arrêtent pas.
                    </p>
                </div>

            </main>
        
        </div>
    )
}
export default Presentation;
