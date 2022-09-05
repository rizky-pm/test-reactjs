import React from 'react';

const Navbar = () => {
  return (
    <div
      style={{
        position: 'relative',
        padding: '100px 40px',
        boxShadow: '0px 4px 19px rgba(0, 0, 0, 0.07)',
      }}
      className='py-10 px-20 space-x-20'
    >
      <div style={{ position: 'absolute', bottom: 0 }}>
        <span
          style={{
            marginRight: '40px',
          }}
        >
          Home
        </span>
        <span
          style={{
            borderBottom: '4px #2569A5 solid',
            color: '#1E5387',
            fontWeight: 'bold',
          }}
        >
          Coin List
        </span>
      </div>
    </div>
  );
};

export default Navbar;
