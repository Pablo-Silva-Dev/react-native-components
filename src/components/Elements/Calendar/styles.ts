import styled from "styled-components/native";

export const Container = styled.View`
    width: 88%;
`;

export const ShowDatesContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const DateText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.secondary_700};
  color: ${({ theme }) => theme.colors.text};
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.element_base};
`;

