import React from 'react';

import logo from '../../assets/todo.png';

import {Input} from '..';

import {Container, Content, Logo, Title, TitleBold} from './styles';

interface IHeaderProps {
  setItem: any;
  items: any;
  handleAddItem: any;
  item: string;
}

const Header = ({items, item, setItem, handleAddItem}: IHeaderProps) => {
  return (
    <Container>
      <Content>
        <Logo source={logo} />
        <Title>
          Você tem{' '}
          <TitleBold>
            {items?.length + ' '}
            {items?.length === 1 ? 'tarefa' : 'tarefas'}
          </TitleBold>
        </Title>
      </Content>
      <Input item={item} setItem={setItem} onPress={() => handleAddItem()} />
    </Container>
  );
};

export {Header};
