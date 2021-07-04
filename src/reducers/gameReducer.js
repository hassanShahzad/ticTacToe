import {
  WINNING_COMBINATIONS_NINE,
  WINNING_COMBINATIONS_SIXTEEN,
} from '../shared/constants';
export const initialState = {
  numberOfRows: 3,
  winningCombinations: WINNING_COMBINATIONS_NINE,
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GRID_OF_NINE_ELEMENTS':
      return {
        ...state,
        numberOfRows: 3,
        winningCombinations: WINNING_COMBINATIONS_NINE,
      };
      break;
    case 'SET_GRID_OF_SIXTEEN_ELEMENTS':
      return {
        ...state,
        numberOfRows: 4,
        winningCombinations: WINNING_COMBINATIONS_SIXTEEN,
      };
      break;
    default:
      return state;
  }
};

export default gameReducer;
