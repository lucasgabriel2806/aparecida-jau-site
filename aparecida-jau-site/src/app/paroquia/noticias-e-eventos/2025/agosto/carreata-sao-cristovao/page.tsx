import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Aparecida Jaú | Carreata de São Cristovão'
}

export default function CarreataSaoCristovao() {

  return (

    <>

      <div 
        className='
        w-[50%] mx-auto mb-30
        
        max-lg:w-auto max-lg:p-[30px]'
      >

        <h1 className='text-2xl font-bold uppercase mt-[50px] mb-[10px]'>CARREATA DE SÃO CRISTÓVÃO E BÊNÇÃO DE VEÍCULOS REÚNE DEZENAS DE CARROS</h1>

        <Image 
          src='https://drive.google.com/uc?export=view&id=1Cypbs3BUAS3fGzM5BgVkipxMdHIusB_1' 
          width={680}
          height={450}
          style={{width: '100%', height: 'auto'}}
          className='mx-auto rounded-2xl my-[60px]' 
          alt=''
        />

        <p className='text-justify mb-[30px]'>
          A Paróquia Nossa Senhora Aparecida realizou no domingo, 3 de agosto, a Carreata em louvor a São Cristóvão seguida dos carros que participaram da movimentação. 
        </p>

        <p className='text-justify mb-[30px]'>
          Toda a programação começou às 8h com a Santa Missa presidida pelo nosso pároco Pe. Celso Luiz Buscariolo e depois, em carreata, os carros percorreram as ruas da cidade com a imagem de São Cristóvão a frente. 
        </p>

        <p className='text-justify mb-[30px]'>
          Depois do retorno à igreja, todos os carros e motoristas foram aspergidos e receberam a bênção do Pe. Celso.
        </p>

      </div>

    </>

  )

}