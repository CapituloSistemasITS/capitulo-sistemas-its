import React from 'react'
import Image from 'next/image'
import { Member } from '../utils/interfaces'

const Members = ({member}:{member:Member}) => {
  return (
    <div className='w-40 py-3 flex flex-col justify-center items-center bg-guinda-tec rounded-xl shadow-lg shadow-black text-white space-y-2 text-wrap'>
        <p className='text-balance text-center'>{member.name}</p>
        <Image src={member.image} alt={member.name} width={60} height={60} className='rounded-full'/>
        <p>{member.role}</p>
    </div>
  )
}

export default Members