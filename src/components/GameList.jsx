import React, { useState } from 'react'
import { Game } from './Game';

export const GameList = (props) => {
    const games = [{
        id: 1,
        home:'Porto',
        away:'Benfica',
        date:'20-11 17:30',
        outcomes: [
            {
                resultado: 'Porto',
                cota: 1.6,
            },
            {
                resultado: 'Empate',
                cota: 4.6,
            },
            {
                resultado: 'Benfica',
                cota: 1.9,
            }
        ]
    },{
        id: 2,
        home:'Sporting',
        away:'Braga',
        date:'20-12 17:30',
        outcomes: [
            {
                resultado: 'Sporting',
                cota: 1.5,
            },
            {
                resultado: 'Empate',
                cota: 3.6,
            },
            {
                resultado: 'Braga',
                cota: 2.9,
            }
        ]
    },
    ]
    return (
        <div className='flex flex-col gap-8'>
            {
            games.map((g) => {
                    return <div key={g.id}><Game game={g}/></div>;
            })
            }
        </div>
    );
}
