"use client";

import { navLinks } from '@/constant/constant'
import React, { useEffect } from 'react'
import { TbAirBalloon } from 'react-icons/tb'
import Link from 'next/link'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
    openNav?: () => void;
}


const Nav = ({ openNav }: Props) => {
    const [navOpen, setNavOpen] = React.useState(false);
    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) {
                setNavOpen(true);
            }
            if (window.scrollY < 90) {
                setNavOpen(false);
            };
            window.addEventListener('scroll', handler);
            return () => {
                window.removeEventListener('scroll', handler);
            }
        }
    }, []);

    return (
        <div className="bg-blue-950 transition-all duration-200 h-[12vh] z-[1000] fixed w-full">
            <div className="flex items-center justify-between h-full px-4">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center">
                        <TbAirBalloon className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-xl md:text-2xl text-white">Tripi</h1>
                </div>
                {/* Navigation Links */}
                <div className="hidden lg:flex space-x-4">
                    {navLinks.map((link) => (
                        <Link href={link.url} key={link.id}>
                            <p className="text-white">{link.label}</p>
                        </Link>
                    ))}
                </div>
                {/* Button and Icon */}
                <div className="flex items-center space-x-4">
                    <button className="md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-gray-200 transition-all duration-300 rounded-lg">
                        Book Now
                    </button>
                    <HiBars3BottomRight onClick={openNav} className="text-white w-8 h-8 lg:hidden" />
                </div>
            </div>
        </div>
    )
}

export default Nav