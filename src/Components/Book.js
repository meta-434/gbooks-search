import React from 'react';

export default function Book (props) {
    return (
        <div>
            {console.log(props)}
            <h1>{props.volumeInfo.title}</h1>
        </div>
    );
}