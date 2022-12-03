import React from 'react'

export const GameOutcomes = ({selectedOutcomes, outcomes, outcomeClick}) => {
    return (
    <div className='flex justify-end gap-5'>
         {outcomes.map(outcome =>
          <div key={outcome.idJogo+"_"+outcome.resultado}>
            <button onClick={() => outcomeClick(outcome.idJogo+"_"+outcome.resultado)} style={{backgroundColor: selectedOutcomes.includes(outcome.idJogo+"_"+outcome.resultado) ? 'orange' : 'white'}} 
              className='ease-in duration-100 flex  w-[7rem] flex-col items-center justify-center border-2 rounded-md border-gray-500 text-xs'>
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
    )
}
