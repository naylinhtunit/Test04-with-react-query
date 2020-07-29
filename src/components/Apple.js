import React from 'react';
import Panthee from './Panthee';
import { useQuery } from 'react-query';

const fetchApple = async () => {
    const res = await fetch('http://swapi.dev/api/planets/');
    return res.json();
}

const Apple = () => {
    const { data, status } = useQuery('panthee', fetchApple);

    return ( 
        <div>
            <h2>Apple</h2>
            { status === 'loading' && (
                <div>Loading data...</div>
            ) }

            { status === 'error' && (
                <div>Error fetching data...</div>
            ) }

            { status === 'success' && (
                <div>
                    { data.results.map(panthee => <Panthee key={ panthee.name } panthee={ panthee } />) }
                </div>
            ) }
        </div>
     );
}
 
export default Apple;