import React from 'react'
import { GameOutcomes } from './GameOutcomes'

export const Game = () => {
    const game = {home:'Porto',away:'Benfica',date:'20-11 17:30'};

    return (
    <div className='border-2 rounded-md bg-gray-100 flex items-center '>
            <div className='flex flex-col justify-center m-4'>
                <p className='text-xl'><b>{game.home} - {game.away}</b></p>
                <p className=' text-sm text-gray-400'>{game.date}</p>
            </div>
            <div className='grow mx-5'>
                <GameOutcomes/>
            </div>
    </div>
    );
}
