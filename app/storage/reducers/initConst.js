const types = {
  init: 'INIT',
};

const actionTypeManager = (actions, {prefix}) =>
  Object.keys(actions).reduce((acc, cur) => {
    acc[cur] = prefix + cur;
    return acc;
  }, {});

const prefix = {prefix: 'LOAD: '};

export const initConst = actionTypeManager(types, prefix);
