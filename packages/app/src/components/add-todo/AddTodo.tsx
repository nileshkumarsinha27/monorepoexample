import React, { FC, useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled';
import { Colors, Spacings, TextField, Title, Button, MediaQueries } from '@monorepo/components';

export interface AddTodoProps {
  addTodo: (value: string) => void;
}

const AddTodo: FC<AddTodoProps> = ({ addTodo }: AddTodoProps) => {
  const [todoText, updateTodotext] = useState<string>('');
  const [resetInput, toggleResetInput] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleCreateTodo = () => {
    addTodo(todoText);
    toggleResetInput(true);
  };
  useEffect(() => {
    if (resetInput) {
      toggleResetInput(false);
    }
  }, [resetInput]);
  return (
    <AddTodoContainer>
      <Title>Add Todo</Title>
      <Spacer />
      <TextField
        handleChange={(value: string) => updateTodotext(value)}
        placeholder="Add Todo Item"
        resetInput={resetInput}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleCreateTodo();
            inputRef?.current?.blur();
          }
        }}
        ref={inputRef}
      />
      <Spacer />
      <StyledButton onClick={handleCreateTodo} buttonText="Create" />
    </AddTodoContainer>
  );
};

export default AddTodo;

const AddTodoContainer = styled.div`
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
  input {
    width: 70%;
    color: ${Colors.white};
    &::placeholder {
      color: ${Colors.white};
    }
    &:focus {
      color: ${Colors.teal};
      &::placeholder {
        color: ${Colors.teal};
      }
    }
  }
  ${MediaQueries.mobileOnly} {
    width: 90%;
    margin: 100px auto 0;
  }
`;

const Spacer = styled.div`
  height: ${Spacings.large};
`;

const StyledButton = styled(Button)`
  width: 25%;
  height: 40px;
  border: none;
  outline: none;
  cursor: pointer;
  background: ${Colors.teal};
  color: ${Colors.white};
  border-radius: 5px;
  &:hover {
    color: ${Colors.teal};
    background: ${Colors.white};
    border: 1px solid ${Colors.teal};
  }
`;
