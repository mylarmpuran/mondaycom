import React from 'react';

const AccBusiness = ({puran}) => {
  return (
    <div className='w-[600px] p-10'>
      <div className={`${puran.bg} rounded-xl`}>
        <div className="text-4xl from-neutral-300 px-10 py-10  ">{puran.text}</div>
        <img src={puran.image} alt="" className="w-full " />
        
      </div>
      <div className="w-full tracking-normal text-left font-sans text-xl font-light ">{puran.note}</div>
    </div>
  );
}

export default AccBusiness;
