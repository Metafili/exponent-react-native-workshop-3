import { initialState } from './initialState';
import { MOVEMENT, RESTART } from './actionTypes';

export const movement = (rowNum, colNum) => (dispatch) => {
  dispatch({
    type: MOVEMENT,
    rowNum,
    colNum
  });
};

export const restart = () => (dispatch) => {
  dispatch({
    type: RESTART,
    game: initialState()
  });
};
