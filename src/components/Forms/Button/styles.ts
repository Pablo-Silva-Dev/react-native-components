import styled, { css } from "styled-components/native";

interface ButtonProps {
  disabled: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  justify-content: center;
  align-items: center;
  width: 92%;
  height: 54px;
  margin: 8px;
  background-color: ${({theme}) => theme.colors.secondary};
  text-transform: uppercase;
  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.72;
        `
      : css`
          opacity: 1;
        `}
`;

export const Title = styled.Text`
  text-transform: uppercase;
  color: #ffffff;
`;
