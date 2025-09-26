"use client";

import { usePathname } from "next/navigation";

import { FaYoutube, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

import Link from 'next/link';

export function Footer() {

    const pathname = usePathname();

    if (pathname === "/not-found") return null;

    return(

        <footer className="">

            <div className="flex justify-evenly flex-col md:flex-row gap-[50px] p-[50px] bg-[#2C3E50] text-white">

                {/* LOCALIZAÇÃO */}
                <div className="flex flex-col items-center  border-black">

                    <h2 className="text-[20px] font-bold uppercase text-center mb-[20px]">Localização</h2>

                    <address className="text-center">R. Vinte e Quatro de Maio <br /> Vila Nova Jau</address>

                </div>

                {/* REDES SOCIAIS */}
                <div className=" border-black">

                    <h2 className="text-[20px] font-bold uppercase text-center mb-[20px]">Redes sociais</h2>

                    <div className="flex justify-evenly md:justify-between gap-3">

                        <Link href="https://www.youtube.com/@AparecidaJauSP" target="_blank">
                            <div className="block border-1 white p-[15px] rounded-[50%]">
                                <FaYoutube size='25' />                                
                            </div>
                        </Link>

                        <Link href="https://web.facebook.com/nsaparecidajahu" target="_blank">
                            <div className="block border-1 white p-[15px] rounded-[50%]">                            
                                <FaFacebookF size='25' />                            
                            </div>
                        </Link>

                        <Link href="https://www.instagram.com/aparecidajau/" target="_blank">
                            <div className="block border-1 white p-[15px] rounded-[50%]">        
                                <FaInstagram size='25' />
                            </div>
                        </Link>

                        <Link href="https://chat.whatsapp.com/EvxJksmUdIYDxzw5fUI99E" target="_blank">
                            <div className="block border-1 white p-[15px] rounded-[50%]">                            
                                <FaWhatsapp size='25' />                                
                            </div>
                        </Link>

                    </div>

                </div>

                {/* PÁGINAS */}
                <div className=" border-black">

                    <h2 className="text-[20px] font-bold uppercase text-center mb-[20px]">Páginas</h2>
                    
                    <nav className="flex flex-col text-center max-md:gap-y-5">

                        <Link href="/">
                            Início
                        </Link>

                        <Link href="/paroquia/historia">
                            Paróquia
                        </Link>

                        <Link href="/boletim">
                            Boletim Informativo
                        </Link>

                        <Link href="/contato">
                            Contato
                        </Link>

                    </nav>

                </div>

            </div>

            <div className="bg-[#1A252F] text-white text-center pt-[20px] pb-[20px]">
                <small>&copy;2025 - Paróquia Nossa Senhora Aparecida</small>
            </div>

        </footer>

    )

}