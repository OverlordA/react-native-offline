import {initConst} from './initConst';

const initialState = {
  isConnected: true,
  initStatus: 'unstarted',
};

export const init = async (state = initialState, action) => {
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
