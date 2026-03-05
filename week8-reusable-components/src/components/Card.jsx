import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  max-width: 400px;
`;

const CardTitle = styled.h2`
  margin: 0 0 10px;
  font-size: 22px;
  color: #111827;
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #374151;
`;

function Card({ title, description }) {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardWrapper>
  );
}

export default Card;