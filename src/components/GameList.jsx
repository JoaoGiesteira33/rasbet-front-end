import React, { useContext } from 'react'
import { AdminGame } from './AdminGame';
import { Game } from './Game';
import { userDetailsContext } from './UserDetailsProvider';

export const GameList = ({handlePromClick, selectedOutcomes, input, games, outcomeClick, selectedGame, desporto, addToFollowedGames, removeFollowedGames, followedGames}) => {
    const [userDetails, setUserDetails] = useContext(userDetailsContext);
    const isAdmin = userDetails.tipo === "Administrador";

    return (
        <div className='flex flex-col gap-8 overflow-y-auto no-scrollbar'>
            {
                (games.length === 0) && 
                <div className="flex items-center justify-center mt-[250px]">
                    <div className="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
                </div>
            }
            { isAdmin 
            ? games.map((g) => {
                if(input !== ""  && !(g.home.toLowerCase().includes(input.toLowerCase()) || g.away.toLowerCase().includes(input.toLowerCase())))
                    return null;
                if(g.estado === "fechado")
                    return null;
                if(desporto !== "todos" && desporto !== "futebol")
                    return null;
                return <div key={g.id}><AdminGame addToFollowedGames={addToFollowedGames} removeFollowedGames={removeFollowedGames} handlePromClick={handlePromClick} game={g} handleOutcomeClick={outcomeClick} selectedGame={selectedGame}/></div>;
                }) 
            :
                games.map((g) => {
                        if(input !== ""  && !(g.home.toLowerCase().includes(input.toLowerCase()) || g.away.toLowerCase().includes(input.toLowerCase())))
                            return null;
                        if(g.estado !== "aberto")
                            return null;
                        if(desporto !== "todos" && desporto !== "futebol")
                            return null;
                        return <div key={g.id}><Game addToFollowedGames={addToFollowedGames} removeFollowedGames={removeFollowedGames} isFollowed={followedGames.includes(g.id)} selectedOutcomes={selectedOutcomes} game={g} outcomeClick={outcomeClick}/></div>;
                })
            }
        </div>
    );
}