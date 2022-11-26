import React, { useState } from 'react'

export const AutoExclusao = ({isOnAutoexclusao}) => {
    const [inputDias,setInputDias] = useState("");

    const handleInputChane = (e) => {
        setInputDias(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Autoexclusao logic
    }

    return (
    <div className={`${!isOnAutoexclusao ? "active" : ""} gap-4 show w-[900px] h-[300px] bg-white border-dotted  border-[2px] border-green-900 items-center  flex flex-col shrink rounded-3xl p-4`}>
        <p className='text-3xl'>Auto-exclusão</p>
        <p>Deseja excluir-se do sistema?</p>
        <p>(<span className='text-red-700'>Aviso</span>: Ao selecionar um período de tempo irá perder todo o acesso às funcionalidades do sistema. Não é possivel reverter o processo depois de prosseguir.)</p>
        <div className='flex gap-4 items-center'>
            <input value={inputDias} onChange={handleInputChane} id="numberOfDays" type="text" name="numberOfDays"
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'></input>
            <label for="numerOfDays">Dias</label>
        </div>
        <div className='flex gap-10'>
            <button className=' border-orange-500 border-2 text-orange-500 rounded-xl'>Cancelar</button>
            <button onClick={() => handleSubmit()} className="bg-orange-500 text-white rounded-xl">OK</button>
        </div>
    </div>
    )
}
