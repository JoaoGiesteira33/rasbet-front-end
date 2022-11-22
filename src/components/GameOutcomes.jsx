import React from 'react'

export const GameOutcomes = () => {
    const outcomes = [{name:'Porto',odd:2.55},
    {name:'Empate',odd:'5.3'},{name:'Benfica',odd:2.63}]
    return (
    <div className='flex justify-between'>
         {outcomes.map(outcome =>
          <div key={outcome.name}>
            <button className='flex flex-col items-center justify-center border-2 rounded-md border-gray-500'>
              <p className=' font-bold'>{outcome.name}</p>
              {outcome.odd}
            </button>
          </div>
        )}
    </div>
    )
}
