import styled from 'styled-components/native';
import CheckBox from '@react-native-community/checkbox';

export const Container = styled.View`
  padding: 0 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 48px;
`;

export const CheckBoxStyled = styled.View`
  max-width: 16px;
  max-height: 16px;
`;

export const Check = styled(CheckBox)``;

export const TextView = styled.View`
  position: relative;
  width: 70%;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity``;

export const Line = styled.View`
  height: 1px;
  width: 100px;
  background-color: #1db863;
  position: absolute;
  top: 20%;
`;
