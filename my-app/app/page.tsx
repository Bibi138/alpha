import Image from "next/image";
import imgAlphaLogo from "/public/alpha_letter.png";

export default function Home() {
  return (
    <div className="absolute -z-20 w-full min-h-screen text-slate-900 bg-slate-50">

      <div className="fixed -z-10 flex flex-col items-center justify-center w-full h-full">
        <Image 
          src={imgAlphaLogo} 
          width={626} height={626} 
          alt="no img alpha" 
          className="w-[700px] h-[700px] opacity-50"
        />
      </div>

      <main>
        
        <div className="relative flex flex-row items-center justify-center w-full pt-20">
          <Image 
            src={imgAlphaLogo} 
            width={626} height={626} 
            alt="no img alpha" 
            className="w-[100px] h-[100px]" 
          />
          <h1 className="text-xl font-bold -ml-6">lpha en minuscule</h1>
        </div>

          <article className="border text-justify bg-slate-200 rounded shadow-box mx-10 mb-10 p-4">
            <p className="indent-4 mb-2">
                Bienvenue sur le site de notre maison d'édition. Mon ambition est de rassembler une 
                variété d'arts que je vais mettre en œuvre à partir de maintenant. Vous y trouverez 
                des photographies ainsi que des peintures qui accompagneront les livres que je prévois 
                de publier. C'est un défi passionnant que je me lance, et je suis déterminé à explorer 
                ce site Internet tout en me laissant guider par mes inspirations. Je reste ouvert à 
                toute idée lumineuse qui pourrait éclairer mon chemin.
            </p>
            <p className="indent-4 mb-2">
                Ce site est celui d'une maison d'édition, mais il va bien au-delà. C'est un véritable 
                espace de création que vous pouvez explorer en feuilletant les différentes pages de ce 
                site. Il s'agit à la fois d'une maison d'édition et d'un lieu de découvertes. Il est 
                vrai qu'au départ, il pourra sembler vide, mais les contenus s'enrichiront progressivement.
            </p>
            <p className="indent-4 mb-2">
                C'est avec un plaisir immense que les choses prennent sens et deviennent réalité. 
                Je suis heureux d'avoir été capable de 'créer' ce site Internet, de l'imaginer entièrement. 
                Ainsi, je souhaite qu'il te plaise également et que tu y reviendras de temps à autres, car 
                j'y porterai de nouveaux contenus. 
            </p>
            <p>
              Alors bon voyage à toi!
            </p>
          </article>

          <div className="my-10">
            <p>Image</p>
          </div>

          <div className="my-10">
            <h3>text simulation 1</h3>
            <p>text simulation 1</p>
          </div>

          <div className="my-10">
            <h3>text simulation 2</h3>
            <p>text simulation 2</p>
          </div>

          <div className="my-10">
            <h3>text simulation 3</h3>
            <p>text simulation 3</p>
          </div>
        </main>

    </div>
  );
}
