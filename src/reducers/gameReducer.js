import {WINNING_COMBINATIONS} from '../shared/constants';
export const initialState = {
  numberOfRows: 3,
  winningCombinations: WINNING_COMBINATIONS,
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GRID_OF_NINE_ELEMENTS':
      return {
        ...state,
        numberOfRows: 3,
        winningCombinations: WINNING_COMBINATIONS,
      };
      break;
    default:
      return state;
  }
};

export default gameReducer;
