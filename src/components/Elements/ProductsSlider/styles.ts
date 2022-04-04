import styled from "styled-components/native";

export const Container = styled.ScrollView`
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.element_base};
  elevation: 8;
`;
