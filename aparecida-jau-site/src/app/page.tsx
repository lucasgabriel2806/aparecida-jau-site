import { MiniCard } from '@/components/minicard';

import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aparecida Jaú | Home'
}

export default function Home() {

  return(

    <>

      <section
        className='h-[calc(100vh_-_87px)] bg-cover bg-center relative 
        flex items-center justify-center 
        mb-20'
        style={{
          backgroundImage: "url('/img/inicio/igreja_atual.jpeg')"
        }}
      >

        <div className='text-white text-center'>

          <h1 className='text-4xl md:text-6xl font-bold uppercase'>
            Paróquia Nossa Senhora Aparecida
          </h1>

          {/* <div className='mt-4 w-32 mx-auto border-t border-white'></div>
          <div className='text-2xl mt-2'>★</div>
          <div className='mt-4 w-32 mx-auto border-t border-white'></div> */}

        </div>

      </section>

      {/* Notícias e Eventos */}
      <h2 className='font-bold uppercase text-3xl'>Notícias e Eventos</h2>

      <div className='flex mb-20'>

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
          alt={'teste'}
        />

      </div>

      {/* Sobre o Pároco */}
      <section className='bg-[#2C3E50] p-28'>

        <h2 className='font-bold uppercase text-3xl text-[#fff] text-center mb-10'>Sobre o Pároco</h2>

        <div className='flex flex-col justify-around gap-4 md:flex-row'>

            <Image 
              className='rounded-2xl'
              src={'/img/inicio/sobre-paroco.jpg'}
              width={400}
              height={400}
              alt={''}
            />

            <div className='w-[630px] p-20 text-white text-[20px]'>

              <p className='mb-5'>
                Padre Celso Buscariollo, atual pároco da Paróquia Nossa Senhora Aparecida. Natural da cidade de Jaú, traz em sua história de vida o amor pela Igreja e a dedicação ao serviço pastoral.
              </p>

              <p>
                Homem de fé e simplicidade, Padre Celso é reconhecido por sua palavra serena, suas homilias profundas e seu zelo pelo bem espiritual de seus paroquianos. Sob sua liderança, a Paróquia Nossa Senhora Aparecida segue sendo um espaço de evangelização, acolhimento e fraternidade.
              </p>

            </div>

        </div>

      </section>

    </>

  )

}