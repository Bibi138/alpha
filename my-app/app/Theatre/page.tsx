import type { Metadata } from "next";
import { Lavishly_Yours } from 'next/font/google';

const lavishlyFont = Lavishly_Yours({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
    title: "Theatre",
    description: "access accepted"
};

const Theatre = (): JSX.Element => {
    return (
        <div className="w-full min-h-screen">
            <h1 className={`text-5xl text-slate-500 pt-28 pl-4 ${lavishlyFont.className}`}>Théâtre</h1>

            <main className="flex flex-col items-center justify-content w-full h-screen">
                {/* <h3 className="text-5xl font-bold text-slate-500 bg-slate-50 m-auto mt-[200px]">! En maintenance !</h3> */}
            
                <div className="text-slate-500 bg-slate-100/90 dark:text-slate-300 dark:bg-slate-700/70 m-10 px-4 py-2 rounded shadow-box">
                    <p className="text-justify my-2">
                        C&apos;est assez drôle, car je ne me croyais aucunement capable d&apos;être l&apos;auteur d&apos;une pièce de théâtre. 
                        Je pensais ne pas avoir d&apos;histoires à transmettre. Quelle erreur! Le début d&apos;une nouvelle chose est 
                        difficile, soit. Mais, finalement, une fois que l&apos;on débute malgré toutes nos peurs,les difficultés 
                        s&apos;éloignent d&apos;elles-mêmes.
                    </p>

                    <p className="text-justify my-2">
                        En outre, j&apos;ai pu grâce à ma mère rencontrer une jeune comédienne dont j&apos;ai vu l&apos;une de ses pièces 
                        et qui m&apos;a donné envie d&apos;en écrire une, puis de la faire jouer ou de jouer celle-ci, peu importe. 
                        L&apos;essentiel n&apos;est pas dans le comédien, mais dans l&apos;histoire qui est racontée. Trop souvent, il y a 
                        des amalgames qui sont faits. C&apos;est un autre sujet cependant, le but que je cherche est de réussir à 
                        se détacher du comédien. Ce n&apos;est pas la pièce qui sert le comédien, mais bel et bien l&apos;inverse. 
                    </p>

                    <p className="text-justify my-2">
                        L&apos;improvisation théâtrale a été la porte d&apos;entrée de ce monde théâtral et il est en évolution constante. 
                        Je te parlais d&apos;une jeune comédienne précédemment et c&apos;est elle à qui j&apos;ai demandé de l&apos;aide. Ce qui est 
                        positif est que cette dernière aura forcément d&apos;autres idées et cela permet de créer une histoire différente 
                        et cela ne risque pas de trop coller au livre, à l&apos;instar du film qui s&apos;en détache à mesure de son écriture.
                    </p>
                </div>           
            
            </main>
        
        </div>
    )
}
export default Theatre;