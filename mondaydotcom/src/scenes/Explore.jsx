import React, { useState } from 'react';
import { explore } from '../constants';
import Blur from '../assets/Blur.png'


const Explore = () => {
    const [checkedId, setCheckedId] = useState(0)
    const backgroundImage = explore[checkedId]
 
    return (
        
        <div className='mx-auto relative flex justify-center max-w-6xl mb-16 min-h-[700px] mt-10'>

            <div className='absolute top-10 flex justify-center '>
                {
                    
                    checkedId ? <img className="max-h-[750px]" src={backgroundImage.image} /> : <img className="max-h-[750px]" src={Blur} />

                }

            </div>

            <div className="absolute top-0 right-0 z-10 flex flex-col items-center min-w-[350px] h-96 border border-gray-600 rounded-3xl bg-white">

                <div className="text-xl text-gray-500 mt-4">What would you like to explore?</div>
                <div className="mx-auto mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 ">

                    {explore.map((items, index) => {
                        if(items.id>0)
                        {return(<div key={index} className="relative mx-auto w-20 flex flex-col bg-blue-200 p-4 rounded-lg shadow items-center">
                        <input
                            type="checkbox"
                            // checked={checkedId === items.id}
                            onChange={() => setCheckedId(items.id)}
                            className="mt-2 absolute top-0 left-1"
                        />
                        <div className="">{items.icon}</div>
                        <div className=" ">{items.text}</div>
                    </div>)}}

                    )}</div>
            </div>



        </div>
        
    );
}

export default Explore;
