import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div className='w-full bg-red-600 h-24 flex flex-row items-center'>
        <div className='px-5 flex flex-row items-center'>
            <Image src='/assets/imgs/cscblanco.png' width={80} height={80} alt='Logo' className='mx-2'/>
            <p className='color-white font-semibold text-xl'>Capitulo de sistemas computacionales</p>
        </div>
    </div>
  )
}

export default Header