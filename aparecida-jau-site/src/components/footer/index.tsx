import { FaYoutube, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

import Link from 'next/link';

export function Footer() {

    return(

        <footer>

            <div>

                <div>
                    <h2>Localização</h2>
                    <p>R. Vinte e Quatro de Maio Vila Nova Jau</p>
                </div>

                <div>
                    <h2>Redes sociais</h2>
                    <div>
                        <FaYoutube />
                        <FaFacebookF />
                        <FaInstagram />
                        <FaWhatsapp />
                    </div>
                </div>

                <div>

                    <h2>Páginas</h2>
                    
                    <Link href="/">
                        Início
                    </Link>

                    <Link href="paroquia/historia">
                        Paróquia
                    </Link>

                    <Link href="boletim">
                        Boletim Informativo
                    </Link>

                </div>

            </div>

            <div></div>

        </footer>

    )

}