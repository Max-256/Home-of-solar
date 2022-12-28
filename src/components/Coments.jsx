import React, { useEffect, useState, Fragment } from 'react';
import { getComents } from '../services/coments';

function Coments(props) {
    const [coments, setComents] =  useState([]);
    useEffect(() => setComents(getComents()), []);

    return (
        <Fragment>
            <h4 className='customer-coments-header'>
                what customers say about our store
            </h4>
            <div className='grid grid-1x2 grid-1x3'>
             { coments.map(coment => (                    
                <div key={coment.id} className='coment'>
                 <h5 className='comenter'>{coment.name}</h5>
                 <p>{coment.body}</p>
                </div>
            ))}
            </div>
        </Fragment>
    );
}

export default Coments;