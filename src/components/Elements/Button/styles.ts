import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";

interface ButtonProps {
  disabled: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  justify-content: center;
  align-items: center;
  width: ${Dimensions.get('window').width - 12}px;
  height: 54px;
  margin: 4px auto;
  border-radius: 4px;
  background-color: ${({theme}) => theme.colors.primary};
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
  color: ${({ theme }) => theme.colors.element_base};
`;
