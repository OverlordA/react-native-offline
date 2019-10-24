import {initConst} from './initConst';

const initialState = {
  initStatus: 'initialized false ',
  shopifyProducts: [],
};

export const init = (state = initialState, action) => {
  switch (action.type) {
    case initConst.init: {
      return {
        ...state,
        initStatus: action.payload,
      };
    }
    case initConst.saveProducts: {
      return {
        ...state,
        shopifyProducts: action.payload,
      };
    }
    default:
      return state;
  }
};
