'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function Navbar() {
    const pathname = usePathname()
    const routes:string[][] = [['/', 'Inicio'], ['/about', 'Conocenos'], ['/events', 'Eventos']]
    return (
        <>
        <ul className='flex flex-row items-center'>
        {
            routes.map(([route, name]) => (
                <li key={name} className='mx-5'>
                    <Link href={route} className={`link ${pathname == route ? 'font-semibold' : ''}`}>{name}</Link>
                </li>
            ))
        }
        </ul>
        </>
    )
}

export default Navbar