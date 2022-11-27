import React, { useState } from 'react'
import { Game } from './Game';

export const GameList = ({handlePromClick, selectedOutcomes, input, games, outcomeClick}) => {
    return (
        <div className='flex flex-col gap-8'>
            {
            games.map((g) => {
                    if(input !== ""  && !(g.home.toLowerCase().includes(input.toLowerCase()) || g.away.toLowerCase().includes(input.toLowerCase())))
                        return null;
                    return <div key={g.id}><Game handlePromClick={handlePromClick} selectedOutcomes={selectedOutcomes} game={g} outcomeClick={outcomeClick}/></div>;
            })
            }
        </div>
    );
}
