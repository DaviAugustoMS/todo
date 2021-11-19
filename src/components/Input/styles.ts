import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 56px;
  border-radius: 10px;
  background: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 21px;
  padding-left: 20px;
`;

export const TextInput = styled.TextInput``;

export const Button = styled.TouchableOpacity`
  height: 100%;
  border-left-width: 2px;
  border-color: #ebebeb;
  width: 55px;
  justify-content: center;
  align-items: center;
`;
