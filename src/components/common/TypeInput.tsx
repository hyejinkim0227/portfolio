import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid var(--color-gray-400);
  border-radius: 4px;
  font-family: inherit;
  font-size: inherit;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const TypeInput = ({ multiline, maxRows, minRows, ...props }: any) => {
  return <StyledInput rows={minRows} {...props} />;
};

export default TypeInput;
