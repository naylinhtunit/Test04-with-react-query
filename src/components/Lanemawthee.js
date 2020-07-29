import React from 'react';

const Lanemawthee = ({ lanemawthee }) => {
    return ( 
        <div className="card">
            <h3>{ lanemawthee.name }</h3>
            <p>Gender : { lanemawthee.gender }</p>
            <p>Birth year : { lanemawthee.birth_year }</p>
        </div>
     );
}
 
export default Lanemawthee;