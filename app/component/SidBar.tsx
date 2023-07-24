"use client";
import React,{useMemo} from 'react'
import {usePathname} from 'next/navigation'
import {HiHome} from 'react-icons/hi';
import {BiSearch} from 'react-icons/bi'
import Box from './Box'
import Link from 'next/link';
interface SidBarProps{
    childern?:React.ReactNode
}

const SidBar:React.FC<SidBarProps> = ({
    childern
}) => {
    const pathname = usePathname();
    const route= useMemo(()=>[
        {
        icon:HiHome,
        label:'Home',
        active:pathname !=='/search',
        href:'/'
        },
        {
        icon:BiSearch,
        label:'Search',
        active:pathname ==='/search',
        href:'/search '
        },
],[]);
  return (
        <div className="flex h-full">
            <div className='hidden md:flex flex-col bg-black h-full w-[300px] p-2'>
            <Box>Sidebar Navigation</Box>
            <Box className='overflow-y-auto h-full'>Song Library</Box>
        </div>
        </div>
  )
}

export default SidBar