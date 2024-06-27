// src/redux/actions.js
export const increment = (value) => ({
    type: 'INCREMENT',
    payload: value
  });
  
  export const decrement = (value) => ({
    type: 'DECREMENT',
    payload: value
  });
  
  export const reset = () => ({
    type: 'RESET'
  });
  