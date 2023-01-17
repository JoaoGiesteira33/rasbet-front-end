import React, { useContext, useState } from 'react';
import { GameOutcomes } from './GameOutcomes';
import  {userDetailsContext} from './UserDetailsProvider';
import { BellIcon } from '@heroicons/react/24/solid';
import { BellAlertIcon } from '@heroicons/react/24/solid';

export const Game = ({selectedOutcomes, game, outcomeClick, addToFollowedGames, removeFollowedGames, isFollowed}) => {
    const gameDate = new Date(game.data);
    const [userDetails, setUserDetails] = useContext(userDetailsContext);
    const [isHovering, setIsHovering] = useState(false);
    const isBeingFollowed = isFollowed;

    const canBet = userDetails.online;
    const email = userDetails.email;
    const game_id = game.id;

    return (
    <div onMouseOver={() => {setIsHovering(true)}}
        onMouseLeave={() => {setIsHovering(false)}}
        className='border-2 relative bg-gray-50 rounded-md border-dotted border-green-900 flex items-center'>
            <div className='flex flex-col justify-center m-4  min-w-[200px]'>
                <p className='text-xl'><b>{game.home} - {game.away}</b></p>
                <p className=' text-sm text-gray-400'>{gameDate.toLocaleDateString() + " " + gameDate.getHours() + ":" + gameDate.getMinutes()}</p>
            </div>
            <div className='grow mx-20 h-full'>
                <GameOutcomes selectedOutcomes={selectedOutcomes} outcomes={game.outcomes} outcomeClick={outcomeClick}/>
            </div>
            {(game.promocao !== 0) &&
            <div className='absolute border-l-2 border-b-2 border-green-900 rounded-md border-dotted p-1 top-0 text-xl font-bold right-0'>
                <p className=' text-yellow-500'>{game.promocao}€</p>
            </div>
            }
            {
                (canBet && !isBeingFollowed && isHovering) &&
                <BellIcon
                onClick={() => {addToFollowedGames(email, game_id);}}
                className='absolute right-0 bottom-0 border-green-900 rounded-md border-2 font-bold text-xl h-6 w-6 m-2 ease-in duration-300 hover:bg-green-400'
                />
            }
            {
                (canBet && isBeingFollowed) &&
                <BellAlertIcon
                onClick={() => {removeFollowedGames(email, game_id);}}
                className='absolute right-0 bottom-0 border-green-900 bg-green-400 rounded-md border-2 font-bold text-xl h-6 w-6 m-2 ease-in duration-300'
                />
            }
    </div>
    );
}
