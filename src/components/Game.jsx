import React from 'react';
import { GameOutcomes } from './GameOutcomes';

export const Game = ({handlePromClick, selectedOutcomes, game, outcomeClick}) => {

    return (
    <div className='border-2 bg-gray-50 rounded-md border-dotted border-green-900 flex items-center'>
            <div className='flex flex-col justify-center m-4  min-w-[200px]'>
                <p className='text-xl'><b>{game.home} - {game.away}</b></p>
                <p className=' text-sm text-gray-400'>{game.date}</p>
            </div>
            <div className='grow mx-20'>
                <GameOutcomes selectedOutcomes={selectedOutcomes} outcomes={game.outcomes} outcomeClick={outcomeClick}/>
            </div>
    </div>
    );
}
