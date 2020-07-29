import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Apple from './components/Apple';
import Orange from './components/Orange';

function App(){
  const [page, setPage] = useState('apple');
  return(
    <div className="App">
      <h1>Fruits</h1>
      <Navbar setPage={setPage} />
      <div className="content">
        { page === 'apple' ? <Apple /> : <Orange /> }
      </div>
    </div>
  )
}
 
export default App;
