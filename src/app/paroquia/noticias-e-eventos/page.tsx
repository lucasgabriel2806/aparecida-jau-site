import { MiniCard } from '@/components/minicard';

import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Aparecida Jaú | Noticias e Eventos'
}

export default function NoticiasEventos() {

  return (

    <>
      
      {/* Notícias e Eventos */}
      <section className='px-[8.5vw] py-[150px]'>

        <h2 className='text-3xl font-bold uppercase mb-8'>Notícias e Eventos</h2>

        <div 
          className='
          flex flex-wrap justify-between gap-10
          
          max-md:justify-center'
        >

          <MiniCard
            img={'1MaZA1Kw5XDNbqXoY8THz_7w03l1DVAdo'}
            title='Arraia da Mãe Aparecida'
            desc='Inserir desc'
            alt={''}
            urlHref={'noticias-e-eventos/2025/junho/arraia-mae-aparecida'}
          />

          <MiniCard
            img={'1QGhCue5O9KBQyPlLb_ns3_DvfC_79Mlw'}
            title='Jubileu de Prata'
            desc='Descrição'
            alt={'teste'}
            urlHref={'noticias-e-eventos/2025/julho/jubileu-de-prata'}
          />

          <MiniCard
            img={'1Cypbs3BUAS3fGzM5BgVkipxMdHIusB_1'}
            title='Carreata de São Cristovão'
            desc='Inserir desc'
            alt={''}
            urlHref={'noticias-e-eventos/2025/agosto/carreata-sao-cristovao'}
          />

        </div>

      </section>

    </>


  )

}