import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import {setGrid} from '../actions/gameActions';

function HomeScreen({navigation}) {
  const dispatch = useDispatch();
  const gameReducer = () => dispatch(setGrid());
  playGame = () => {
    gameReducer();
    navigation.navigate('GameScreen');
  };

  return (
    <Container>
      <BrandNameText>ON AIR</BrandNameText>
      <BrandMessageText>all things live</BrandMessageText>
      <TouchableOpacity onPress={playGame}>
        <StartGameText>Play Game</StartGameText>
      </TouchableOpacity>
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
  font-family: Poppins;
  font-size: 70px;
  padding: 5px;
  text-align: center;
`;
export const BrandMessageText = styled.Text`
  color: black;
  font-family: Poppins;
  font-size: 40px;
  margin-bottom: 30px;
  text-align: center;
`;
export const StartGameText = styled.Text`
  background-color: red;
  border-color: red;
  border-radius: 25px;
  border-width: 3px;
  color: white;
  font-family: Poppins;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  width: 250px;
  height: 50px;
  padding: 5px;
  margin-bottom: 30px;
`;
export default HomeScreen;
