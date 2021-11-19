/* eslint-disable no-shadow */
import React, {useState} from 'react';

import {Header, List} from '../../components';
import {Container, Content} from './styles';
interface TaskData {
  id: string;
  task: string;
}

const Home = () => {
  const [item, setItem] = useState('');
  const [items, setItems] = useState<TaskData[]>([]);
  const [active, setActive] = useState(false);
  console.log(item);

  const handleAddItem = () => {
    const data = {
      id: String(new Date().getTime()),
      task: item,
    };
    if (item === '') {
      return;
    }
    setItems(oldState => [...oldState, data]);
    setItem('');
  };

  const handleDeleteItem = (id: string) => {
    setItems(oldState => oldState.filter(item => item.id !== id));
  };
  return (
    <Container>
      <Header
        item={item}
        handleAddItem={handleAddItem}
        setItem={setItem}
        items={items}
      />
      <Content>
        <List
          items={items}
          handleDeleteItem={handleDeleteItem}
          active={active}
          setActive={setActive}
        />
      </Content>
    </Container>
  );
};

export {Home};
