import {initConst} from './initConst';

export const initApp = payload => dispatch => {
  dispatch({
    type: initConst.init,
    payload: payload,
  });
};
