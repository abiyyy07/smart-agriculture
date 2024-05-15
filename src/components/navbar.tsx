'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {

  return (
    <nav className="bg-green-700 p-4">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-white text-2xl font-bold mb-2 text-center">
          <Link href="/">
            SMART AGRICULTURE ALAT PENYIRAM OTOMATIS BERBASIS INTERNET OF THINGS
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
