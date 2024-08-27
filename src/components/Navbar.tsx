import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-4'>
            {/* Search Bar */}
            <div className="hidden md:flex gap-3 ring-[1.5px] ring-gray-300 text-xs px-3 py-1 rounded-full">
                <Image src="/search.png" alt='search' width={18} height={14} />
                <input type="text" placeholder='Search...' className='w-[200px] bg-transparent outline-none' />
            </div>

            {/* Icons and User */}
            <div className="flex items-center gap-7 justify-end w-full">
                <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
                    <Image src="/message.png" alt='' width={23} height={23} />
                </div>

                <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
                    <Image src="/announcement.png" alt='' width={23} height={23} />
                    <div className='absolute -top-4 -right-4 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs'>
                        1
                    </div>
                </div>

                <div className='flex gap-2 items-center justify-center'>
                    <div className='flex flex-col text-right'>
                        <span className='text-xs font-medium'>John Doe</span>
                        <span className='text-[10px] text-gray-500'>Admin</span>
                    </div>
                    <Image src="/avatar.png" alt='' width={36} height={36} className='rounded-full' />
                </div>
            </div>
        </div>
    );
};

export default Navbar;