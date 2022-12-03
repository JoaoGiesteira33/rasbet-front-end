import React, { useEffect, useState } from 'react'

export const AdminBoletim = ({cancelAction,finishAction,games,selectedGameId}) => {
    const [newState,setNewState] = useState("");

    useEffect(() => {
        setNewState("");
    },[selectedGameId])

    const possibleStates = ["aberto","fechado","cancelado"];

    const game = games.find((g) => g.id === selectedGameId);

    const handleStateChange = (e) => {
        if(e.target.innerText === newState)
            setNewState("")
        else
            setNewState(e.target.innerText);
    }

    return (
    <div className='min-w-[500px] bg-gray-100 flex flex-col items-center rounded-3xl my-5 mr-5'>
        <p className='my-4 text-4xl font-bold'>ALTERAR ESTADO</p>
        <div className='min-w-full grow'>
            {(game !== undefined) && (
                <div className='flex flex-col gap-8 px-5 items-center'>
                    <p className='text-2xl font-bold'>{game.home + ' - ' + game.away}</p>
                    <p className='self-center'>Estado atual:</p>
                    <p className='text-xl font-semibold border-2 bg-green-700 text-white rounded-xl p-4 px-10'>{game.estado}</p>
                    <p className=' self-center'>Novo Estado:</p>
                    <div className='flex flex-col gap-6 '>
                        { (game !== undefined) &&
                            possibleStates.map(state => {
                                if(game.estado !== state)
                                    return (
                                        <button
                                        onClick={(e) => handleStateChange(e)}
                                        className={"border-2 rounded-xl text-xl font-semibold p-4" + ((newState === state) ? " bg-red-500 hover:bg-red-500" : " bg-white border-orange-500 text-black")}
                                        key={state}>{state}</button>
                                    );
                                else
                                    return null;
                            })
                        }
                    </div>
                </div>
            )}
        </div>
        <div className='w-full mt-4 px-4 flex gap-2 pb-4 justify-between'>
            <button onClick={() => {setNewState(""); cancelAction()}} className='border-2 border-orange-500 w-[45%] text-orange-500 p-2 text-2xl bg-white'>
                Cancelar
            </button>
            <button onClick={finishAction} className='bg-orange-500 hover:bg-orange-300 text-2xl w-[45%] text-black p-2'>
                Confirmar
            </button>
        </div>
    </div>
    )
}