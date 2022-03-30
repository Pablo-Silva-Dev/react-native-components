import styled, { css } from "styled-components/native";

interface ButtonProps {
  disabled: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  justify-content: center;
  align-items: center;
  width: 92%;
  height: 54px;
  margin: 2px;
  background-color: transparent;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
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
  color: ${({ theme }) => theme.colors.primary};
`;
