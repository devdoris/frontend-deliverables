import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #4f46e5;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  transition: background 0.3s;

  &:hover {
    background-color: #4338ca;
  }
`;

function Button({ text, onClick }) {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
}

export default Button;