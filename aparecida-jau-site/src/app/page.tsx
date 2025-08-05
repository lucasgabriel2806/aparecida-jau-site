import { MiniCard } from "@/components/minicard";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Aparecida Jaú | Home'
}

export default function Home() {

  return(

    <>

      <section
        className='h-[calc(100vh_-_87px)] bg-cover bg-center relative flex items-center justify-center'
        style={{
          backgroundImage: "url('/img/inicio/igreja_atual.jpeg')"
        }}
      >

        <div className="text-white text-center">

          <h1 className="text-4xl md:text-6xl font-bold uppercase">
            Paróquia Nossa Senhora Aparecida
          </h1>

          <div className="mt-4 w-32 mx-auto border-t border-white"></div>
          <div className="text-2xl mt-2">★</div>
          <div className="mt-4 w-32 mx-auto border-t border-white"></div>

        </div>

      </section>

      <h2 className="font-bold uppercase">Notícias e Eventos</h2>

      <MiniCard 
        img={'/img/inicio/cards/quarta-cinzas-card.jpg'} 
        title='Quarta-feira de cinzas' 
        desc='Início da Quaresma' 
        alt={'teste'} 
      />

      <MiniCard 
        img={'/img/inicio/cards/procissao-domingo-pascoa-card.jpg'} 
        title='Domingo de Páscoa' 
        desc='Procissão às 06:00h' 
        alt={'teste'}/>

    </>

  )

}