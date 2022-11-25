import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export const BoletimSelecao = ({selecao, outcomeClick}) => {
    return (
    <div className='mx-6'>
        <div className='flex px-3 bg-white items-center justify-between'>
            <p className='font-bold'>{selecao.jogo}</p>
            <button className='hover:bg-red-500 rounded-full'>
                <XMarkIcon onClick={() => outcomeClick(selecao.id)} className='h-6 w-6 '/>
            </button>
        </div>
        <div className='flex justify-between bg-white mt-1 mb-6 py-5 px-3'>
            <p>Resultado: {selecao.resultado}</p>
            <div className='px-4 border-2 border-gray-700 rounded-xl'>Cota: {selecao.cota}</div>
        </div>
    </div>
  )
}