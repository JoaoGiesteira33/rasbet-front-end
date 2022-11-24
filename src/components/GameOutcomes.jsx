import React from 'react'

export const GameOutcomes = ({selectedOutcomes, outcomes, outcomeClick}) => {
    return (
    <div className='flex justify-between'>
         {outcomes.map(outcome =>
          <div key={outcome.id}>
            <button onClick={() => outcomeClick(outcome.id)} style={{backgroundColor: selectedOutcomes.includes(outcome.id) ? 'orange' : 'white'}} 
              className='ease-in duration-100 flex w-40 flex-col items-center justify-center border-2 border-green-700 rounded-md border-gray-500'>
              <p className='font-bold'>
                {outcome.resultado}
              </p>
              {outcome.cota}
            </button>
          </div>
        )}
    </div>
    )
}
