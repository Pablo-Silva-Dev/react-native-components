import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 96px;
  margin: 2px 4px;
  border-radius: 4px;
  elevation: 4;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  color: ${({ theme }) => theme.colors.title};
`;
