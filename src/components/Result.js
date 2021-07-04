import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {USER_TURN, ROBOT_TURN, DRAW} from '../shared/constants';

const Result = props => {
  const getResultMessage = () => {
    const {result} = props;

    switch (result) {
      case USER_TURN:
        return 'You are the winner';
      case ROBOT_TURN:
        return 'Robot is the winner';
      case DRAW:
        return 'The game is draw';
    }
  };
  const {onRestartGameBtnClick} = props;

  return (
    <View>
      <ResultText>{getResultMessage()}</ResultText>
      <ResetButton onPress={onRestartGameBtnClick}>
        <ResetText>Reset</ResetText>
      </ResetButton>
    </View>
  );
};

export const ResultText = styled.Text`
  color: red;
  font-size: 24px;
  margin: 18px;
  text-align: center;
`;
export const ResetButton = styled.TouchableOpacity`
  background-color: red;
  border-color: red;
  border-radius: 25px;
  border-width: 3px;
  margin-bottom: 30px;
`;
export const ResetText = styled.Text`
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  color: white;
  width: 250px;
  height: 50px;
  padding: 5px;
`;
export default Result;
