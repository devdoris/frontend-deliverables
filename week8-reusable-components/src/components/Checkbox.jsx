import React from "react";
import styled from "styled-components";

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 16px;
`;

const Label = styled.label`
  margin-left: 8px;
  color: white;
`;

function Checkbox({ label, checked, onChange }) {
  return (
    <CheckboxWrapper>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <Label>{label}</Label>
    </CheckboxWrapper>
  );
}

export default Checkbox;