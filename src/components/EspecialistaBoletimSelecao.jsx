import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export const EspecialistaBoletimSelecao = ({oddObj, handleOChange, selecao, outcomeClick}) => {
    return (
    <div className='mx-6'>
        <div className='flex px-3 bg-white items-center justify-between'>
            <p className='font-bold'>{selecao.jogo}</p>
            <button className='hover:bg-transparent rounded-full'>
                <XMarkIcon onClick={() => outcomeClick(selecao.id)} className='h-6 w-6 hover:bg-red-600 hover:rounded-xl'/>
            </button>
        </div>
        <div className='flex items-center justify-between bg-white mt-1 mb-6 py-5 px-3 pr-6'>
            <div>Resultado: {selecao.resultado}</div>
            <div className='flex justify-end'>
                <label className='font-semibold' htmlFor='valorCota'>Cota</label>
                <input id="valorCota" className='px-2 border-black rounded-md border-2 ml-4 w-[20%]'
                type="text"></input>
            </div>
        </div>
    </div>
  )
}