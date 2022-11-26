import React from 'react'

export const Aposta = ({aposta}) => {
    return (
    <div className='flex items-center border-green-700 border-2 rounded-xl w-full'>
        <div className='w-[50%] p-5'>
            {
                aposta.selecoes.map(sele => {
                    return (<div key={sele.id}>
                        <p className='pt-2 text-2xl'>{sele.jogo}</p>
                        <p className='pl-3  font-medium'>Resultado: {sele.resultado}</p>
                    </div>);
                })
            }
        </div>
        <hr className='h-[80%] w-0 border-green-700 border-[1px]'/>
        <div className='w-[50%] p-10 flex justify-between'>
            <div className='flex flex-col gap-6 items-start'>
                <p>Montante Apostado</p>
                <p>Total de ganhos</p>
            </div>
            <div className='flex gap-6 flex-col items-center pr-10'>
                <p className='font-bold'>{aposta.apostado} €</p>
                <p className='text-orange-500 font-bold'>{aposta.ganhos} €</p>
            </div>
        </div>
    </div>
    )
}
