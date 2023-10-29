'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full fixed top-0 left-0 right-0 z-10">
        <div className="flex flex-row-reverse justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="items-center justify-between py-3 fle md:py-5 md:block">
              {/* Hamburger button for mobile */}
              <div className="md:hidden">
                <button className="p-2 rounded-md outline-none text-gray 700 focus:border-gray-400 focus:border" 
                onClick={() => setNavbar(!navbar)}>
                  {navbar ? (
                      <Image src="/close.svg" width={30} height={30} alt="logo" />
                    ) : (
                      <Image
                        src="/hamburger-menu.svg"
                        width={30}
                        height={30}
                        alt="logo"
                        className="focus:border-none active:border-none"
                      />
                  )}
                </button>
              </div>
            </div>
          </div>  
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
