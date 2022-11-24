import React, { useState } from 'react'
import { BoletimBot } from './BoletimBot';
import { BoletimSelecao } from './BoletimSelecao';

export const Boletim = () => {
    const [selecoes,setSelecoes] = useState([{
        jogo: 'Sporting - Varzim',
        resultado: 'Sporting',
        cota: 1.5,
        id: 1,
    },
    {
        jogo: 'Porto - Benfica',
        resultado: 'Empate',
        cota: 4.6,
        id: 2,
    }]);

    return (
        <div className='min-w-[500px] bg-gray-100 flex flex-col items-center rounded-3xl my-5 mr-5'>
            <p className='my-4 text-4xl font-bold'>BOLETIM</p>
            <div className='min-w-full grow'>
                {selecoes.map((sel) => {
                    return <div key={sel.id}><BoletimSelecao selecao={sel}/></div>;
                })
                }
            </div>
            <BoletimBot selecoes={selecoes}/>
        </div>
    );
}