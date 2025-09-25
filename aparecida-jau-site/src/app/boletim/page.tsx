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
          <BoletimCard imgUrl={'1RH6p24OsOUDQXE5XZogiQMTe518yP3u8'} title={'Fevereiro'} />
          <BoletimCard imgUrl={'1Jmv75Gj_eBbHbaCcSwo-UuSvyUkCN8ZJ'} title={'Março'} />
          <BoletimCard imgUrl={'1EVDLzo7k821kCFAGeDsbGhVZ2cOFhaze'} title={'Abril'} />
          <BoletimCard imgUrl={'1mEkfvYOIz53ykXjqZ7n6sPzKbUDp6xhn'} title={'Maio'} />
          <BoletimCard imgUrl={'1fmwZrLQCgmxEsJTyGdiCfCONeZrq2Avi'} title={'Junho'} />
          <BoletimCard imgUrl={'1pJrTwfi39UU4aEWelLRTGvBytB8EIHbY'} title={'Julho'} />
          <BoletimCard imgUrl={'1FCDP_3F8RYivbmtF2D3gUYKeLkN0s8vZ'} title={'Agosto'} />
          <BoletimCard imgUrl={'12olfEXJ75-8QREuFsykfujNhL9heqLsD'} title={'Setembro'} />
          <BoletimCard imgUrl={'1j-w-u-hRnvX2TtEzXvN1kh4TmAeJuTII'} title={'Outubro'} />
          <BoletimCard imgUrl={'1NP1gelbCW98zv25RrfoCjB5VHeSBzGUY'} title={'Novembro'} />
          <BoletimCard imgUrl={'1nbDYxpsRfqhosNLtH_f_ZZ4shgKBmtME'} title={'Dezembro'} />
        </div>

        <h2 className='text-3xl font-bold'>2024</h2>

        <div 
          className='
          flex flex-wrap gap-13 mt-4 mb-20

          max-lg:justify-between max-lg:gap-18'
        >
          <BoletimCard imgUrl={'10TGTNvf4T-iafRwZJ2Bpx6vN52usujtU'} title={'Janeiro'} />
          <BoletimCard imgUrl={'1Zri8ot3wkNzeefaWNDgdAYPAXzLI5pkF'} title={'Fevereiro'} />
          <BoletimCard imgUrl={'1zan88BLLfxRddDOVooAh3JN3MBe0bq3i'} title={'Março'} />
          <BoletimCard imgUrl={''} title={'Abril'} />
          <BoletimCard imgUrl={'1fayfIKtwE5LsU0MZq5yMitKtzlzlobW1'} title={'Maio'} />
          <BoletimCard imgUrl={''} title={'Junho'} />
          <BoletimCard imgUrl={'1xf_9DXzTiQHOj8HQrjkBJqUgE3LsRHr9'} title={'Julho'} />
          <BoletimCard imgUrl={'1VGaTiUCZh9EV9VCik5YXrjL04dYr71Ay'} title={'Agosto'} />
          <BoletimCard imgUrl={'1y1xoqjeWJUZxP1RLPG7M3Pt3U5DXCSGS'} title={'Setembro'} />
          <BoletimCard imgUrl={'1EXeIYx52YznX-LkHjo5XLepgMjlcfxuW'} title={'Outubro'} />
          <BoletimCard imgUrl={'1QvSLS7i6tN3O3_j9c6lkyAGpEkiWTNon'} title={'Novembro'} />
          <BoletimCard imgUrl={'1MZ9OEiQoNJMOnJcWApKIAx1ImYDI2DXd'} title={'Dezembro'} />
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