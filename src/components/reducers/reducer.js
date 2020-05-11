import * as actions from '../Action/actionTypes';
export default function(state = {}, action) {
    console.log("action type => ", action.type);
    switch (action.type) {
      case actions.SET_BOOK_LIST:
        return { data: action.payload };
      default:
        return state;
    }
}