import React from 'react';
import styled from 'styled-components/native';
import {CIRCLE, CROSS} from '../shared/constants';
import Circle from './Circle';
import Cross from './Cross';

const Cell = props => {
  const renderContent = () => {
    switch (props.value) {
      case CIRCLE:
        return <Circle color="white" />;
      case CROSS:
        return <Cross color="white" />;
      default:
        return <DefaultText onPress={handlePress} />;
    }
  };

  const handlePress = () => {
    props.onPress(props.index);
  };

  return <Container>{renderContent()}</Container>;
};

export const Container = styled.View`
  align-items: center;
  border-color: #fff;
  border-width: 1px;
  justify-content: center;
  width: 100px;
  height: 100px;
`;
export const DefaultText = styled.Text`
  width: 100px;
  height: 100px;
`;
export default Cell;
