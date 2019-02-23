
import {
  INC,
  DEC,
  RESET,
} from './../actions/CounterActions';

const initialState = {
  counter: 0,
};

export default function counterState(state = initialState, action) {
  switch(action.type) {
    case INC:    
      return {
        counter: state.counter + 1,
      };
    case DEC: 
      return {
        counter: state.counter - 1,
      };
    case RESET: 
      return initialState;
    default:
      return state;
  }
}