import React from 'react';

const Panthee = ({ panthee }) => {
    return ( 
        <div className="card">
            <h3>{ panthee.name }</h3>
            <p>Population: { panthee.population }</p>
            <p>Terrian: { panthee.terrian }</p>
        </div>
     );
}
 
export default Panthee;