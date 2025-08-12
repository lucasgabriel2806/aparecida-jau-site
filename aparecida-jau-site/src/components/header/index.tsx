import Link from 'next/link';

import Image from 'next/image';

export function Header() {

    return(

        <header className="flex sticky top-0 bg-[#fff] px-2 py-4 border-b-2 border-black">

            <div className="flex items-center justify-between w-full mx-auto max-w-7xl">

                <div>
                    <Link href='/'>

                        {/* Consertar logo do header com margin extra */}
                        <Image 
                            className='m-0'
                            src='/img/logo/aparecida-no-bg.png'
                            width={270}
                            height={78}
                            alt='logo'
                        />

                    </Link>
                </div>

                <nav>

                    <ul className="flex items-center justify-center gap-10">

                        <li className='font-bold uppercase'>
                            <Link href='/'>
                                Início
                            </Link>
                        </li>

                        <li className='font-bold uppercase'>
                            <Link href='/paroquia/historia'>
                                Paróquia
                            </Link>
                        </li>

                        <li className='font-bold uppercase'>
                            <Link href='/boletim'>
                                Boletim
                            </Link>
                        </li>

                        <li className='font-bold uppercase'>
                            <Link href='/contato'>
                                Contato
                            </Link>
                        </li>

                    </ul>
                
                </nav>
                
            </div>

        </header>

    )

}