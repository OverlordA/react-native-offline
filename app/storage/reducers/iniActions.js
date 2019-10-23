import {initConst} from './initConst';

export const initApp = async payload => async dispatch => {
  dispatch({
    type: initConst.init,
    payload: payload,
  });
};
