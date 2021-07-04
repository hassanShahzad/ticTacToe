import React, {useEffect, useRef, useState} from 'react';
import Grid from './Grid';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {AVAILABLE, GAMEOVER, ROBOT_TURN, USER_TURN} from '../shared/constants';
import {evaluateWinner} from '../actions/gameActions';
import {onRobotTurn} from '../actions/robotActions';

const Game = props => {
  const gridData = useSelector(state => state);
  const numberOfRows = gridData.game.numberOfRows;
  const gridSize = numberOfRows * numberOfRows;
  const winningPositions = gridData.game.winningCombinations;
  const [grid, setGrid] = useState(new Array(gridSize).fill(AVAILABLE));
  const [entiyTurn, setEntiyTurn] = useState(USER_TURN);
  const isRenderingAllow = useRef(true);

  useEffect(() => {
    const result = evaluateWinner(grid, winningPositions);
    if (result !== null) {
      props.onFinish(result);
      setEntiyTurn(GAMEOVER);
    } else if (!isRenderingAllow.current) {
      isRenderingAllow.current = true;
      setTimeout(() => {
        const robotChoice = onRobotTurn(grid);
        fillCell(robotChoice, ROBOT_TURN);
        setEntiyTurn(USER_TURN);
      }, 1000);
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
