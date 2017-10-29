import { NavigationActions as Actions } from 'react-navigation';
import R from 'ramda';

const action = (routeName, params) => Actions.navigate({ routeName, params });

export const getResetAction = (screens, lastScreenParams, key) => {
  const s = R.is(Array, screens) ? screens : [screens];

  return Actions.reset({
    index: s.length - 1,
    actions: [
      ...R.map(action, R.init(s)),
      action(R.last(s), lastScreenParams),
    ],
    key,
  });
};

export const getCurrentRoute = (state) => {
  const findCurrentRoute = (navState) => {
    if (navState.index !== undefined) {
      return findCurrentRoute(navState.routes[navState.index]);
    }
    return navState.routeName;
  };
  return findCurrentRoute(state);
};

export const navigate = (nav, screen, params) => () => nav.navigate(screen, params);

export const getParam = param => R.path(['state', 'params', param]);

export const getParamOr = (def, param) => R.pathOr(def, ['state', 'params', param]);

export const setParam = (nav, param, value) => nav.setParams({ [param]: value });

export const getParams = R.pathOr({}, ['state', 'params']);
