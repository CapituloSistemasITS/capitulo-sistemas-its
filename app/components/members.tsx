import React from 'react'
import Image from 'next/image'
import { Member } from '../utils/interfaces'

const Members = ({member}:{member:Member}) => {
  return (
    <div className='md:h-52 md:w-44 md:m-10 md:py-5 md:px-0 w-28 px-2 my-4 mx-2 h-40 py-12 flex flex-col justify-center items-center bg-guinda-tec rounded-xl shadow-lg shadow-black text-white space-y-2 text-wrap'>
        <p className='text-balance text-center text-xs md:text-base'>{member.name}</p>
        <Image src={member.image} alt={member.name} width={60} height={60} className='rounded-full w-12 md:w-20'/>
        <p className='text-balance text-center text-xs md:text-base'>{member.role}</p>
    </div>
  )
}

export default Members