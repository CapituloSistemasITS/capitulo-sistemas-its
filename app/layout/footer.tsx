import React from 'react'
import Image from 'next/image'

function footer() {
  return (
    <div className='w-full bg-slate-600'>
        <div className='flex max-w-4xl justify-between flex-row items-center h-36 mx-auto'>
            <div className='w-3/6'>
                <p className='text-xs md:text-sm'>Capitulo de sistemas computacionales - Todos los derechos reservados</p>
                <p className='text-xs md:text-sm'>Desarrollado por: <a href="https://github.com/NexWan" className='text-xs md:text-sm decoration-blue-400 underline font-semibold'> Leonardo (NexWan)</a></p>
            </div>
            <div className='h-3/4 w-1 bg-black rounded-lg'>
              &nbsp;
            </div>
            <div className='flex flex-col w-1/6'>
              <p className='text-xs md:text-sm font-semibold'>Siguenos en:</p>
              <div className='flex flex-row mt-2 items-center space-x-3'>
                <a href='https://www.facebook.com/csc.its' target='_blank' className='hover:cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
                      <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
                  </svg>
                </a>
                <a href='https://www.instagram.com/csc.its/' target='_blank' className='hover:cursor-pointer'>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
                      <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className='h-3/4 w-1 bg-black rounded-lg'>
              &nbsp;
            </div>
            <div className='flex flex-col w2/3 '>
                <Image src='/assets/imgs/its.png' width={80} height={80} alt='Logo' className='mx-2 w-12 md:w-20'/>
                <Image src='/assets/imgs/TecNM_logo.png' width={80} height={80} alt='Logo' className='mx-2 w-12 md:w-20'/>
            </div>
        </div>
    </div>
  )
}

export default footer