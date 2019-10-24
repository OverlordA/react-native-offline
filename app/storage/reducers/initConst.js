const actionTypeManager = (actions, {prefix}) =>
  Object.keys(actions).reduce((acc, cur) => {
    acc[cur] = prefix + cur;
    return acc;
  }, {});

const types = {
  init: 'INITIALIZE',
  saveProducts: 'SAVE_PRODUCTS',
};

const prefix = {prefix: 'INIT: '};

export const initConst = actionTypeManager(types, prefix);
