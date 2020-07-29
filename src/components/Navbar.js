import React from 'react';

const Navbar = ({ setPage }) => {
    return ( 
        <>
            <button onClick={() => setPage('apple')}>Apple</button>
            <button onClick={() => setPage('orange')}>Orange</button>
        </>
     );
}
 
export default Navbar;