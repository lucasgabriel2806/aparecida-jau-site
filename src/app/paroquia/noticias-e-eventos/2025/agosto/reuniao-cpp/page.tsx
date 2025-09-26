import { Metadata } from 'next';
import Image from 'next/image';

// import ImageGallery from "react-image-gallery";
// // import stylesheet if you're not already using CSS @import
// import "react-image-gallery/styles/css/image-gallery.css";

export const metadata: Metadata = {
  title: 'Aparecida Jaú | Dom Francisco e Reunião do CPP'
}

export default function ReuniaoCpp() {

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (

    <>
      <div 
        className='
        w-[50%] mx-auto mb-30
        
        max-lg:w-auto max-lg:p-[30px]'
      >

        <h1 className='text-2xl font-bold uppercase mt-[50px] mb-[10px]'>MISSA COM DOM FRANCISCO E REUNIÃO DE COORDENADORES DO CPP ACONTECERAM EM NOSSA COMUNIDADE</h1>

        <p className='text-justify mb-[30px]'>Na noite do dia 28 de agosto, a Paróquia Nossa Senhora Aparecida sediou a Santa Missa presidida pelo bispo diocesano, Dom Francisco Carlos da Silva, com a presença do clero, incluindo nosso pároco Pe. Celso Luiz Buscariolo. </p>

        <Image 
          src='https://drive.google.com/uc?export=view&id=1c1zn1fYMhD3PPC8aMKeyZkwVTKVc6uv-'
          width={680} 
          height={450}
          className='mx-auto rounded-2xl my-[60px]' 
          alt='igreja antiga' 
        />

        <p className='text-justify mb-[30px]'>
        Após a celebração, foi realizada uma reunião com coordenadores e vice-coordenadores das comunidades que integram a Forania Nossa Senhora do Patrocínio.
        </p>

        <p className='text-justify mb-[30px]'>
        Este foi o terceiro encontro de coordenadores do CPP (Conselho Pastoral Paroquial) na Diocese. Os dois anteriores ocorreram em agosto, nas cidades de Itapuí e Ibitinga, reunindo membros das Foranias Nossa Senhora do Bom Conselho e Nossa Senhora das Dores.
        </p>

        <p className='text-justify mb-[30px]'>
        Em nota, a Diocese destacou que, “após a celebração, uma reunião significativa foi realizada com os coordenadores do CPP, abordando o tema vital da ‘Sinodalidade e Articulação Pastoral na Igreja Contemporânea’. Este assunto é fundamental para a Igreja, não só como uma metodologia, mas como uma verdadeira expressão da sua essência”. O encontro foi conduzido pelo Pe. Armando Rodolfo Valenzisi.
        </p>

        <p className='text-justify mb-[30px]'>
        A mensagem também reforça que “para dar vida a essa sinodalidade, propomos ações concretas, como promover a transparência na administração dos recursos da paróquia, fortalecer os Conselhos Paroquiais e criar ambientes seguros para todos. A centralidade da Palavra e dos Sacramentos, a opção pelos pobres e o cuidado com a criação são aspectos inegociáveis da nossa missão, como uma tenda: móvel, itinerante e sempre pronta a alcançar aqueles que ainda não conhecem o Evangelho”.
        </p>

        <p className='text-justify mb-[30px]'>
        O encontro foi encerrado com um momento de confraternização no salão de festas da paróquia, com a presença de Dom Francisco, do clero e dos participantes.
        </p>

        <p className='mt-[60px]'><em>Pascom - Paróquia Nossa Senhora Aparecida com informações de Diocese de Jaú</em></p>

        {/* <ImageGallery items={images} />; */}

      </div>

    </>

  )

}