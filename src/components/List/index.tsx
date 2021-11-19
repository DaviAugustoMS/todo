import React from 'react';

import {Item} from '../Item';

import {Container} from './styles';

interface ILists {
  items: Array<{}>;
  handleDeleteItem: Function;
  active: boolean;
  setActive: Function;
}

const List = ({items, handleDeleteItem, active, setActive}: ILists) => {
  console.log(items);

  return (
    <Container
      data={items}
      // @ts-ignore
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <Item
          // @ts-ignore
          task={item.task}
          active={active}
          setActive={setActive}
          // @ts-ignore
          onPress={() => handleDeleteItem(item.id)}
        />
      )}
    />
  );
};

export {List};
