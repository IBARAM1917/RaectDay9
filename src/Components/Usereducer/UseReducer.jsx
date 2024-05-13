import React, { useReducer } from 'react';
import ReducerAction from './ReducerAction';

const UseReducer = () => {
    const[state,dispatch]=useReducer(ReducerAction,0)
    return (
        <div>
            <h1>Use Reducer Hook</h1>
            <>
            {state}
            </>
           <br />
            <br />
            <button onClick={()=>{dispatch({type:'ADD'})}}>Add </button>
            <br />
            <br />
             <button  onClick={()=>{dispatch({type:'SUB'})}}>Sub</button>
        </div>
    );
};

export default UseReducer;