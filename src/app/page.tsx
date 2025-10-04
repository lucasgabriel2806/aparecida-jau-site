// Componentes
import { MiniCard } from '@/components/minicard';

import Image from 'next/image';
import { Metadata } from 'next';

// Metadado específico da página
export const metadata: Metadata = {
  title: 'Aparecida Jaú | Inicio'
}

// Componente Inicio
export default function Inicio() {

  return(

    <>

      {/* Imagem de fundo */}
      <section
        className='
        flex items-center justify-center 
        h-[calc(100vh_-_87px)] bg-cover bg-center relative'
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
            desc='19 e 20 / 06 / 2025'
            alt={''}
            urlHref={'paroquia/noticias-e-eventos/2025/junho/arraia-mae-aparecida'}
          />

          <MiniCard
            img={'1QGhCue5O9KBQyPlLb_ns3_DvfC_79Mlw'}
            title='Jubileu de Prata'
            desc='21 / 07 / 2025'
            alt={''}
            urlHref={'paroquia/noticias-e-eventos/2025/julho/jubileu-de-prata'}
          />

          <MiniCard
            img={'1Cypbs3BUAS3fGzM5BgVkipxMdHIusB_1'}
            title='Carreata de São Cristovão'
            desc='03 / 08 / 2025'
            alt={''}
            urlHref={'paroquia/noticias-e-eventos/2025/agosto/carreata-sao-cristovao'}
          />

          <MiniCard
            img={'16-6pFUfZ19-Gy5zV7PTBP7Ka7FAMzgmi'}
            title='Encontro dos Leitores da Forania'
            desc='23 / 08 / 2025'
            alt={''}
            urlHref={'paroquia/noticias-e-eventos/2025/agosto/leitores-forania'}
          />

        </div>

      </section>

      {/* Sobre o Pároco */}
      <section className='bg-[#2C3E50] px-[8.5vw] py-[150px]'>

        <h2 className='font-bold uppercase text-5xl text-[#fff] text-center mb-10'>Sobre o Pároco</h2>

        <div 
          className='
          flex flex-row gap-4 
        
          max-lg:flex-col max-lg:items-center'
        >

          <Image className='rounded-2xl'
            src={'/img/inicio/sobre-paroco.jpg'}
            width={400}
            height={400}
            style={{ objectFit: 'cover', maxHeight: '400px' }}
            alt={''}
          />

          <div 
            className='
            w-[800px] p-15 text-white text-[20px]
            
            max-lg:flex-col
            max-md:p-2 max-md:w-auto'
          >

            <p className='text-justify mb-[20px]'>
              Padre Celso Buscariollo, atual pároco da Paróquia Nossa Senhora Aparecida. Natural da cidade de Jaú, traz em sua história de vida o amor pela Igreja e a dedicação ao serviço pastoral.
            </p>

            <p className='text-justify'>
              Homem de fé e simplicidade, Padre Celso é reconhecido por sua palavra serena, suas homilias profundas e seu zelo pelo bem espiritual de seus paroquianos. Sob sua liderança, a Paróquia Nossa Senhora Aparecida segue sendo um espaço de evangelização, acolhimento e fraternidade.
            </p>

          </div>

        </div>

      </section>

      {/* Sobre a paróquia */}
      <section 
        className='
        p-28 mt-10 mb-10

        max-md:p-2'
      >

        <h2 
          className='
          font-bold uppercase text-5xl text-center mb-10
          
          max-md:w-[250px] max-md:mx-auto'
        >
          Sobre a Paróquia
        </h2>     

        <div 
          className='
          flex flex-row justify-evenly gap-4

          max-lg:flex-col max-lg:items-center
          '
        >

          <div 
            className='
            w-[800px] p-10 text-[20px]

            max-lg:w-auto
            '
          >

            <p className='text-justify mb-5'>
              A Paróquia Nossa Senhora Aparecida está situada na cidade de Jaú, interior de São Paulo. Criada com o objetivo de atender ao crescente número de católicos no bairro e arredores, a paróquia se tornou, ao longo dos anos, um espaço de oração, acolhimento e serviço.
            </p>

            <p className='text-justify'>
              Sob a proteção de Nossa Senhora Aparecida, padroeira do Brasil, a paróquia realiza diversas atividades pastorais, movimentos e serviços, voltados para a evangelização, a formação cristã e o auxílio aos mais necessitados. Suas celebrações litúrgicas são marcadas pela participação ativa da comunidade, que encontra ali um ambiente fraterno e espiritual.
            </p>

          </div>

          
          <Image
            className='rounded-2xl'
            src={'/img/inicio/sobre-paroquia.jpg'}
            width={400}
            height={400}
            style={{ objectFit: 'cover', maxHeight: '400px' }}
            alt={''}
          />
          

        </div>    

      </section>

    </>

  )

}