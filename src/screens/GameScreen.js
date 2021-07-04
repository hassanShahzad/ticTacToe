import React, {useState} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import Game from '../components/Game';
import Result from '../components/Result';

function GameScreen({navigation}) {
  const [result, setResult] = useState(null);

  handleGameFinish = result => {
    setResult(result);
  };

  handleGameRestart = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <View pointerEvents={result ? 'none' : 'auto'}>
        <Game onFinish={handleGameFinish} />
      </View>
      {result && (
        <Result result={result} onRestartGameBtnClick={handleGameRestart} />
      )}
    </Container>
  );
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export default GameScreen;
