'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <nav className={`fixed w-full p-4 transition-all duration-300 ${isScrolled ? 'bg-green-700 bg-opacity-75' : 'bg-green-700 bg-opacity-100'}`}>
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-white text-2xl font-bold mb-2 text-center">
          <Link href="/">
            SMART AGRICULTURE ALAT PENYIRAM OTOMATIS BERBASIS INTERNET OF THINGS
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/home" className="text-gray-300 hover:text-white">
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
