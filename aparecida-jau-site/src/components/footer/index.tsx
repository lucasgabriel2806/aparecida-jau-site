import { FaYoutube, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

import Link from 'next/link';

export function Footer() {

    return(

        <footer>

            <div className="flex justify-evenly flex-col md:flex-row gap-[50px] p-[50px] bg-[#2C3E50] text-white">

                {/* LOCALIZAÇÃO */}
                <div className="flex flex-col justify-center items-center border-2 border-black">

                    <h2 className="text-[20px] font-bold uppercase text-center mb-[20px]">Localização</h2>

                    <address>R. Vinte e Quatro de Maio Vila Nova Jau</address>

                </div>

                {/* REDES SOCIAIS */}
                <div className="border-2 border-black">

                    <h2 className="text-[20px] font-bold uppercase text-center mb-[20px]">Redes sociais</h2>

                    <div className="flex justify-evenly md:justify-between">

                        <div className="border-2 p-[15px] rounded-[50%]">
                            <FaYoutube size='25' />
                        </div>

                        <div className="border-2 p-[15px] rounded-[50%]">
                            <FaFacebookF size='25' />
                        </div>

                        <div className="border-2 p-[15px] rounded-[50%]">
                            <FaInstagram size='25' />
                        </div>

                        <div className="border-2 p-[15px] rounded-[50%]">
                            <FaWhatsapp size='25' />
                        </div>

                    </div>

                </div>

                {/* PÁGINAS */}
                <div className="border-2 border-black">

                    <h2 className="text-[20px] font-bold uppercase text-center mb-[20px]">Páginas</h2>
                    
                    <nav className="flex flex-col text-center">

                        <Link href="/">
                            Início
                        </Link>

                        <Link href="paroquia/historia">
                            Paróquia
                        </Link>

                        <Link href="boletim">
                            Boletim Informativo
                        </Link>

                        <Link href="contato">
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