import styled from "styled-components/native";


export const SubTitle = styled.Text`
  font-size: 16px;
  font-family: ${({theme}) => theme.fonts.primary_600};
  color: ${({theme}) => theme.colors.title};
`;
