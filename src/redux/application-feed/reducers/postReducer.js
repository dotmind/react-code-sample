
import { SEND_POST } from './../actions/PostActions';
 
const initialState = {
  list: [],
};

export default function postState(state = initialState, action) {
  switch (action.type) {
    case SEND_POST:
      const post = {
        id: state.list.length + 1,
        text: action.payload.value,
      };

      return {
        list: [...state.list, post],
      };
    default:
      return state;
  }
}