const processChange = (change, state, action) => (
  typeof change === 'object' ? change : change(action, state)
);

export const mergeIn = change => (state, action) => ({
  ...state,
  ...(processChange(change, state, action)),
});

export const mergeInState = (stateProp, change) => (state, action) => ({
  ...state,
  [stateProp]: {
    ...state[stateProp],
    ...(processChange(change, state, action)),
  },
});
