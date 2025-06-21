import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-lg'> 
      <div className='flex justify-between items-center w-[75%] mx-auto py-7 text-white'> 
        <div className='text-3xl font-bold'>KS</div>
        <div>
          <ul type="none" className='flex justify-center items-center gap-10'>
            <li><button className='hover:text-gray-200 transition-colors cursor-pointer text-gray-500 '>Home</button></li>
            <li><button className='hover:text-gray-200 transition-colors cursor-pointer text-gray-500 '>About</button></li>
            <li><button className='hover:text-gray-200 transition-colors cursor-pointer text-gray-500 '>Work</button></li>
            <li><button className='hover:text-gray-200 transition-colors cursor-pointer text-gray-500 '>Contact</button></li>
          </ul>
        </div>
        <div>
            <Button className={"cursor-pointer"}>Book a Call</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;