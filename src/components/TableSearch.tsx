import Image from 'next/image';
import React from 'react';

const TableSearch = () => {
    return (
        <div className="w-full md:w-auto">
            <div className='flex gap-4 ring-[1.5px] ring-gray-300 text-xs px-3 py-1 rounded-full'>
                <Image src="/search.png" alt='search' width={18} height={14} />
                <input type="text" placeholder='Search...' className='w-[200px] bg-transparent outline-none' />
            </div>
        </div>
    );
};

export default TableSearch;