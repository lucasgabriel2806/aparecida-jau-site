import { Metadata } from 'next';

import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Aparecida Jaú | Contato'
}

export default function Contato() {

  return (

    <main 
        className='
        flex justify-evenly mt-[100px] mb-[100px]
        
        max-lg:flex-col max-lg:items-center
        '>

        {/* Left */}
        <div>

            <h1 className='text-4xl font-bold uppercase mb-[20px]'>Contato</h1>

            <form 
                className='
                    flex flex-col w-[500px]

                    max-md:w-[300px]' 
                action="https://formsubmit.co/aparecidajausite@gmail.com" 
                method="POST"
            >

                <label htmlFor="nome">Nome:</label>

                <input 
                    className='
                    border-1 border-black rounded-[5px] mb-[20px]
                    pl-[15px] pr-[15px] pt-[5px] pb-[5px]' 
                    type="text" 
                    id='nome'
                    name='nome'
                    placeholder='Digite seu nome'
                />

                <label htmlFor="email">Email:</label>

                <input 
                    className='
                    border-1 border-black rounded-[5px] mb-[20px]
                    pl-[15px] pr-[15px] pt-[5px] pb-[5px]' 
                    type="email" 
                    id='email'
                    name='email'
                    placeholder='Digite seu email'
                />

                <label htmlFor="assunto">Assunto:</label>

                <input 
                    className='
                    border-1 border-black rounded-[5px] mb-[20px]
                    pl-[15px] pr-[15px] pt-[5px] pb-[5px]' 
                    type="text" 
                    id='assunto'
                    name='assunto'
                    placeholder='Digite o assunto'
                />

                <label htmlFor="mensagem">Mensagem</label>

                <textarea 
                    className='
                    border-1 border-black rounded-[5px] mb-[20px]
                    pl-[15px] pr-[15px] pt-[5px] pb-[5px]' 
                    rows={5}
                    id="mensagem" 
                    name="mensagem" 
                    placeholder='Digite uma mensagem'
                ></textarea>

                <input 
                    className='
                    bg-[#1ABC9C] text-white size-fit 
                    pl-[15px] pr-[15px] pt-[5px] pb-[5px] rounded-[5px]
                    
                    max-lg:mb-[100px]' 
                    type="submit" 
                    value="Enviar" 
                />

            </form>

        </div>

        {/* Right */}
        <div 
            className='
            flex flex-col items-center

            max-md:w-[300px]'
        >

            <div className='flex gap-[50px] mb-[50px]'>

                <div>
                    <h2 className='text-4xl font-bold'>Telefones</h2>
                    <address>(14) 3622-1225</address>
                </div>

                <div>
                    <h2 className='text-4xl font-bold'>Endereço</h2>
                    <address>
                        R. Vinte e Quatro de Maio, 2003-2057 <br />
                        Vila Nova Jau, Jaú - SP, 17205-170
                    </address>
                </div>

            </div>

            <div className='mb-[50px]'>
                <h2 className='text-4xl font-bold'>Horário de funcionamento</h2>
                <p>
                    De se­gunda à sexta-feira das 8h às 12h e das 13h30 às 17h
                </p>
            </div>

            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.690716336062!2d-48.57557082501387!3d-22.289702716108305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8a81b92d39a01%3A0x9c733cf8b3992a82!2sPar%C3%B3quia%20Nossa%20Senhora%20Aparecida!5e0!3m2!1spt-BR!2sbr!4v1749474655632!5m2!1spt-BR!2sbr"
                    width="400"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

        </div>

    </main>

  )

}