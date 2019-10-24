import {initConst} from './initConst';

const initialState = {
  initStatus: 'initialized false ',
};

export const init = (state = initialState, action) => {
  switch (action.type) {
    case initConst.init: {
      return {
        ...state,
        initStatus: action.payload,
      };
    }
    default:
      return state;
  }
};
