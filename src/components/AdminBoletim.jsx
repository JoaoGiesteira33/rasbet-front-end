import React from 'react'

export const AdminBoletim = ({cancelAction,finishAction,games,selectedGameId}) => {
    const game = games.find((g) => g.id === selectedGameId);

    return (
    <div className='min-w-[500px] bg-gray-100 flex flex-col items-center rounded-3xl my-5 mr-5'>
        <p className='my-4 text-4xl font-bold'>ALTERAR ESTADO</p>
        <div className='min-w-full grow'>
            {(selectedGameId !== "") && (
                <div className='flex flex-col gap-10 px-5 items-center'>
                    <p className='text-2xl font-bold'>{game.home + ' - ' + game.away}</p>
                    <p className='self-start'>Estado atual: <span className='text-xl font-semibold'>{game.estado}</span> </p>
                    <p className=' self-start'>Novo Estado:</p>
                    <div>
                        <button></button>
                        <button></button>
                    </div>
                </div>
            )}
        </div>
        <div className='w-full mt-4 px-4 flex gap-2 pb-4 justify-between'>
            <button onClick={cancelAction} className='border-2 border-orange-500 w-[45%] text-orange-500 p-2 text-2xl bg-white'>
                Cancelar
            </button>
            <button onClick={finishAction} className='bg-orange-500 hover:bg-orange-300 text-2xl w-[45%] text-black p-2'>
                Confirmar
            </button>
        </div>
    </div>
    )
}