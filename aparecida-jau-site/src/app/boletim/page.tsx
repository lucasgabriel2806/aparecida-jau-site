import BoletimCard from '@/components/boletimcard'; 

import { Metadata } from 'next';

import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Aparecida Jaú | Boletim'
}

export default function Boletim() {

  return (

    <main className='mt-[100px] mb-[100px]'>

        <h1 className='text-4xl font-bold uppercase'>Boletim Informativo</h1>

        <h2>2023</h2>

        <div className='flex flex-wrap justify-center gap-4 mt-4'>
          <BoletimCard imgUrl={'/img/boletim/2023/fevereiro.jpg'} title={'Fevereiro'} />
          <BoletimCard imgUrl={'/img/boletim/2023/marco.jpg'} title={'Março'} />
          <BoletimCard imgUrl={'/img/boletim/2023/abril.jpg'} title={'Abril'} />
          <BoletimCard imgUrl={'/img/boletim/2023/fevereiro.jpg'} title={'Fevereiro'} />
          <BoletimCard imgUrl={'/img/boletim/2023/marco.jpg'} title={'Março'} />
          <BoletimCard imgUrl={'/img/boletim/2023/abril.jpg'} title={'Abril'} />
          <BoletimCard imgUrl={'/img/boletim/2023/fevereiro.jpg'} title={'Fevereiro'} />
          <BoletimCard imgUrl={'/img/boletim/2023/marco.jpg'} title={'Março'} />
          <BoletimCard imgUrl={'/img/boletim/2023/abril.jpg'} title={'Abril'} />
        </div>

        <h2>2024</h2>

        <h2>2025</h2>

    </main>

  )

}