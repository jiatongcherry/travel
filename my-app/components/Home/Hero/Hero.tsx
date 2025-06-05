import React from 'react'
import SearchBox from '@/components/Helper/SearchBox'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className='relative w-full h-screen'>
            {/* Background Image */}
            <div className='absolute top-0 left-0 w-full h-full bg-gray-800 opacity-50'></div>
            {/* SearchBox */}
            <div className='absolute z-[100] w-full h-full top-[50%] flex flex-col items-center justify-center transform -translate-y-1/2'>
                <SearchBox />
                <Link href = '/blog' className='rounded px-14 md:px-28 -mt-4 py-2.5 overflow-hidden group bg-rose-600 relative
                hover:bg-rose-700 text-white transition-all duration-300'>
                <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:translate-x-40 ease'></span>
                <span className='relative font-bold'>Search</span>
                </Link>
            </div>
        </div>
    )
}

export default Hero