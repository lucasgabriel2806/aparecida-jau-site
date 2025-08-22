import BoletimCard from '@/components/boletimcard'; 

import { Metadata } from 'next';

import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Aparecida Jaú | Boletim'
}

export default function Boletim() {

  return (

    <main 
      className='
      flex flex-col
      w-[1200px] mx-auto mt-[100px] mb-[100px]
      
      max-lg:w-[600px] max-lg:mx-auto
      max-md:w-[300px]'
    >

        <h1 className='text-4xl font-bold uppercase mb-10'>Boletim Informativo</h1>

        <h2 className='text-3xl font-bold'>2023</h2>

        <div 
          className='
          flex flex-wrap gap-13 mt-4 mb-20
          
          max-lg:justify-between max-lg:gap-18'
        >
          <BoletimCard imgUrl={'/img/boletim/2023/fevereiro.jpg'} title={'Fevereiro'} />
          <BoletimCard imgUrl={'/img/boletim/2023/marco.jpg'} title={'Março'} />
          <BoletimCard imgUrl={'/img/boletim/2023/abril.jpg'} title={'Abril'} />
          <BoletimCard imgUrl={'/img/boletim/2023/maio.jpg'} title={'Maio'} />
          <BoletimCard imgUrl={'/img/boletim/2023/junho.jpg'} title={'Junho'} />
          <BoletimCard imgUrl={'/img/boletim/2023/julho.jpg'} title={'Julho'} />
          <BoletimCard imgUrl={'/img/boletim/2023/agosto.jpg'} title={'Agosto'} />
          <BoletimCard imgUrl={'/img/boletim/2023/setembro.jpg'} title={'Setembro'} />
          <BoletimCard imgUrl={'/img/boletim/2023/outubro.jpg'} title={'Outubro'} />
          <BoletimCard imgUrl={'/img/boletim/2023/novembro.jpg'} title={'Novembro'} />
          <BoletimCard imgUrl={'/img/boletim/2023/dezembro.jpg'} title={'Dezembro'} />
        </div>

        <h2 className='text-3xl font-bold'>2024</h2>

        <div 
          className='
          flex flex-wrap gap-13 mt-4 mb-20

          max-lg:justify-between max-lg:gap-18'
        >
          <BoletimCard imgUrl={'/img/boletim/2024/janeiro.jpg'} title={'Janeiro'} />
          <BoletimCard imgUrl={'/img/boletim/2024/fevereiro.jpg'} title={'Fevereiro'} />
          <BoletimCard imgUrl={'/img/boletim/2024/marco.jpg'} title={'Março'} />
          <BoletimCard imgUrl={'/img/boletim/2024/abril.jpg'} title={'Abril'} />
          <BoletimCard imgUrl={'/img/boletim/2024/maio.jpg'} title={'Maio'} />
          <BoletimCard imgUrl={'/img/boletim/2024/junho.jpg'} title={'Junho'} />
          <BoletimCard imgUrl={'/img/boletim/2024/julho.jpg'} title={'Julho'} />
          <BoletimCard imgUrl={'/img/boletim/2024/agosto.jpg'} title={'Agosto'} />
          <BoletimCard imgUrl={'/img/boletim/2024/setembro.jpg'} title={'Setembro'} />
          <BoletimCard imgUrl={'/img/boletim/2024/outubro.jpg'} title={'Outubro'} />
          <BoletimCard imgUrl={'/img/boletim/2024/novembro.jpg'} title={'Novembro'} />
          <BoletimCard imgUrl={'/img/boletim/2024/dezembro.jpg'} title={'Dezembro'} />
        </div>

        <h2 className='text-3xl font-bold'>2025</h2>

        <div 
          className='
          flex flex-wrap gap-13 mt-4 mb-20
          
          max-lg:justify-between max-lg:gap-18'
        >
          <BoletimCard imgUrl={'/img/boletim/2025/janeiro.jpg'} title={'Janeiro'} />
          <BoletimCard imgUrl={'/img/boletim/2025/fevereiro.jpg'} title={'Fevereiro'} />
          <BoletimCard imgUrl={'/img/boletim/2025/marco.jpg'} title={'Março'} />
          <BoletimCard imgUrl={'/img/boletim/2025/abril.jpg'} title={'Abril'} />
          <BoletimCard imgUrl={'/img/boletim/2025/maio.jpg'} title={'Maio'} />
          <BoletimCard imgUrl={'/img/boletim/2025/junho.jpg'} title={'Junho'} />
          <BoletimCard imgUrl={'/img/boletim/2025/julho.jpg'} title={'Julho'} />
          <BoletimCard imgUrl={'/img/boletim/2025/agosto.jpg'} title={'Agosto'} />
          <BoletimCard imgUrl={'/img/boletim/2025/setembro.jpg'} title={'Setembro'} />
          <BoletimCard imgUrl={'/img/boletim/2025/outubro.jpg'} title={'Outubro'} />
          <BoletimCard imgUrl={'/img/boletim/2025/novembro.jpg'} title={'Novembro'} />
          <BoletimCard imgUrl={'/img/boletim/2025/dezembro.jpg'} title={'Dezembro'} />
        </div>

    </main>

  )

}