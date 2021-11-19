/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {Animated} from 'react-native';
import {Container, Title, Logo, Modal} from './styles';

const SplashScreenPage = () => {
  const [isReady, setIsReady] = useState(false);
  const [progress] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(finished => {
      if (finished) {
        setIsReady(true);
      }
    });
  }, []);
  return (
    <Modal visible={isReady}>
      <Container>
        <Logo source={require('../../assets/logo/logo.png')} />
        <Title>Seu aplicativo{'\n'}favorito de afarezes</Title>
      </Container>
    </Modal>
  );
};

export {SplashScreenPage};
