import React from 'react';
import Image from 'next/image';

function Hero() {

    return (

        <div className='flex bg-hero w-full h-auto justify-between items-center'>
            <div className='hidden md:block w-100 md:pt-5'>
                <Image
                    src='image 2.svg'

                    width={500}
                    height={500}
                    className="top-0 left-0"
                />
            </div>
            <div className='flex flex-col items-center sm:w-full'>
                <h1 className='font-assistant font-bold lg:text-7xl text-xl md:text-3xl text-center'>MYNTRA FASHION<br /> WEEK No. 12</h1>
                <div className='pt-10 space-x-4 sm:ml-5'>
                    <button className='bg-purple-100 text-hero font-bold rounded-md px-4 py-2 hover:bg-purple-300'>MAKE YOUR ENTRY</button>
                    <button className='bg-purple-100 text-hero font-bold rounded-md px-4 py-2 hover:bg-purple-300'>CAST YOUR VOTES</button>
                </div>

            </div>
            <div className='hidden md:block mr-32'>
                <Image
                    src='rampwalk.svg'
                    width={200}
                    height={200}
                    className="top-0 left-0"
                />
            </div>
        </div>
    );
}

export default Hero;
