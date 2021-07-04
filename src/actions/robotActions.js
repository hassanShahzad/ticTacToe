import {AVAILABLE} from '../shared/constants';
export const getAvailablePositions = grid => {
  // returns an array of available cells
  let available = [];
  grid.forEach((cell, cellIndex) => {
    if (cell === AVAILABLE) {
      available.push(cellIndex);
    }
  });
  return available;
};

export const onRobotTurn = grid => {
  const positions = getAvailablePositions(grid);
  const choice = positions[Math.floor(Math.random() * positions.length)];
  return choice;
};
