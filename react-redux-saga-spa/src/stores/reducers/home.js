import * as types from '../action-types';

const initialState = {
  count: 0,
  userlist: []
};

export const home = (state = initialState, action) => {
  switch (action.type) {
    case types.GETUSERS:
      return {
        ...state,
        userlist: action.payload
      }
    case types.INCREASE:
      return {
        ...state,
        count: state.count + 1
      }
    case types.DECREASE:
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state;
  }
}