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

        <BoletimCard />

        <h2>2024</h2>

        <h2>2025</h2>

    </main>

  )

}