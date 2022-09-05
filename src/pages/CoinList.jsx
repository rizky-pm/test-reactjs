import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paginaton from '@mui/material/Pagination';
import { Box, Stack, Grid } from '@mui/material';

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
      className='p-10 lg:px-20 py-10 space-y-4 bg-[#F3F7FB] flex flex-col justify-center'
    >
      <h1 className='font-bold text-[10px] text-[#ACBCCF]'>Coin List Page</h1>
      <div className='bg-white rounded-md p-8 space-y-5 container-box-shadow'>
        <h2 className='text-[#2569A5] font-bold'>Coin List</h2>
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

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <Paginaton count={10} variant='outlined' shape='rounded' />
        </Box>
      </div>
    </div>
  );
};

export default CoinList;
