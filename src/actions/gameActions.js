import {AVAILABLE, DRAW} from '../shared/constants';
export const setGrid = () => {
  return {
    type: 'SET_GRID_OF_NINE_ELEMENTS',
  };
};

export const evaluateWinner = (board, winningCombinations) => {
  let winner = null;
  if (!board.some(place => place === AVAILABLE)) {
    winner = DRAW;
    return winner;
  }

  for (let i = 0; i < winningCombinations.length; ++i) {
    const entity = board[winningCombinations[i][0]];
    if (winningCombinations[i].every(cell => checkCell(cell, entity, board))) {
      winner = entity;
      break;
    }
  }

  return winner;
};

const checkCell = (cell, entity, board) => {
  return board[cell] === entity && board[cell] !== AVAILABLE;
};
