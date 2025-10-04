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
          <BoletimCard 
            imgUrl={'1RH6p24OsOUDQXE5XZogiQMTe518yP3u8'} 
            urlHref={'https://drive.google.com/file/d/1adeixvR2hSORkfCjNrILuWsSc1QjK7O5/view?usp=sharing'}
            title={'Fevereiro'} 
          />
          <BoletimCard 
            imgUrl={'1Jmv75Gj_eBbHbaCcSwo-UuSvyUkCN8ZJ'} 
            urlHref={'https://drive.google.com/file/d/1FzlmXQtplnGzQKYX-OXECjQ6-QPUdf1W/view?usp=sharing'}
            title={'Março'} 
          />
          <BoletimCard 
            imgUrl={'1EVDLzo7k821kCFAGeDsbGhVZ2cOFhaze'} 
            urlHref={'https://drive.google.com/file/d/1l-eM8Rhl-SCR1kthA60ImmlC6vhzJnS7/view?usp=sharing'}
            title={'Abril'} 
          />
          <BoletimCard 
            imgUrl={'1mEkfvYOIz53ykXjqZ7n6sPzKbUDp6xhn'} 
            urlHref={'https://drive.google.com/file/d/1evTj2A0smBsK_LI5C6QpA-dOu9QdLYPe/view?usp=sharing'}
            title={'Maio'} 
          />
          <BoletimCard 
            imgUrl={'1fmwZrLQCgmxEsJTyGdiCfCONeZrq2Avi'} 
            urlHref={'https://drive.google.com/file/d/1iyfmvDSYl7cxb5mlMC7CH9XIkwwFMnru/view?usp=sharing'}
            title={'Junho'} 
          />
          <BoletimCard 
            imgUrl={'1pJrTwfi39UU4aEWelLRTGvBytB8EIHbY'} 
            urlHref={'https://drive.google.com/file/d/13xeCEKYNKNGSN0M1bRbnhn68THGKsDvH/view?usp=sharing'}
            title={'Julho'} 
          />
          <BoletimCard 
            imgUrl={'1FCDP_3F8RYivbmtF2D3gUYKeLkN0s8vZ'} 
            urlHref={'https://drive.google.com/file/d/1AcunGUAM-0yQEYGU6bHLvybQnF1u-Gtq/view?usp=sharing'}
            title={'Agosto'} 
          />
          <BoletimCard 
            imgUrl={'12olfEXJ75-8QREuFsykfujNhL9heqLsD'} 
            urlHref={'https://drive.google.com/file/d/1DMois54z8egV-5gvpS6P8mMNPy-v1HeN/view?usp=sharing'}
            title={'Setembro'} 
          />
          <BoletimCard 
            imgUrl={'1j-w-u-hRnvX2TtEzXvN1kh4TmAeJuTII'} 
            urlHref={'https://drive.google.com/file/d/1bsHMchYj8fZD4lCdxAcKuss0Hp5HKQK3/view?usp=sharing'}
            title={'Outubro'} 
          />
          <BoletimCard 
            imgUrl={'1NP1gelbCW98zv25RrfoCjB5VHeSBzGUY'} 
            urlHref={'https://drive.google.com/file/d/1_A2wcVNGPGiIY2NDfSUpHMTM2kCm-gLa/view?usp=sharing'}
            title={'Novembro'} 
          />
          <BoletimCard 
            imgUrl={'1nbDYxpsRfqhosNLtH_f_ZZ4shgKBmtME'} 
            urlHref={'https://drive.google.com/file/d/1NNJXMNtvtENVctdbODdLf4PDOXDEq4rY/view?usp=sharing'}
            title={'Dezembro'} 
          />
        </div>

        {/* <h2 className='text-3xl font-bold'>2024</h2>

        <div 
          className='
          flex flex-wrap gap-13 mt-4 mb-20

          max-lg:justify-between max-lg:gap-18'
        >
          <BoletimCard 
            imgUrl={'10TGTNvf4T-iafRwZJ2Bpx6vN52usujtU'} title={'Janeiro'} />
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
        </div> */}

    </main>

  )

}