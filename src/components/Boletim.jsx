import React, { useState } from 'react'
import { BoletimBot } from './BoletimBot';
import { BoletimSelecao } from './BoletimSelecao';

export const Boletim = ({selectedOutcomes, games, outcomeClick}) => {
    const getSelecoes = () => {
        let returnValue = [];
        games.forEach(g => {
            g.outcomes.forEach(o => {
                if(selectedOutcomes.includes(o.idJogo+"_"+o.resultado)){
                    returnValue.push({
                        ...o,
                        jogo: g.home + ' - ' + g.away,
                    });
                }
            })
        });

        return returnValue;
    } 

    const selecoes = getSelecoes();

    return (
        <div className='min-w-[500px] bg-gray-100 flex flex-col items-center rounded-3xl my-5 mr-5'>
            <p className='my-4 text-4xl font-bold'>BOLETIM</p>
            <div className='min-w-full grow overflow-auto'>
                {selecoes.map((sel) => {
                    return <div key={sel.idJogo+"_"+sel.resultado}><BoletimSelecao selecao={sel} outcomeClick={outcomeClick}/></div>;
                })
                }
            </div>
            <BoletimBot selecoes={selecoes}/>
        </div>
    );
}