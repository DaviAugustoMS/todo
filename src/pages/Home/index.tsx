/* eslint-disable no-shadow */
import React, {useState} from 'react';
import {Alert} from 'react-native';
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
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState('');

  const handleAddItem = () => {
    const data = {
      id: String(new Date().getTime()),
      task: item,
    };
    if (item === '') {
      return;
    }

    const repeat = items?.filter(item => item.task === data.task);

    if (repeat.length === 0) {
      setItems(oldState => [...oldState, data]);
      setItem('');
    } else {
      Alert.alert(
        'Atenção',
        'Não é possível adicionar o mesmo item duas vezes',
      );
    }
  };

  const handleUpdateTask = (id: string) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        return {...item, task: update};
      }
      return item;
    });
    setItems(newItems);
    setEdit(false);
    Alert.alert('Alteraçào', 'Task alterado com sucesso.');
  };

  const handleDeleteItem = (id: string) => {
    setItems(oldState => oldState.filter(item => item.id !== id));
    Alert.alert('Deletado', 'Task deletada com sucesso.');
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
          edit={edit}
          setEdit={setEdit}
          setUpdate={setUpdate}
          handleUpdateTask={handleUpdateTask}
        />
      </Content>
    </Container>
  );
};

export {Home};
