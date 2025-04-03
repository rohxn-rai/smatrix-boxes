import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto px-5 flex justify-between items-center">
        <div className="hidden md:flex md:flex-row gap-6">
          <Image src="/box.png" height={50} width={50} alt="Box Icon" />
          <h1 className="text-4xl pt-2.5">Click Box Game</h1>
          <span className="text-white/40 pt-5">By Rohan Rai</span>
        </div>
        <div className="flex md:hidden md:flex-row gap-3">
          <Image src="/box.png" height={25} width={40} alt="Box Icon" />
          <h1 className="text-3xl pt-2">Click Box Game</h1>
          <span className="text-white/40 pt-3.5">By Rohan Rai</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
