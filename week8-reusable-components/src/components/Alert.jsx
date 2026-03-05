import React from "react";
import styled from "styled-components";

const AlertBox = styled.div`
  background-color: #fde68a;
  color: #92400e;
  padding: 12px 20px;
  border-radius: 8px;
  margin: 15px 0;
  font-weight: 500;
`;

function Alert({ message }) {
  return <AlertBox>{message}</AlertBox>;
}

export default Alert;