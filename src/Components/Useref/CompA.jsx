import React, { useRef } from 'react';

const CompA = () => {
   
    return (
        <div>
            <h1> Component Without UseRef Hook</h1>
            <input type='text' placeholder='Enter Your name'  />
            <button>Click</button>
        </div>
    );
};

export default CompA;