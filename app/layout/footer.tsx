import React from 'react'
import Image from 'next/image'

function footer() {
  return (
    <div className='w-full bg-white'>
        <div className='flex max-w-2xl justify-between flex-row items-center h-36 mx-auto'>
            <div>
                <p className='text-gray-800 text-sm'>Capitulo de sistemas computacionales - Todos los derechos reservados</p>
                <p className='text-gray-800 text-sm'>Desarrollado por: <a href="https://github.com/NexWan" className='text-gray-800 text-sm decoration-blue-400 underline font-semibold'> Leonardo (NexWan)</a></p>
            </div>
            <div>
                <Image src='/assets/imgs/its.png' width={80} height={80} alt='Logo' className='mx-2'/>
                <Image src='/assets/imgs/TecNM_logo.png' width={80} height={80} alt='Logo' className='mx-2'/>
            </div>
        </div>
    </div>
  )
}

export default footer