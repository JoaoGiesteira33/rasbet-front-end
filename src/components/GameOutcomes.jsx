import React from 'react'

export const GameOutcomes = ({outcomes}) => {
    return (
    <div className='flex justify-between'>
         {outcomes.map(outcome =>
          <div key={outcome.name}>
            <button className='flex w-40 flex-col items-center justify-center border-2 rounded-md border-gray-500'>
              <p className=' font-bold'>{outcome.resultado}</p>
              {outcome.cota}
            </button>
          </div>
        )}
    </div>
    )
}
