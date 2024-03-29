import styled from "styled-components";

export const TodoHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid black;
  margin: 1rem;
`;

export const TodoCardItem = styled.li`
  padding: 1rem;
  border: 1px solid black;
  text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
`;
