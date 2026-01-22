import React from 'react';
import AccBusiness from '../components/AccBusiness';
import { AccBusinessItems } from '../constants';

const AccelerateBusiness = () => {
  return (
      <div className='flex flex-row justify-center items-center h-[650px] w-full border border-red-700 my-20 '>
        <div className='flex justify-center items-center border border-green-600 w-3/4 '>
          
              {AccBusinessItems.map((items, index) => ( <AccBusiness key={index} puran={items} className="bg-blue-700" />)

                  
              )}
              </div>
          
      </div>
  );
}

export default AccelerateBusiness;
