import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 10px 14px;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 300px;
  margin-top: 10px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
  }
`;

function InputField({ placeholder, value, onChange }) {
  return <StyledInput placeholder={placeholder} value={value} onChange={onChange} />;
}

export default InputField;