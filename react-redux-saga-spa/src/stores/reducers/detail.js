import * as types from '../action-types';

const initialState = {
  detailData: []
};

export const detail = (state = initialState, action) => {
  switch (action.type) {
    case types.GETDETAIL:
      return {
        ...state,
        detailData: action.payload
      }
    default:
      return state;
  }
}