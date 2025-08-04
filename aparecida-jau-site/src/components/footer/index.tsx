import Link from 'next/link';

export function Footer() {

    return(

        <footer className="absolute bottom-0 right-0 w-screen flex flex-col px-2 py-4 bg-[#2C3E50] text-white">

            <div className="flex items-center justify-between w-full mx-auto max-w-7xl">

                <div>
                    Logo
                </div>

                <nav>

                    <ul className="flex items-center justify-center gap-2">

                        <li>
                            <Link href='/'>
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link href='/paroquia/historia'>
                                Paróquia
                            </Link>
                        </li>

                        <li>
                            <Link href='/boletim'>
                                Boletim
                            </Link>
                        </li>

                        <li>
                            <Link href='/contato'>
                                Contato
                            </Link>
                        </li>

                    </ul>
                
                </nav>
                
            </div>

            <div className='bg-[#1A252F]'>
                <small>&copy;2025 - Paróquia Nossa Senhora Aparecida</small>
            </div>

        </footer>

    )

}