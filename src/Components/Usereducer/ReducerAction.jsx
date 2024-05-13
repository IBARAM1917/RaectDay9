export default function ReducerAction(state,action){
    console.log(state);
    console.log(action);
    switch (action.type) {
        case 'ADD':{
            return state+1
        }
              break;

     case 'SUB':{
            return state-1
        }
              break;
        default:{
            return state
        }
            break;
    }
}