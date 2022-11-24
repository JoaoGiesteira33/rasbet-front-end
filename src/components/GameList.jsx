import React, { useState } from 'react'
import { Game } from './Game';

export const GameList = ({selectedOutcomes, games, outcomeClick}) => {
    return (
        <div className='flex flex-col gap-8'>
            {
            games.map((g) => {
                    return <div key={g.id}><Game selectedOutcomes={selectedOutcomes} game={g} outcomeClick={outcomeClick}/></div>;
            })
            }
        </div>
    );
}
