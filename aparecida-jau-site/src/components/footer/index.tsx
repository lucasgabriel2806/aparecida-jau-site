import { FaYoutube, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

import Link from 'next/link';

export function Footer() {

    return(

        <footer>

            <div className="flex justify-evenly flex-wrap bg-[#2C3E50] text-white">

                <div className="border-2 border-black">
                    <h2>Localização</h2>
                    <address>R. Vinte e Quatro de Maio Vila Nova Jau</address>
                </div>

                <div className="border-2 border-black">
                    <h2>Redes sociais</h2>
                    <div>
                        <FaYoutube />
                        <FaFacebookF />
                        <FaInstagram />
                        <FaWhatsapp />
                    </div>
                </div>

                <div className="border-2 border-black">

                    <h2>Páginas</h2>
                    
                    <nav>
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

            <div>
                <small>&copy;2025 - Paróquia Nossa Senhora Aparecida</small>
            </div>

        </footer>

    )

}