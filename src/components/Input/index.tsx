import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import {Container, TextInput, Button} from './styles';
import {TouchableOpacityProps} from 'react-native';

interface InputProps extends TouchableOpacityProps {
  setItem: () => void;
  item: string;
}

const Input = ({setItem, onPress, item}: InputProps) => {
  return (
    <Container>
      <TextInput
        value={item}
        onChangeText={setItem}
        placeholder="Adicione uma tarefa"
      />
      <Button onPress={onPress}>
        <Icon name="right" size={24} />
      </Button>
    </Container>
  );
};

export {Input};
