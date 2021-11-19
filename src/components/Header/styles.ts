import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 150px;
  background-color: #8257e5;
  padding: 50px 20px;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const Logo = styled.Image`
  width: 64px;
  height: 26px;
`;

export const Title = styled.Text`
  font-weight: normal;
  font-size: 18px;
  color: #ffffff;
`;

export const TitleBold = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
`;
