import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paginaton from '@mui/material/Pagination';
import { Box, Stack, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

import Table from '../components/Table';

const CoinList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [search, setSearch] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

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

  const coinsData = paginate(data, pageSize, page);
  console.log(page);

  const handleChangePage = (e, pg) => {
    setPage(pg);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSelect = (e) => {
    setSelectedValue(e.target.value);
  };

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

        <Stack
          component={'div'}
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
        >
          <Box sx={{ minWidth: 215 }}>
            <FormControl fullWidth size='small'>
              <InputLabel id='select-label'>Select Type</InputLabel>
              <Select
                labelId='select-label'
                id='select'
                value={selectedValue}
                label='Select Type'
                onChange={handleSelect}
              >
                <MenuItem value={''}>
                  <em>All</em>
                </MenuItem>
                <MenuItem value={'coin'}>Coin</MenuItem>
                <MenuItem value={'token'}>Token</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <TextField
            id='outlined-basic'
            variant='outlined'
            placeholder='Search'
            onChange={(e) => handleSearch(e)}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            size='small'
          />
          <button className='py-2 px-3 bg-[#2569A5] w-[82px] rounded-sm text-white'>
            Search
          </button>
        </Stack>

        <Table data={coinsData} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <Paginaton
            count={10}
            variant='outlined'
            shape='rounded'
            onChange={handleChangePage}
          />
        </Box>
      </div>
    </div>
  );
};

export default CoinList;
