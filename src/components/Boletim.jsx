import React from 'react'
import { BoletimBot } from './BoletimBot';

export const Boletim = () => {
    return (
        <div className='min-w-[500px] bg-gray-100 flex flex-col items-center rounded-3xl my-5 mr-5'>
            <p className='my-4 text-4xl font-bold'>BOLETIM</p>
            <p className='  grow'>Seleções</p>
            <BoletimBot/>
        </div>
    );
}