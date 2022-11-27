import React, {useContext} from 'react';
import { GameOutcomes } from './GameOutcomes';
import { userDetailsContext } from './UserDetailsProvider';

export const Game = ({handlePromClick, selectedOutcomes, game, outcomeClick}) => {
    const [userDetails, setUserDetails] = useContext(userDetailsContext);
    const isAdmin = userDetails.type === "admin";

    return (
    <div className='border-2 bg-gray-50 rounded-md border-dotted border-green-900 flex items-center'>
            <div className='flex flex-col justify-center m-4  min-w-[200px]'>
                <p className='text-xl'><b>{game.home} - {game.away}</b></p>
                <p className=' text-sm text-gray-400'>{game.date}</p>
            </div>
            {isAdmin && <button onClick={() => handlePromClick(game.id)} className='bg-gray-700 text-white text-xl font-bold items-center'>
                %
            </button>}
            <div className='grow mx-20'>
                <GameOutcomes selectedOutcomes={selectedOutcomes} outcomes={game.outcomes} outcomeClick={outcomeClick}/>
            </div>
    </div>
    );
}
