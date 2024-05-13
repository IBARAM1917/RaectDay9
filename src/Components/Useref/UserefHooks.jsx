import React, { useEffect, useRef, useState } from 'react';

const UserefHooks = () => {
    const[data,setData]=useState('')
    const myref= useRef()
    const minref= useRef()
    useEffect(()=>{
        myref.current.focus();
    },[])
    const handleClick=()=>{
        console.log(myref.current.value);
        minref.current=myref.current.value
        setData(data=>data+1)
    }
    return (
        <div>
            <h1> Using UseRef hook</h1>
            <input type='text' placeholder='Enter Your name' ref={myref} />
            <button onClick={handleClick}>Click</button>
            <input type='text' placeholder='Enter Your name'  />
            <button onClick={handleClick}>Click</button>
           {minref.current}
        </div>
    );
};

export default UserefHooks;