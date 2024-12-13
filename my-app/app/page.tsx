import Image from "next/image";
import { Lavishly_Yours } from 'next/font/google';
import imgAlphaLogo from "/public/alpha_letter.png";
import spiralStairs from "/public/main-spirale.jpg";

const lavishlyFont = Lavishly_Yours({
  subsets: ["latin"],
  weight: "400",
});

export default function Home(): JSX.Element {
  return (
    <div>

      <main>      
      
        <div className="relative flex flex-row items-center justify-center w-full pt-20">
          <Image 
            src={imgAlphaLogo} 
            width={626} height={626} 
            alt="no img alpha" 
            className="w-[100px] h-[100px] dark:filter dark:invert opacity-90 dark:opacity-100" 
          />
          <h1 className="text-xl text-slate-900 dark:text-slate-50 font-bold -ml-6">lpha en minuscule</h1>
        </div>

        <div className="flex flex-row justify-center">

          <article className="flex flex-row justify-between w-full h-full text-justify text-slate-500 bg-slate-100/90 dark:text-slate-300 dark:bg-slate-700/70 rounded-tl rounded-bl shadow-box mx-10">
            
            <div className="w-4/5 h-auto flex flex-col justify-between p-4">
              
              <p className="indent-4">
                <span className={`text-5xl text-slate-500 dark:text-slate-300 ${lavishlyFont.className}`}>
                  B
                </span>ienvenue sur le site de notre maison d&apos;&apos;édition. Mon ambition est de rassembler une 
                variété d&apos;arts que je vais mettre en œuvre à partir de maintenant. Vous y trouverez 
                des photographies ainsi que des peintures qui accompagneront les livres que je prévois 
                de publier. C&apos;est un défi passionnant que je me lance, et je suis déterminé à explorer 
                ce site Internet tout en me laissant guider par mes inspirations. Je reste ouvert à 
                toute idée lumineuse qui pourrait éclairer mon chemin.
              </p>
              <p className="indent-4 ">
                <span className={`text-5xl text-slate-500 dark:text-slate-300 ${lavishlyFont.className}`}>
                  C
                </span>e site est celui d&apos;une maison d&apos;édition, mais il va bien au-delà. C&apos;est un véritable 
                espace de création que vous pouvez explorer en feuilletant les différentes pages de ce 
                site. Il s&apos;agit à la fois d&apos;une maison d&apos;édition et d&apos;un lieu de découvertes. Il est 
                vrai qu&apos;au départ, il pourra sembler vide, mais les contenus s&apos;enrichiront progressivement.
              </p>
              <p className="indent-4 ">
                <span className={`text-5xl text-slate-500 dark:text-slate-300 ${lavishlyFont.className}`}>
                  D
                </span>évelopper ce site a été un immense plaisir 
                et c&apos;est ainsi que les choses prennent sens et deviennent réalité. 
                Je suis heureux d&apos;avoir été capable de &apos;créer&apos; ce site Internet, de l&apos;imaginer entièrement. 
                Ainsi, je souhaite qu&apos;il te plaise également et que tu y reviendras de temps à autres, car 
                j&apos;y porterai de nouveaux contenus.
              </p>
              <p className={`text-3xl text-slate-800 dark:text-slate-300 mt-4 mb-1 ${lavishlyFont.className}`}>
                Alors bon voyage à toi !
              </p>
            </div>
          
            <div className="w-1/5 flex items-start border border-slate-900 rounded-tr rounded-br shadow-box">
              <Image 
                src={spiralStairs} 
                alt="img spiral stairs" 
                className="w-full h-full object-cover" 
              />
            </div>

          </article>

        </div>

      </main>

    </div>
  );
}
