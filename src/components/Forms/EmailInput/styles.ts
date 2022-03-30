import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface ContainerProps {
  isFocused?: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  width: 92%;
  margin-bottom: 4px;
  ${({isFocused, theme}) => isFocused && css`
        border-bottom-width: 2px;
        border-bottom-color: ${theme.colors.primary};
  ` }}
`;

export const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  background-color: ${({ theme: theme }) => theme.colors.background};
  margin-right: 2px;
`;

export const InputText = styled(TextInput)`
  flex: 1;
  background-color: ${({ theme: theme }) => theme.colors.background};
  color: ${({ theme: theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(14)}px;
  padding: 0 24px;
`;