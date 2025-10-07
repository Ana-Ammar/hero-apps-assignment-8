import React from 'react';

const Stat = () => {
    return (
    <div className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white text-center py-8 md:py-16 w-full">
       <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-10 ld:mb-12'>Trusted by Millions, Built for You</h1>

    <div className='md:flex grid justify-center gap-4 md:gap-16 lg:gap-20'>
        <div className="border-b-1 border-gray-400 pb-4 md:border-0 lg:border-0">
          <p className="">Total Downloads</p>
          <p className="font-black text-4xl md:text-6xl md:my-4 my-2">29.6M</p>
          <p className="">21% more than last month</p>
        </div>

        <div className="border-b-1 border-gray-400 pb-4 md:border-0 lg:border-0">
          <p className="">Total Reviews</p>
          <p className="font-black text-4xl md:text-6xl md:my-4 my-2">906K</p>
          <p className="">46% more than last month</p>
        </div>

        <div className="border-b-1 border-gray-400 pb-4 md:border-0 lg:border-0">
          <p className="">Active Apps</p>
          <p className="font-black text-4xl md:text-6xl md:my-4 my-2">132+</p>
          <p className="">31 more will Launch</p>
        </div>
    </div>
      </div>
    );
};

export default Stat;