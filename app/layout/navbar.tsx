'use client'

import React, {useState} from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function Navbar() {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)
    const routes:string[][] = [['/', 'Inicio'], ['/about', 'Conocenos'], ['/events', 'Eventos'], ['/workshops', 'Talleres']]
    const openNav = () => {
        console.log('open')
        setOpen(!open)
    }
    return (
        <>
        <ul className='flex-row items-center md:flex hidden'>
        {
            routes.map(([route, name]) => (
                <li key={name} className='mx-5'>
                    <Link href={route} className={`link ${pathname == route ? 'font-semibold' : ''}`}>{name}</Link>
                </li>
            ))
        }
        </ul>
        <div className='md:hidden mr-5'>
            <button className='text-white' onClick={() => {openNav()}}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                    <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
                </svg>
            </button>
        </div>
        <div className={`md:hidden ${open ? 'absolute' : 'hidden'} min-w-ful bg-rose-900 bg-opacity-80 min-h-full mx-auto inset-0 z-50`}>
            <div className="absolute top-0 right-0 m-5">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 30 30" className='hover:cursor-pointer' onClick={() => {openNav()}}>
                    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                </svg>
            </div>
            <div className='flex flex-col items-center justify-center h-full'>
                <ul className={`md:hidden flex-col mx-auto flex justify-center items-center`}>
                {
                    routes.map(([route, name]) => (
                        <li key={name} className='my-5'>
                            <Link onClick={() => {openNav()}} href={route} className={`link ${pathname == route ? 'font-semibold' : ''}`}>{name}</Link>
                        </li>
                    ))
                }
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar