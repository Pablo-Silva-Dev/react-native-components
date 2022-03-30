import { TextInput, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";
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
  border-radius: 4px;
`;

export const ChangePasswordVisibilityContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  background-color: ${({ theme: theme }) => theme.colors.background};
`;

export const InputText = styled(TextInput)`
  flex: 1;
  background-color: ${({ theme: theme }) => theme.colors.background};
  color: ${({ theme: theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(14)}px;
  padding: 0 24px;
  border-radius: 4px;
`;

export const ChangePasswordVisibilityButton = styled.TouchableOpacity`
background-color: ${({ theme: theme }) => theme.colors.background_light};
padding: 4px;
border-radius: 16px;
`;

