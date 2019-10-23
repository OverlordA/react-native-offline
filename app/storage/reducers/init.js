import {initConst} from './initConst';

const initialState = {
  isConnected: true,
};

export const init = (state = initialState, action) => {
  switch (action.type) {
    case initConst.init: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
