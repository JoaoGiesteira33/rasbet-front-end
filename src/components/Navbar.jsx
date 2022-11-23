import React, {useState} from 'react'

export const Navbar = (props) => {
    const isLoggedIn = true;

    return (
        <div className='w-screen h-[10vh] z-1 bg-green-900 drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='font-bold mr-4 text-4xl text-[#dce923]'>RASBET.</h1>
                    <ul className='flex '>
                        <li className='text-white cursor-pointer hover:bg-gray-100/10 hover:rounded-3xl'
                            onClick={props.changeDesporto}>
                            TODOS</li>
                        <li className='text-white cursor-pointer hover:bg-gray-100/10 hover:rounded-3xl'
                            onClick={props.changeDesporto}>
                            FUTEBOL</li>
                        <li className='text-white cursor-pointer hover:bg-gray-100/10 hover:rounded-3xl'
                            onClick={props.changeDesporto}>
                            BASQUETEBOL</li>
                        <li className='text-white cursor-pointer hover:bg-gray-100/10 hover:rounded-3xl'
                            onClick={props.changeDesporto}>
                            TÉNIS</li>
                        <li className='text-white cursor-pointer hover:bg-gray-100/10 hover:rounded-3xl'
                            onClick={props.changeDesporto}>
                            MOTOGP</li>
                    </ul>
                </div>
                <div className='flex pr-4'>
                    {isLoggedIn ? (
                        <p className='text-white'>Bem vindo, <i className='hover:underline hover:cursor-pointer'>João</i>.</p>
                    ) : (
                        <>
                        <button className='bg-transparent mr-4 text-white hover:bg-transparent'>Login</button>
                        <button>Register</button>
                        </>
                    )}
                </div>
            </div>
        </div>
  )
}