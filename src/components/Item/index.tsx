/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Feather';
import Close from 'react-native-vector-icons/AntDesign';
import {TouchableOpacityProps} from 'react-native';
import {
  Container,
  TextView,
  Text,
  Button,
  CheckBoxStyled,
  Line,
  ViewButton,
  Input,
} from './styles';

interface IItem extends TouchableOpacityProps {
  styleContainer?: any;
  task: string;
  setActive: Function;
  active: boolean;
  edit: boolean;
  setEdit: Function;
  setUpdate: Function;
  handleUpdateTask: Function;
}

const Item = ({
  active,
  styleContainer,
  task,
  setActive,
  onPress,
  edit,
  setEdit,
  setUpdate,
  handleUpdateTask,
}: IItem) => {
  console.log(task);

  return (
    <Container style={styleContainer}>
      <CheckBoxStyled>
        <CheckBox
          style={{width: 16, height: 16}}
          onCheckColor="#fff"
          onFillColor="#1db863"
          onTintColor="#1db863"
          lineWidth={1.0}
          boxType="square"
          tintColor={active ? '#1DB863' : '#B2B2B2'}
          value={active}
          onValueChange={value => setActive(value)}
        />
      </CheckBoxStyled>

      <TextView>
        {edit ? (
          <Input
            // value={edit ? '' : task}
            onChangeText={text => setUpdate(text)}
          />
        ) : (
          <Text style={{color: active ? '#1DB863' : '#666'}}>{task} </Text>
        )}
        {active && <Line />}
      </TextView>
      <ViewButton>
        {edit ? (
          <>
            {/*  @ts-ignore */}
            <Button onPress={handleUpdateTask}>
              <Close name="check" size={20} color="#B2B2B2" />
            </Button>
            <Button onPress={() => setEdit(false)}>
              <Close name="close" size={20} color="#B2B2B2" />
            </Button>
          </>
        ) : (
          <>
            <Button onPress={() => setEdit(true)}>
              <Icon name="edit-3" size={20} color="#B2B2B2" />
            </Button>

            <Button onPress={onPress}>
              <Icon name="trash-2" size={20} color="#B2B2B2" />
            </Button>
          </>
        )}
      </ViewButton>
    </Container>
  );
};

export {Item};
