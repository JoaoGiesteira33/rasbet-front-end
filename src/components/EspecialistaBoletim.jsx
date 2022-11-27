import React, { useState } from 'react'
import { EspecialistaBoletimSelecao } from './EspecialistaBoletimSelecao';

export const EspecialistaBoletim = ({handleOddChange, cancelAction, selectedOutcomes, espSelectedOutcomes, games, finishAction, outcomeClick}) => {
    const getSelecoes = () => {
        let returnValue = [];
        games.forEach(g => {
            g.outcomes.forEach(o => {
                if(selectedOutcomes.includes(o.id)){
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
            <p className='my-4 text-4xl font-bold'>ALTERAR ODDS</p>
            <div className='min-w-full grow overflow-auto'>
                {selecoes.map((sel) => {
                    return <div key={sel.id}>
                        <EspecialistaBoletimSelecao handleOddChange={handleOddChange} valorSelecao={espSelectedOutcomes.find(item => item.id === sel.id).value} selecao={sel} outcomeClick={outcomeClick}/>
                    </div>;
                })
                }
            </div>
            <div className='w-full mt-4 px-4 flex gap-2 pb-4 justify-between'>
                <button onClick={cancelAction} className='border-2 border-orange-500 w-[45%] text-orange-500 p-2 text-2xl bg-white'>
                    Cancelar
                </button>
                <button onClick={finishAction} className='bg-orange-500 hover:bg-orange-300 text-2xl w-[45%] text-black p-2'>
                    Confirmar
                </button>
            </div>
        </div>
    )
}
