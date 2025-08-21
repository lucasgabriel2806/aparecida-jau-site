import React from 'react';

import Link from 'next/link';

import Image from 'next/image';

function BoletimCard() {

  return (

    <Link href='/'>
      <div
        className='
        w-[260px] h-[440px] border-2 border-black rounded-[10px]
        p-2'
      >
          <Image
            className='rounded'
            src={'/img/boletim/2023/abril.jpg'}
            alt={'teste'}
            width={260}
            height={440}
          />
          <div>
            <h3>Mês</h3>
            <p>Descrição?</p>
          </div>
      </div>
    </Link>

  )

}

export default BoletimCard;