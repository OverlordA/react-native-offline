import {initConst} from './initConst';

export const initApp = payload => dispatch => {
  dispatch({
    type: initConst.init,
    payload: payload,
  });
};

export const saveProducts = payload => dispatch => {
  dispatch({
    type: initConst.saveProducts,
    payload,
  });
};
