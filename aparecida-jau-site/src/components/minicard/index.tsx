import Image from "next/image";

export function MiniCard({ img, title, desc, alt }) {

    return (

        <>
        
            {/* Card */}
            <div className='w-[288px] h-[318px] p-3 border-2 border-gray-500 rounded-xl'>

                {/* Imagem */}
                <div className=''>

                    <Image 
                      className='mx-auto rounded-t-xl pb-3'
                      src={img}
                      width={260}
                      height={180}
                      alt={alt}  
                    />

                </div>

                {/* Texto */}
                <div>

                    <h3 className="font-bold">{title}</h3>

                    <p>{desc}</p>

                </div>

            </div>

        </>

    )

}