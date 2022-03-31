import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface ContainerProps {
  isFocused?: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  width: 99%;
  margin-left: 12px;
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
  background-color: ${({ theme: theme }) => theme.colors.element_base};
  margin-right: 2px;
  border-radius: 4px;
  `;

export const ChangePasswordVisibilityContainer = styled.View<ContainerProps>`
  justify-content: center;
  align-items: center;
  width: 56px;
  border-radius: 4px;
  height: 56px;
  left: -12px;
  background-color: ${({ theme: theme }) => theme.colors.element_base};
  ${({isFocused, theme}) => isFocused && css`
        border-width: 2px;
        border-color: ${theme.colors.primary};
  ` }}
`;

export const InputText = styled(TextInput)<ContainerProps>`
  flex: 1;
  background-color: ${({ theme: theme }) => theme.colors.element_base};
  color: ${({ theme: theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(14)}px;
  padding: 0 24px;
  border-radius: 4px;
  ${({isFocused, theme}) => isFocused && css`
        border-width: 2px;
        border-color: ${theme.colors.primary};
  ` }}
`;

export const ChangePasswordVisibilityButton = styled.TouchableOpacity`
background-color: ${({ theme: theme }) => theme.colors.background_primary};
padding: 4px;
border-radius: 16px;
`;

