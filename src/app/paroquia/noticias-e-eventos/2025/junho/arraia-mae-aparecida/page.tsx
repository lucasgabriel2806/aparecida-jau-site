import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Aparecida Jaú | Arraia da Mãe Aparecida'
}

export default function ArraiaAparecida() {

  return (

    <>

      <div 
        className='
        w-[50%] mx-auto mb-30
        
        max-lg:w-auto max-lg:p-[30px]'
      >

        <h1 className='text-2xl font-bold uppercase mt-[50px] mb-[10px]'>O ARRAIÁ DA MÃE APARECIDA FOI DEMAIS ! 🥳🤩</h1>

        <Image 
          src='https://drive.google.com/uc?export=view&id=1MaZA1Kw5XDNbqXoY8THz_7w03l1DVAdo' 
          width={680}
          height={450}
          style={{width: '100%', height: 'auto'}}
          className='mx-auto rounded-2xl my-[60px]' 
          alt='' 
        />

        <p className='text-justify mb-[30px]'>
          O nosso Arraiá da Mãe Aparecida foi um sucesso e teve grande participação de nossa comunidade. Nos dias 19 e 20 de junho a Paróquia realizou a sua festa junina com diversas barracas típicas, com doces e comidas tradicionais com muita alegria e diversão.
        </p>

        <p className='text-justify mb-[30px]'>
          Nossa festa contou com a animação da Banda Jovem Guarda na sexta e de Ricardo Basso ontem que garantiram boas músicas e abrilhantaram ainda mais a nossa festa.
        </p>
        
        <Image 
          src='https://drive.google.com/uc?export=view&id=1hFgeqJiqFbjB14sCgAB42SiP-6qug_RD' 
          width={680}
          height={450}
          style={{width: '100%', height: 'auto'}}
          className='mx-auto rounded-2xl my-[60px]' 
          alt='' 
        />

        <p className='text-justify mb-[30px]'>
          As crianças puderam se divertir com os brinquedos que foram instalados do lado de fora da Paróquia com ingressos a preços populares.
        </p>

        <p className='text-justify mb-[30px]'>
          A Paróquia Nossa Senhora Aparecida, por meio do seu pároco Pe. Celso Luiz Buscariolo, agradece a presença de todos e a participação e empenho de nossa comunidade para realizar mais esta festa em nossa Paróquia!
        </p>

      </div>

    </>

  )

}