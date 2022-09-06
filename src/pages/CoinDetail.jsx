import React from 'react';
import { useLocation } from 'react-router-dom';

const CoinDetail = () => {
  const { state } = useLocation();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className='px-20 py-10 space-y-4 bg-[#F3F7FB] h-[79.2vh] flex flex-col justify-center'>
      <h1 className='font-bold text-[10px] text-[#ACBCCF]'>Coin Detail</h1>

      <div className='bg-white rounded-md p-8 space-y-5 container-box-shadow h-[499px]'>
        <h2 className='text-[#2569A5] font-bold'>Coin Detail</h2>

        <div>
          <span className='w-36 inline-block'>ID</span>
          <span className='font-bold underline'>{state.id}</span>
        </div>
        <div>
          <span className='w-36 inline-block'>Name</span>
          <span className='font-bold'>{state.name}</span>
        </div>
        <div>
          <span className='w-36 inline-block'>Symbol</span>
          <span className='font-bold'>{state.symbol}</span>
        </div>
        <div>
          <span className='w-36 inline-block'>Type</span>
          <span className='font-bold'>{state.type}</span>
        </div>

        <div>
          <span className='w-36 inline-block'>Active</span>
          <span className='font-bold'>
            {capitalizeFirstLetter(state.is_active.toString())}
          </span>
        </div>

        <div>
          <span className='w-36 inline-block'>Is New ?</span>
          <span className='font-bold'>
            {capitalizeFirstLetter(state.is_new.toString())}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CoinDetail;
