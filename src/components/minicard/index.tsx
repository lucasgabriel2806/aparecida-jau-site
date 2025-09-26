import Image from "next/image";
import Link from "next/link";

// Componente MiniCard
export function MiniCard({ img, title, desc, alt, urlHref }) {

    return (

        <>

            <Link href={`${urlHref}`}>
        
                {/* Card */}
                <div className='w-[288px] h-[318px] p-[10px] border-2 border-gray-500 rounded-xl'>

                    {/* Imagem */}
                    <div>
                        <Image 
                        className='w-[260px] h-[180px] mx-auto rounded-t-xl pb-[10px]'
                        src={`https://drive.google.com/uc?export=view&id=${img}`}
                        width={260}
                        height={180}
                        alt={alt}  
                        />

                    </div>

                    {/* Texto */}
                    <div>

                        <h3 className="text-xl font-bold">{title}</h3>

                        <p>{desc}</p>

                    </div>

                </div>

            </Link>

        </>

    )

}