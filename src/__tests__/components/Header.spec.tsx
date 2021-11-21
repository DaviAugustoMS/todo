/* eslint-disable jest/valid-expect */
import React from 'react';
import {Header} from '../../components/Header';
import {render} from '@testing-library/react-native';

describe('Header', () => {
  it('should be able to render tasks counter correctly', async () => {
    let mockedTasksCounter = 0;

    const {getByText, rerender} = render(
      // @ts-ignore

      <Header tasksCounter={mockedTasksCounter} />,
    );

    expect(getByText('0 tarefas'));

    mockedTasksCounter = 1;
    // @ts-ignore
    rerender(<Header tasksCounter={mockedTasksCounter} />);

    expect(getByText('1 tarefa'));

    mockedTasksCounter = 2;
    // @ts-ignore

    rerender(<Header tasksCounter={mockedTasksCounter} />);

    expect(getByText('2 tarefas'));
  });
});
