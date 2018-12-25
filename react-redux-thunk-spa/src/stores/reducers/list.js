import * as types from '../action-types';

const initialState = {
  datalist: []
};

export const list = (state = initialState, action) => {
  switch (action.type) {
    case types.GETLIST:
      return {
        ...state,
        datalist: action.payload
      }
    default:
      return state;
  }
}