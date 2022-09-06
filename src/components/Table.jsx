import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTable } from 'react-table';

import { COLUMNS } from '../columns';

import './Table.css';

const Table = ({ data }) => {
  const navigate = useNavigate();
  const columns = useMemo(() => COLUMNS, []);

  const navigateToDetail = (coin) => {
    navigate(`/coin-list/${coin.id}`, { state: coin });
  };

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  const renderTableItem = (columnId, cellValue, coinValue) => {
    switch (columnId) {
      case 'id':
        return (
          <span
            onClick={() => navigateToDetail(coinValue)}
            className='underline decoration-solid text-[#0062A6] hover:cursor-pointer'
          >
            {cellValue}
          </span>
        );
      case 'name':
        return <span>{cellValue}</span>;
      case 'symbol':
        return <span>{cellValue}</span>;
      case 'rank':
        return <span>{cellValue}</span>;
      case 'type':
        return <span className='capitalize'>{cellValue}</span>;
      case 'is_active':
        return <span>{cellValue ? 'True' : 'False'}</span>;
      case 'is_new':
        return (
          <span className='py-2 px-6 text-white bg-red-500 rounded'>
            Delete
          </span>
        );

      default:
        break;
    }
  };

  return (
    <div className='rounded-lg overflow-x-auto overflow-y-hidden'>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className='th-width py-4 px-6'>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className='even:bg-[#F3F7FB] py-4 px-6'
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className='td-width'>
                      <span className='text-[#65768B] py-4 px-6 block truncate'>
                        {renderTableItem(
                          cell.column.id,
                          cell.value,
                          cell.row.values
                        )}
                      </span>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
