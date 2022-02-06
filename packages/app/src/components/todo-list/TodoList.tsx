import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import {
  Colors,
  Icon,
  Opacities,
  Spacings,
  Text,
  Title,
  Icons,
  MediaQueries
} from '@monorepo/components';
import { Todo } from '../../views/home/Home';

export interface TodoListProps {
  todos: Todo[];
  deleteTodo: (index: number) => void;
  markAsResolved: (index: number) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, deleteTodo, markAsResolved }: TodoListProps) => {
  const [isMouseOver, toggleMouseOver] = useState<boolean>(false);
  const [hoveredIndex, updateHoverIndex] = useState<number>(-1);
  return (
    <TodoListContainer>
      <Title>Todo List</Title>
      <Spacer />
      <TodoContianer>
        {todos.map(({ label, resolved }: Todo, index) => (
          <TodoEntity
            onMouseEnter={() => {
              toggleMouseOver(true);
              updateHoverIndex(index);
            }}
            onMouseOver={() => {
              if (!isMouseOver) {
                toggleMouseOver(true);
                updateHoverIndex(index);
              }
            }}
            onMouseOut={() => {
              toggleMouseOver(false);
              updateHoverIndex(-1);
            }}
            key={`${label}-${index}`}
          >
            <Section markResolved={resolved}>
              <Text>{label}</Text>
              <MouseOverContainer
                onMouseEnter={() => {
                  toggleMouseOver(true);
                  updateHoverIndex(index);
                }}
                onMouseOver={() => {
                  if (!isMouseOver) {
                    toggleMouseOver(true);
                    updateHoverIndex(index);
                  }
                }}
                onMouseOut={() => {
                  toggleMouseOver(false);
                  updateHoverIndex(-1);
                }}
                isMouseOver={isMouseOver && hoveredIndex === index}
              >
                <StyledIcon
                  icon={resolved ? Icons.close : Icons.check}
                  color={Colors.tealGreen}
                  onClick={() => {
                    markAsResolved(index);
                    toggleMouseOver(false);
                  }}
                />
                <StyledIcon
                  icon={Icons.trash}
                  color={Colors.tealGreen}
                  onClick={() => {
                    deleteTodo(index);
                    toggleMouseOver(false);
                  }}
                />
              </MouseOverContainer>
            </Section>
          </TodoEntity>
        ))}
      </TodoContianer>
    </TodoListContainer>
  );
};

export default TodoList;

const TodoListContainer = styled.div`
  width: 45%;
  border-radius: 5px;
  box-shadow: 0 0 31px 0 ${Colors.boxShadow1};
  background: ${Colors.spearMint};
  padding: ${Spacings.large};
  box-sizing: border-box;
  justify-content: center;
  display: flex;
  min-height: 300px;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: ${Spacings.large};
    color: ${Colors.white};
  }
  ${MediaQueries.mobileOnly} {
    width: 90%;
    margin: ${Spacings.large} auto;
  }
`;

const Spacer = styled.div`
  height: ${Spacings.large};
`;

const TodoContianer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  ${MediaQueries.mobileOnly} {
    width: 90%;
  }
`;

const TodoEntity = styled.div`
  background: ${Colors.white};
  width: 90%;
  min-height: 30px;
  box-sizing: content-box;
  padding: ${Spacings.medium} 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0 0 31px 0 ${Colors.boxShadow1};
  flex-wrap: wrap;
  margin: ${Spacings.xSmall} ${Spacings.xSmall} 0 0;
  position: relative;
`;

const Section = styled.div<{ markResolved: boolean }>(
  ({ markResolved }) => `
color: ${Colors.teal};
font-weight: 600;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
width: 100%;
span {
  white-space: break-spaces;
  text-align: center;
  text-decoration: ${markResolved ? 'line-through' : 'normal'};
  display: inline-block;
  width: 60%;
  overflow: initial;
}
`
);

const MouseOverContainer = styled.div<{ isMouseOver: boolean }>(
  ({ isMouseOver }) => `
width: 30%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
justify-content: space-around;
${MediaQueries.desktop}{
  opacity: ${isMouseOver ? Opacities.full : Opacities.none};
  animation: opacity 0.3s;
}
`
);

const StyledIcon = styled(Icon)`
  cursor: pointer;
`;
