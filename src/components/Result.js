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
      <TouchableOpacity onPress={onRestartGameBtnClick}>
        <ResetText>Reset</ResetText>
      </TouchableOpacity>
    </View>
  );
};

export const ResultText = styled.Text`
  color: red;
  font-family: Poppins;
  font-size: 24px;
  margin: 18px;
  text-align: center;
`;
export const ResetText = styled.Text`
  background-color: red;
  border-width: 3px;
  border-radius: 25px;
  border-color: red;
  font-family: Poppins;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  color: white;
  width: 250px;
  height: 50px;
  margin-bottom: 30px;
  padding: 5px;
`;
export default Result;
