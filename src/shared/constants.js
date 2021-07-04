export const AVAILABLE = '-';
export const CIRCLE = 'O';
export const CROSS = 'X';
export const DRAW = 'draw';
export const GAMEOVER = 'Game over';
export const ICON_PADDING = 20;
export const ICON_SIZE = 100;
export const ROBOT_TURN = CROSS;
export const USER_TURN = CIRCLE;
export const STROKE_WIDTH = 8;
export const WINNING_COMBINATIONS_NINE = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const WINNING_COMBINATIONS_SIXTEEN = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
  [0, 4, 8, 12],
  [1, 5, 9, 13],
  [2, 6, 10, 14],
  [3, 7, 11, 15],
  [0, 5, 10, 15],
  [3, 6, 9, 12],
];
