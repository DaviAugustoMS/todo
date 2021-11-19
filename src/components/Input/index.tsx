import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import {Container, TextInput, Button} from './styles';

Icon.loadFont();

const Input = () => {
  return (
    <Container>
      <TextInput placeholder="Adicione uma tarefa" />
      <Button>
        <Icon name="right" size={24} />
      </Button>
    </Container>
  );
};

export {Input};
