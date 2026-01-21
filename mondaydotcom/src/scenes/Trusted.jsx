import React, { useState } from 'react';
import { trusted } from '../constants';

const Trusted = () => {


    return (
        <div className="flex flex-col items-center mb-20">
        <div className="">Trusted by over 60% of the Fortune 500 </div>
        <div className='flex flex-row  space-x-32 mt-10'>


            {trusted.map((items, index) => (

                <div key={index} className=" max-w-32 border border-green-500 ">

                    <img src={items.image} alt="" />

                </div>)

            )}


        </div>
        </div>
    );
}

export default Trusted;
