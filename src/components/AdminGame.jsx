import React, { useContext, useState } from 'react';
import  {userDetailsContext} from './UserDetailsProvider';
import { BellIcon } from '@heroicons/react/24/solid';
import { BellAlertIcon } from '@heroicons/react/24/solid';

export const AdminGame = ({game,handlePromClick,handleOutcomeClick,selectedGame,addToFollowedGames, removeFollowedGames, isFollowed}) => {
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
        className={`${game.id === selectedGame ? "animate-pulse" : ""} border-2 bg-gray-50 rounded-md border-dotted border-green-900 flex items-center -z-10 relative`}>
        <div className='flex flex-col justify-center m-4  min-w-[200px]'>
            <p className='text-xl'><b>{game.home} - {game.away}</b></p>
            <p className=' text-sm text-gray-400'>{gameDate.toLocaleDateString() + " " + gameDate.getHours() + ":" + gameDate.getMinutes()}</p>
        </div>
        <button onClick={() => handlePromClick(game.id)}
            className='bg-gray-700 w-[4rem] hover:bg-gray-500 text-white text-xl font-bold items-center'>
                {
                    game.promocao === 0 ? 
                    <p>%</p> :
                    <p>{game.promocao}€</p>
                }
        </button>
            <div className='grow mx-20'>
                <div className='flex justify-end gap-5'>
                {game.outcomes.map(outcome =>
                    <div key={outcome.idJogo+"_"+outcome.resultado}>
                        <button onClick={() => handleOutcomeClick(game.id)}
                         className='ease-in duration-100 flex  w-[7rem] flex-col items-center justify-center border-2 border-green-700 rounded-md border-gray-500 text-xs'>
                            <p className='font-bold'>
                                {outcome.resultado}
                            </p>
                            <p className='font-bold'>
                            {outcome.cota}
                            </p>
                        </button>
                    </div>
                )}
                
            </div>
        </div>
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
