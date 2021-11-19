/* eslint-disable react-native/no-inline-styles */
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
  const paintCell = (index: number) => {
    if (index % 2 === 0) {
      return true;
    }

    return false;
  };
  return (
    <Container
      data={items}
      // @ts-ignore
      keyExtractor={item => item.id}
      renderItem={({item, index}) => (
        <Item
          styleContainer={{
            backgroundColor: paintCell(index) ? '#C4C4C430' : 'transparent',
          }}
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
