import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import {setGrid} from '../actions/gameActions';

function HomeScreen({navigation}) {
  const dispatch = useDispatch();
  const smallGameReducer = () => dispatch(setGrid(9));
  const mediumGameReducer = () => dispatch(setGrid(16));

  playSmallGame = () => {
    smallGameReducer();
    navigation.navigate('GameScreen');
  };
  playMediumGame = () => {
    mediumGameReducer();
    navigation.navigate('GameScreen');
  };
  return (
    <Container>
      <BrandNameText>ON AIR</BrandNameText>
      <BrandMessageText>all things live</BrandMessageText>
      <PlayButton onPress={playSmallGame}>
        <StartGameText>Play 3x3 Game</StartGameText>
      </PlayButton>
      <PlayButton onPress={playMediumGame}>
        <StartGameText>Play 4x4 Game</StartGameText>
      </PlayButton>
    </Container>
  );
}

export const Container = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`;
export const BrandNameText = styled.Text`
  border-width: 3px;
  border-radius: 10px;
  border-color: red;
  color: red;
  font-size: 70px;
  padding: 5px;
  text-align: center;
`;
export const BrandMessageText = styled.Text`
  color: black;
  font-size: 40px;
  margin-bottom: 30px;
  text-align: center;
`;
export const PlayButton = styled.TouchableOpacity`
  background-color: red;
  border-color: red;
  border-radius: 25px;
  border-width: 3px;
  margin-bottom: 30px;
`;
export const StartGameText = styled.Text`
  color: white;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  width: 250px;
  height: 50px;
  padding: 5px;
`;
export default HomeScreen;
