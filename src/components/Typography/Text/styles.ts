import styled from 'styled-components/native'

export const Text = styled.Text`
  font-size: 14px;
  font-family: ${({theme}) => theme.fonts.primary_400};
  color: ${({theme}) => theme.colors.text};
`;