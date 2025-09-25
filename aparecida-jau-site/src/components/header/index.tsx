"use client";

import { FaAngleDown, FaBars } from "react-icons/fa";

import './style.css';

import Link from 'next/link';

import Image from 'next/image';

export function Header() {

    return(

        <>

            {/* Adicionar no futuro: sticky top-0 z-[9999] */}
            <header className="flex bg-[#fff] px-2 py-4 border-b-2 border-black">

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

                    <nav className=''>

                        <div 
                            className="
                            hidden mr-6
                            
                            max-md:block"

                            onClick={() => {
                                document.getElementById('nav-links-mobile')?.classList.toggle('hidden');
                            }}
                        >
                            <FaBars size={30} />
                        </div>

                        <ul 
                            className="
                            flex items-center justify-center gap-10

                            max-md:hidden
                        ">

                            <li className='font-bold uppercase'>
                                <Link href='/'>
                                    Início
                                </Link>
                            </li>

                            {/* dropdown */}
                            <li className='dropdown font-bold uppercase'>

                                {/* dropbtn */}
                                <Link 
                                    className="dropbtn flex items-center"
                                    href='/paroquia/historia'>
                                    Paróquia
                                    <FaAngleDown />
                                </Link>

                                {/* dropdown-content */}
                                <div className="dropdown-content">
                                    <Link className="block p-2" href="/paroquia/historia">
                                        História
                                    </Link>
                                    <Link className="block p-2" href="/paroquia/noticias-e-eventos">
                                        Notícias e Eventos
                                    </Link>
                                </div>
                                
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

            {/* Links Mobile */}
            <ul 
                id="nav-links-mobile"
                className="hidden w-full h-screen bg-white absolute z-[999] border-b-2 border-black">

                <li className='font-bold uppercase p-5'>
                    <Link href='/'>
                        Início
                    </Link>
                </li>

                {/* dropdown */}
                <li className='dropdown font-bold uppercase'>

                    {/* dropbtn */}
                    <Link 
                        className="flex items-center p-5"
                        href='/paroquia/historia'
                        onClick={() => {
                            document.getElementById('dropdown-content')?.classList.toggle('hidden')
                        }}>
                        Paróquia
                        <FaAngleDown />
                    </Link>

                    {/* dropdown-content */}
                    <div className="pl-10" id='dropdown-content'>
                        <Link className="block p-3" href="/paroquia/historia">
                            História
                        </Link>
                        <Link className="block p-3" href="/paroquia/noticias-e-eventos">
                            Noticias e Eventos
                        </Link>
                    </div>
                    
                </li>

                <li className='font-bold uppercase p-5'>
                    <Link href='/boletim'>
                        Boletim
                    </Link>
                </li>

                <li className='font-bold uppercase p-5'>
                    <Link href='/contato'>
                        Contato
                    </Link>
                </li>

            </ul>

        </>

    )

}