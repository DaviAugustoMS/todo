import React from 'react';

import logo from '../../assets/todo.png';

import {Input} from '..';

import {Container, Content, Logo, Title, TitleBold} from './styles';

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo source={logo} />
        <Title>
          Você tem <TitleBold> 3 tarefas</TitleBold>
        </Title>
      </Content>
      <Input />
    </Container>
  );
};

export {Header};
