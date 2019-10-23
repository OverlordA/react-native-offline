import {initConst} from './initConst';

export const initApp = async () => async dispatch => {
  dispatch({
    type: initConst.init,
    payload: 'init',
  });
};
