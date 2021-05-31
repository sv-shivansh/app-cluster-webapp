import { ARRAY_GENERATED } from "./types";

export const generateNewArray = (n) => async (dispatch) => {
  function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  var i = 0;
  var x = [];
  for (i = 0; i < n; i++) {
    x.push(getRandomArbitrary(10, 500));
  }
  dispatch({
    type: ARRAY_GENERATED,
    payload: x,
  });
};
