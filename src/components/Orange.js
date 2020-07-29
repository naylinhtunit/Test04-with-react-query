import React from 'react';
import Lanemawthee from './Lanemawthee';
import { useQuery } from 'react-query';

const fetchOrange = async () => {
    const res = await fetch('http://swapi.dev/api/people/');
    return res.json();
}

const Orange = () => {
    const { data, status } = useQuery('lanemawthee', fetchOrange);
    return ( 
        <div>
            <h2>Orange</h2>

            { status === 'loading' && (
                <div>Loading data...</div>
            ) }

            { status === 'error' && (
                <div>Error fetching data...</div>
            ) }

            { status === 'success' && (
                <div>
                    { data.results.map(lanemawthee => <Lanemawthee key={ lanemawthee.name } lanemawthee={ lanemawthee } />) }
                </div>
            ) }
        </div>
     );
}
 
export default Orange;