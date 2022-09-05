import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Paginaton from '@mui/material/Pagination';

import Table from '../components/Table';

const CoinList = () => {
  const [data, setData] = useState([]);

  console.log(data);

  const fetchData = async () => {
    return await axios
      .get('https://api.coinpaprika.com/v1/coins/')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const paginate = (data, pageSize, pageNumber) => {
    return data.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  };

  const coinsData = paginate(data, 4, 1);

  console.log(coinsData);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        padding: '10px 20px',
      }}
      className='py-10 px-20 bg-red-500'
    >
      <h1 className='text-6xl'>Coin List Page</h1>
      <div
        style={{
          boxShadow: '0px 4px 8px rgba(0, 148, 255, 0.25)',
          borderRadius: '10px',
          backgroundColor: 'white',
          padding: '40px',
        }}
      >
        <span>Coin List</span>
        <div
          style={{
            display: 'flex',
            gap: 10,
          }}
        >
          <input
            style={{
              border: '2px solid #E5E5E5',
            }}
            type='text'
            placeholder='Select'
          />
          <input
            type='text'
            placeholder='Search'
            style={{
              border: '2px solid #E5E5E5',
            }}
          />
        </div>
        <Table data={coinsData} />
        {/* <Paginaton count={10} variant='outlined' shape='rounded' /> */}
      </div>
    </div>
  );
};

export default CoinList;
