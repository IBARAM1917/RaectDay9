import React, { useReducer } from 'react';
import ReducerAction from './ReducerAction';

const UseReducer = () => {
    const[state,dispatch] = useReducer(ReducerAction,0)
    return (
        <div className='container'>
            <h1>Counter</h1>
            <>
            {state}
            </>
          <p>  <button  onClick={()=>{dispatch({type:'ADD',payload:10})}}>Add</button></p>
          <p> <button  onClick={()=>{dispatch({type:'SUB',payload:5})}}>Sub</button></p>
          <p> <button  onClick={()=>{dispatch({type:'RESET',payload:0})}}>Reset</button></p>
        </div>
    );
};

export default UseReducer;