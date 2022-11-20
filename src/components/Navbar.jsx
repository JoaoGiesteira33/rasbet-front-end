import React, {useState} from 'react'

export const Navbar = () => {
    //const {nav, setNav} = useState(false);

    return (
        <div className='w-screen h-[80px] z-1 bg-green-900 drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='font-bold mr-4 text-4xl text-[#dce923]'>RASBET.</h1>
                    <ul className='flex '>
                        <li className='text-white'>TODOS</li>
                        <li className='text-white'>FUTEBOL</li>
                        <li className='text-white'>BASQUETEBOL</li>
                        <li className='text-white'>TÉNIS</li>
                        <li className='text-white'>MOTOGP</li>
                    </ul>
                </div>
                <div className='flex pr-4'>
                    <button className='bg-transparent mr-4 text-white hover:bg-transparent'>Login</button>
                    <button>Register</button>
                </div>
            </div>
        </div>
  )
}