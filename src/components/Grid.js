import React from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import Cell from './Cell';

const Grid = props => {
  const gridData = useSelector(state => state);
  const numberOfRows = gridData.game.numberOfRows;
  const renderRows = () => {
    const rows = [];

    for (let i = 0; i < numberOfRows; ++i) {
      rows.push(<Row key={i}>{renderRow(i)}</Row>);
    }

    return rows;
  };

  const renderRow = number => {
    const cells = [];
    const {grid, onPress} = props;

    for (let i = 0; i < numberOfRows; ++i) {
      const index = number * numberOfRows + i;

      cells.push(
        <Cell key={i} value={grid[index]} index={index} onPress={onPress} />,
      );
    }

    return cells;
  };

  return <Container>{renderRows()}</Container>;
};

export const Container = styled.View`
  background-color: red;
  border-color: #fff;
  border-width: 1px;
  display: flex;
  flex-direction: column;
`;
export const Row = styled.View`
  display: flex;
  flex-direction: row;
`;
export default Grid;
