'use client'

import React, { useState } from 'react'

export default function Popup() {
    const [isVisible, setIsVisible] = useState(true)

    const togglePopup = () => {
        setIsVisible(!isVisible)
    }
    return (
        <div className="absolute bottom-0">
            {isVisible && (
                <div className="bg-white px-4 my-5 rounded-lg shadow-lg absolute bottom-0 left-0 w-56 text-center">
                    <button onClick={togglePopup} className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full">
                        X
                    </button>
                    <h2 className="text-lg font-bold text-black">AVISO</h2>
                    <p className="text-gray-600">Esta pagina sigue en desarrollo, es posible que se experimenten bugs y contenido no terminado.</p>
                </div>
            )}
        </div>
    )
}