import React from "react";
import { useLocation } from "react-router-dom";
import {mcc_logo} from "../assets"
import { navigation } from "../constants";

const Header = () => {
  return (
    <header className=" bg-cyan-600 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div>
          <a href="#" className="text-white font-bold text-xl">
            My App
          </a>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
    // <div className="fixed top-0 w-full z-50 bg-sky-950 lg:bg-sky-950 backdrop-blur-sm border-b border-neutral-600 lg:backdrop-blur-sm ">

    //   <div className=" flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4"></div>
    //   <a href="#hero" className="block w-[12rem] xl:mr-8 ">
    //     <img src={mcc_logo} alt="MCC" width={190} height={50}/>
    //   </a>
    //   <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-neutral-800 lg:static lg:flex lg:mx-auto lg:bg-transparent">
    //     <div className="relative z-2 flex flex-col items-center">
    //       {navigation.map((item)=> (
    //         <a key={item.id} href={item.url}>
    //           {item.title}
    //         </a>
    //       ))
    //       }
    //     </div>
    //   </nav>

    // </div>
  );
};

export default Header;
