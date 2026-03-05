import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  max-width: 600px;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  border-bottom: 2px solid #ddd;
  padding: 10px;
  text-align: left;
`;

const Td = styled.td`
  border-bottom: 1px solid #eee;
  padding: 10px;
`;

function Table({ data }) {
  return (
    <StyledTable>
      <thead>
        <tr>
          <Th>Name</Th>
          <Th>Course</Th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <Td>{row.name}</Td>
            <Td>{row.course}</Td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default Table;