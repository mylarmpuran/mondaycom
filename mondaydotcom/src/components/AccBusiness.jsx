import React from 'react';

const AccBusiness = ({puran}) => {
  return (
    <div>
      <div className={`w-[550px] h-full ${puran.bg}`}>
        <div className="text-2xl">{puran.text}</div>
        <img src={puran.image} alt="" className="w-full" />
        
      </div>
      <div>{puran.note}</div>
    </div>
  );
}

export default AccBusiness;
