'use client'

import { usePathname } from 'next/navigation'
import NasiCokot from './plant'
import DimsumComponen from './flower'
import { SetStateAction, useState } from 'react'
import { motion } from 'framer-motion'


export default function Dimsum(){

    const pathName = usePathname()
    const [state, setState] = useState(<DimsumComponen />)

    const NavigationProduct = ({nameValue, href}: {nameValue: string, href: React.SetStateAction<React.JSX.Element>}) => {
        return (
            <div>
                <motion.h1 className='text-xl font-bold cursor-pointer' onClick={() => {setState((href))}} whileHover={{ scale: 1.1 }}>{nameValue}</motion.h1>
                {state === href ? null : <motion.div><hr/></motion.div> }
            </div>
        )
    }

    return (
        <div className='mt-20 px-4 py-20 mx-5 bg-[#ADBC9F]'>
            <h1 className='text-8xl font-bold text-center mb-10'>CATALOG</h1>
            <hr className='w-full h-1 bg-black mt-4'/>
            <div className='flex gap-10 flex-wrap my-10 justify-center'>
                <NavigationProduct nameValue='Fresh Flower' href={(<DimsumComponen />)}/>
                <NavigationProduct nameValue='Live Plants' href={(<NasiCokot />)}/>
            </div>
            {state}
        </div>
    )
}


