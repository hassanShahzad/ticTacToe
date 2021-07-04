import React, {useEffect, useRef, useState} from 'react';
import Grid from './Grid';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {
  AVAILABLE,
  DRAW,
  GAMEOVER,
  ROBOT_TURN,
  USER_TURN,
  WINNING_COMBINATIONS,
} from '../shared/constants';

const Game = props => {
  const [grid, setGrid] = useState(new Array(9).fill(AVAILABLE));
  const [entiyTurn, setEntiyTurn] = useState(USER_TURN);
  const isRenderingAllow = useRef(true);
  useEffect(() => {
    const result = evaluateWinner();
    if (result !== null) {
      props.onFinish(result);
    }
  }, [grid]);

  const fillCell = (index, entity, onFinish = f => f) => {
    if (grid[index] !== AVAILABLE) {
      return;
    }
    const gridDataArray = [...grid];
    gridDataArray[index] = entity;
    setGrid(gridDataArray);
    if (entity == USER_TURN) {
      isRenderingAllow.current = false;
    }
    onFinish();
  };

  const evaluateWinner = () => {
    let winner = null;

    if (!grid.some(place => place === AVAILABLE)) {
      setEntiyTurn(GAMEOVER);
      winner = DRAW;
    }

    for (let i = 0; i < WINNING_COMBINATIONS.length; ++i) {
      const entity = grid[WINNING_COMBINATIONS[i][0]];

      if (WINNING_COMBINATIONS[i].every(cell => checkCell(cell, entity))) {
        winner = entity;
        break;
      }
    }

    return winner;
  };

  const checkCell = (cell, entity) => {
    return grid[cell] === entity && grid[cell] !== AVAILABLE;
  };

  const handlePress = index => {
    fillCell(index, USER_TURN, () => {
      setEntiyTurn(ROBOT_TURN);
    });
  };

  return (
    <View>
      {entiyTurn != GAMEOVER ? (
        <TurnText>
          {entiyTurn == USER_TURN ? 'Your turn' : 'Robot turn'}
        </TurnText>
      ) : (
        <TurnText>{entiyTurn}</TurnText>
      )}

      <Grid grid={grid} onPress={handlePress} />
    </View>
  );
};
export const TurnText = styled.Text`
  color: red;
  font-family: Poppins;
  font-size: 24px;
  margin: 18px;
  text-align: center;
`;
export default Game;
