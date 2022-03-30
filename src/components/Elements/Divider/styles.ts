import styled from "styled-components/native";

export const Container = styled.View`
  width: 96%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.background};
  margin-bottom: 8px;
  margin-top: 8px;
`;
