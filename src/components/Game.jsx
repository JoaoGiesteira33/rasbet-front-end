import React from 'react';
import { GameOutcomes } from './GameOutcomes';

export const Game = ({selectedOutcomes, game, outcomeClick}) => {

    return (
    <div className='border-2 relative bg-gray-50 rounded-md border-dotted border-green-900 flex items-center'>
            <div className='flex flex-col justify-center m-4  min-w-[200px]'>
                <p className='text-xl'><b>{game.home} - {game.away}</b></p>
                <p className=' text-sm text-gray-400'>{(new Date(game.data)).toLocaleDateString()}</p>
            </div>
            <div className='grow mx-20 h-full'>
                <GameOutcomes selectedOutcomes={selectedOutcomes} outcomes={game.outcomes} outcomeClick={outcomeClick}/>
            </div>
            {(game.promocao !== 0) &&
            <div className='absolute border-l-2 border-b-2 border-green-900 rounded-md border-dotted p-1 top-0 text-xl font-bold right-0'>
                <p className=' text-yellow-500'>{game.promocao}€</p>
            </div>
            }
    </div>
    );
}
