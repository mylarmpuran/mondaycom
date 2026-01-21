import React from 'react';
import AI from "../assets/AI.png"
import { ArrowRight, Sparkle } from 'lucide-react';


const Hero = () => {

  return (
    <header className='flex flex-col items-center mt-16'>
      <img className='max-w-40' src={AI} />
      <h1 className="text-center text-slate-400 font-medium text-7xl ">From managing work,
        <br /> to doing the work for you </h1>
      <h2 className='text-center mt-5'>
        <span className='text-center text-gray-800 font-normal text-xl '>
          Agentic AI products that delivers results across projects, marketing,
          <br />  sales, operations, and engineering
        </span>
      </h2>
      <button className='flex flex-row justify-center space-x-5 items-center mt-10 w-60 h-14 bg-blue-500 border border-gray-500 rounded-full hover:bg-blue-900'>
        <h1 className='text-xl text-white'>Get startted</h1>
        <ArrowRight />

      </button>
      
      <div className="mt-5">No credit card needed  ✦  Unlimited time on Free plan</div>
    </header>
  );
}

export default Hero;
