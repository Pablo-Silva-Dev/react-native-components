import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.element_base};
  padding: 4px;
  width: 96%;
  height: 48px;
  border-radius: 4px;
`;

export const SearchInput = styled.TextInput`
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.background_primary};
  width: 80%;
  border-radius: 4px;
`;

export const SearchButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  width: 20%;
  background-color: ${({ theme }) => theme.colors.element_base};
`;
