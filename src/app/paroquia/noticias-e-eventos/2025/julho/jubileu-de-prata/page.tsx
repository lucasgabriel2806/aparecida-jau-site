import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Aparecida Jaú | Jubileu de Prata'
}

export default function JubileuDePrata() {

  return (

    <>

      <div 
        className='
        w-[50%] mx-auto mb-30
        
        max-lg:w-auto max-lg:p-[30px]'
      >

        <h1 className='text-2xl font-bold uppercase mt-[50px] mb-[10px]'>ABADIA DE SÃO NORBERTO CELEBRA JUBILEU DE PRATA; <br /> PE. CELSO REPRESENTA A DIOCESE DE JAÚ. </h1>

        <Image 
          src='https://drive.google.com/uc?export=view&id=1QGhCue5O9KBQyPlLb_ns3_DvfC_79Mlw' 
          width={680}
          height={450}
          style={{width: '100%', height: 'auto'}}
          className='mx-auto rounded-2xl my-[60px]' 
          alt=''
        />

        <p className='text-justify mb-[30px]'>
          Na noite de 21 de julho foi realizada a Celebração Solene de Ação de Graças pelos 25 anos da Abadia São Norberto.
        </p>

        <p className='text-justify mb-[30px]'>
          A celebração do Jubileu de Prata contou com a presença do Abade Geral da Ordem Premonstratense, Dom Jos Wouters, da comunidade local e de diversos sacerdotes.
        </p>

        <Image 
          src='https://drive.google.com/uc?export=view&id=1rSKZ_kOu78e1v3W4cT7t5IRZDzhEwm04' 
          width={680}
          height={450}
          style={{width: '100%', height: 'auto'}}
          className='mx-auto rounded-2xl my-[60px]' 
          alt=''
        />

        <p className='text-justify mb-[30px]'>
          Entre os presentes, o nosso pároco, Pe. Celso Luiz Buscariolo, que, na condição de vigário-geral da Diocese de Jaú, representou oficialmente a Diocese na celebração.
        </p>

        <p className=''><em>Fotos e informações: Abadia de São Norberto</em></p>

      </div>

    </>

  )

}