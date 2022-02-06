import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import { Colors, MediaQueries, Spacings } from '@monorepo/components';
import AddTodo from '../../components/add-todo/AddTodo';
import { isDataExists } from '../../helpers/array';
import TodoList from '../../components/todo-list/TodoList';

export type Todo = {
  label: string;
  resolved: boolean;
};

const Home: FC = () => {
  const [todos, addTodo] = useState<Todo[]>([]);
  const deleteTodo = (index: number) => {
    const newList = [...todos];
    newList.splice(index, 1);
    addTodo(newList);
  };
  const markAsResolved = (index: number) => {
    const newList = [...todos];
    newList[index].resolved = !todos[index].resolved;
    addTodo(newList);
  };
  return (
    <HomeContainer>
      <AddTodo
        addTodo={(value) => addTodo((prev) => [...prev, { label: value, resolved: false }])}
      />
      {isDataExists(todos) && (
        <TodoList todos={todos} deleteTodo={deleteTodo} markAsResolved={markAsResolved} />
      )}
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${Spacings.xLarge};
  box-sizing: border-box;
  min-height: 100vh;
  width: 100%;
  background: ${Colors.mint};
  justify-content: space-between;
  margin: 0 auto;
  ${MediaQueries.mobileOnly} {
    flex-direction: column;
  }
`;

HomeContainer.displayName = 'HomeContainer';
