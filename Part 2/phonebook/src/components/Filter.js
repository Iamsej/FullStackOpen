import React from 'react';

const Filter = (props) => {

    return(
        <>
            <p>
                Search for name: {'  '}
                <input 
                value={props.value} 
                onChange={props.function}/>
            </p>
        </>
    )
}

export default Filter