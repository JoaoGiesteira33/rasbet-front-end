import React, { useContext } from 'react'
import { AdminGame } from './AdminGame';
import { Game } from './Game';
import { userDetailsContext } from './UserDetailsProvider';

export const GameList = ({handlePromClick, selectedOutcomes, input, games, outcomeClick, selectedGame}) => {
    const [userDetails, setUserDetails] = useContext(userDetailsContext);
    const isAdmin = userDetails.tipo === "Administrador";

    return (
        <div className='flex flex-col gap-8 overflow-y-auto no-scrollbar'>
            { isAdmin 
            ? games.map((g) => {
                if(input !== ""  && !(g.home.toLowerCase().includes(input.toLowerCase()) || g.away.toLowerCase().includes(input.toLowerCase())))
                    return null;
                return <div key={g.id}><AdminGame handlePromClick={handlePromClick} game={g} handleOutcomeClick={outcomeClick} selectedGame={selectedGame}/></div>;
                }) 
            :
                games.map((g) => {
                        if(input !== ""  && !(g.home.toLowerCase().includes(input.toLowerCase()) || g.away.toLowerCase().includes(input.toLowerCase())))
                            return null;
                        return <div key={g.id}><Game selectedOutcomes={selectedOutcomes} game={g} outcomeClick={outcomeClick}/></div>;
                })
            }
        </div>
    );
}