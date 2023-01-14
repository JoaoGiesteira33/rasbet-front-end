import React from 'react';

export const AdminGame = ({game,handlePromClick,handleOutcomeClick,selectedGame}) => {
    const gameDate = new Date(game.data);

    return (
    <div className={`${game.id === selectedGame ? "animate-pulse" : ""} border-2 bg-gray-50 rounded-md border-dotted border-green-900 flex items-center`}>
        <div className='flex flex-col justify-center m-4  min-w-[200px]'>
            <p className='text-xl'><b>{game.home} - {game.away}</b></p>
            <p className=' text-sm text-gray-400'>{gameDate.toLocaleDateString() + " " + gameDate.getHours() + ":" + gameDate.getMinutes()}</p>
        </div>
        <button onClick={() => handlePromClick(game.id)}
            className='bg-gray-700 w-[4rem] hover:bg-gray-500 text-white text-xl font-bold items-center'>
                {
                    game.promocao === 0 ? 
                    <p>%</p> :
                    <p>{game.promocao}€</p>
                }
        </button>
            <div className='grow mx-20'>
                <div className='flex justify-end gap-5'>
                {game.outcomes.map(outcome =>
                    <div key={outcome.idJogo+"_"+outcome.resultado}>
                        <button onClick={() => handleOutcomeClick(game.id)}
                         className='ease-in duration-100 flex  w-[7rem] flex-col items-center justify-center border-2 border-green-700 rounded-md border-gray-500 text-xs'>
                            <p className='font-bold'>
                                {outcome.resultado}
                            </p>
                            <p className='font-bold'>
                            {outcome.cota}
                            </p>
                        </button>
                    </div>
                )}
            </div>
        </div>
    </div>
    );
}
