import Link from 'next/link';

export default function NotFound() {

    return(

        <div className='flex flex-col items-center justify-center h-screen'>

            <h1 className='text-center font-bold mt-9 text-6xl'>Página 404 não encontrada</h1>

            <p>Essa página que tentou acessar não existe!</p>

            <Link className='text-blue-500 underline' href='/'>
                Voltar para Home
            </Link>

        </div>

    )

}