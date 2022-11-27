import React, { useState } from 'react'
import '../styles/login.css';

export const Promocao = ({game}) => {
    const [valorProm, setValorProm] = useState("");

    const handlePromChange = (e) => {
        setValorProm(e.target.value);
    }

    const handlePromInsertion = (e) => {
        console.log("Prom value: " + e.target.value);

        //Insert prom logic
        //...
    }

    return (
    <div className={`gap-4 show w-[900px] h-[300px] bg-white border-dotted  border-[2px] border-green-900 items-center flex flex-col shrink rounded-3xl p-4`}>
        <p className='font-bold text-3xl'>ADICIONAR PROMOÇÃO</p>
        <label htmlFor='valorProm'>Promoção: <span className=' font-semibold'>{game.home} - {game.away}</span>. Insira valor da promoção:</label>
        <div>
            <input
             className='rounded-xl mr-2 border-green-700 border-2 p-2  outline-none'
             value={valorProm} onChange={handlePromChange} id="valorProm" type="text"></input>€
             <div className='mt-4'>
                <button onClick={} className='w-[260px] hover:bg-green-500 text-black bg-green-700 rounded-xl border-black border-2 px-6'>Inserir</button>
             </div>
        </div>
    </div>
    );
}
