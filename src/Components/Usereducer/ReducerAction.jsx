export default function ReducerAction(state, action) {
  //console.log(state);
  //console.log(action);
  switch (action.type) {
    case "ADD":
      {
        return state + action.payload;
      }
      break;

    case "SUB":
      {
        return state - action.payload;
      }
      break;
    case "RESET":
      {
        return action.payload;
      }
      break;

    default: {
      return state;
      break;
    }
  }
}
