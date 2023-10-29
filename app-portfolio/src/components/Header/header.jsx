'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxOffset = scrollY * 0.5; // Adjust the multiplier for the parallax effect

  const textStyles1 = {
    fontFamily: 'Witch, sans-serif',
    fontSize: '50px', 
    position: 'absolute', 
    top: '20%', 
    textAlign: 'center', 
    width: '100%', 
    color: '#F8BE8E', 
  };
  
  const textStyles2 = {
    fontFamily: 'Diabolica, sans-serif',
    position: 'absolute',
    top: '30%', 
    textAlign: 'center',
    width: '100%',
  };

  const moonStyles = {
    transform: `translateY(${parallaxOffset}px)`,
  };

  return (
    <div className="relative h-screen">
      <div className="parallax-container">
        <div className="aspect-w-16 aspect-h-9" style={moonStyles}>
          <Image src="/moon.png" layout="fill" objectFit="cover" alt="Moon" />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full d-flex flex-column align-items-center justify-content-center">
        <h1
          className="mb-4 text-2xl"
          style={textStyles1}
        >
          Hi I am Buhushika!
        </h1>
        <h1
          className="text-lg text-orange-600"
          style={textStyles2}
        >
          Developer | Writer | Researcher
        </h1>
      </div>
    </div>
  );
};

export default Header;
