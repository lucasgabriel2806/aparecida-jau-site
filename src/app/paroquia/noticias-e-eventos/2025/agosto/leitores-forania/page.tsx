import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Aparecida Jaú | Encontro de Leitores da Forania'
}

export default function LeitoresForania() {

  return (

    <>

      <div 
        className='
        w-[50%] mx-auto mb-30
        
        max-lg:w-auto max-lg:p-[30px]'
      >

        <h1 className='text-2xl font-bold uppercase mt-[50px] mb-[10px]'>PARÓQUIA RECEBE 1º ENCONTRO DE LEITORES DA FORANIA</h1>

        <Image 
          src='https://drive.google.com/uc?export=view&id=16-6pFUfZ19-Gy5zV7PTBP7Ka7FAMzgmi' 
          width={680}
          height={450}
          style={{width: '100%', height: 'auto'}}
          className='mx-auto rounded-2xl my-[60px]' 
          alt=''
        />

        <p className='text-justify mb-[30px]'>
          A Paróquia Nossa Senhora Aparecida sediou, neste sábado, o 1º Encontro dos Leitores da Forania Nossa Senhora do Patrocínio, mais um evento diocesano.
          As atividades tiveram início às 14h, com uma fala de abertura do Pe. André Elias Pires, seguida pela saudação do nosso pároco, Pe. Celso Luiz Buscariolo, que acolheu todos os participantes.
        </p>

        <p className='text-justify mb-[30px]'>
          Após, houve a entrada do Círio Pascal e do Evangeliário, ambos trazidos por participantes do evento. 
          Nosso bispo diocesano, Dom Francisco Carlos da Silva, enviou uma mensagem em vídeo com palavras de incentivo: “Não deve ser uma simples leitura, mas uma proclamação da Palavra de Deus”, destacou.
        </p>

        <Image 
          src='https://drive.google.com/uc?export=view&id=1DxIaXojBAbgEUUuYMyfLM1uoRROusG8L' 
          width={680}
          height={450}
          style={{width: '100%', height: 'auto'}}
          className='mx-auto rounded-2xl my-[60px]' 
          alt=''
        />

        <p className='text-justify mb-[30px]'>
          Na sequência, Pe. Thiago Palialogo conduziu um momento de formação com o tema “O Leitor e a Vida Ministerial”, abordando aspectos como os livros litúrgicos, os anos litúrgicos e a importância da leitura diária da Bíblia, reforçando que “a Palavra que proclamamos não pode cair em solo seco; ela deve produzir frutos em nós. É a voz do próprio Cristo”, afirmou.
        </p>

        <p className='text-justify mb-[30px]'>
          A formação também contou com a colaboração de Regina Elaine Grizzo Bortolucci, que apresentou técnicas vocais e realizou exercícios práticos com os participantes. Todos tiveram a oportunidade de se preparar com os diversos exemplos, exercícios e situações apresentadas.
          A Pastoral da Acolhida de nossa comunidade também participou preparando uma dinâmica em que um entre as centenas de presentes fosse presenteado com uma imagem de Nossa Senhora Aparecida. 
        </p>

        <Image 
          src='https://drive.google.com/uc?export=view&id=1Ap39K8e3kKCwMr6LmFRaljNusT4LdJm0' 
          width={680}
          height={450}
          style={{width: '100%', height: 'auto'}}
          className='mx-auto rounded-2xl my-[60px]' 
          alt=''
        />

        <p className='text-justify mb-[30px]'>
          Para confraternização de todos, houve um lanche comunitário no salão de festas da Paróquia com os pratos que todos já haviam levado.
          O evento foi marcado por momentos de partilha, formação e espiritualidade, fortalecendo ainda mais o ministério dos leitores em nossa forania.
        </p>

        <p className=''><em>Fotos: Pastoral da Comunicação - Paróquia Nossa Senhora Aparecida - Marcelo Cabral e Douglas Willian</em></p>

      </div>

    </>

  )

}