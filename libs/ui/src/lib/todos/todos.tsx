import React from 'react';
import { Todo } from '@myorg/data';

import styled from '@emotion/styled';

const StyledTodos = styled.ul`
  color: pink;
`;

export const Todos = (props: { todos: Todo[] }) => {
  return (
    <StyledTodos>
      {props.todos.map((t) => (
        <li className={'todo'}>{t.title}</li>
      ))}
    </StyledTodos>
  );
};

export default Todos;
