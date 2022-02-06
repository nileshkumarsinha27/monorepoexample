import styled from '@emotion/styled';
import React, { forwardRef, InputHTMLAttributes, useEffect, useState } from 'react';
import Spacings from '../../tokens/Spacings';
import Colors from '../../tokens/Colors';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  handleChange: (value: string) => void;
  resetInput: boolean;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ handleChange, resetInput, ...props }: TextFieldProps, ref) => {
    const [inputValue, setInputValue] = useState<string>('');
    useEffect(() => {
      handleChange(inputValue);
    }, [inputValue, handleChange]);
    useEffect(() => {
      if (resetInput) {
        setInputValue('');
      }
    }, [resetInput]);
    return (
      <Input
        ref={ref}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        {...props}
      />
    );
  }
);

TextField.displayName = 'TextField';

export default TextField;

const Input = styled.input`
  border: 0;
  outline: none;
  padding: ${Spacings.medium} ${Spacings.xSmall} ${Spacings.xSmall};
  background: ${Colors.transparent};
  border-bottom: 1px solid ${Colors.white};
  &:focus {
    border-color: ${Colors.teal};
  }
`;
