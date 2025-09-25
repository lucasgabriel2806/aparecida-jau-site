import React from 'react';

import Link from 'next/link';

import Image from 'next/image';

function BoletimCard({ imgUrl, title }) {

  return (

    <Link href='/'>
      <div
        className='
        w-[260px] h-[420px] border-2 border-black rounded-[10px]
        p-2'
      >
          <Image
            className='rounded'
            src={`https://drive.google.com/uc?export=view&id=${imgUrl}`}
            alt={''}
            width={260}
            height={440}
          />
          <div className='ml-3 mt-4'>
            <h3 className='font-bold'>{title}</h3>
          </div>
      </div>
    </Link>

  )

}

export default BoletimCard;