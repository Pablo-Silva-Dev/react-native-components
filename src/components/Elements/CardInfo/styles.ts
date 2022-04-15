import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_primary};
  border-radius: 4px;
  margin: 4px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.element_base}
  width: ${Dimensions.get("window").width - 12}px;
  elevation: 8;
`;


export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

export const Content = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.primary_300};
  text-align: left;
`;

export const Divider = styled.View`
  width: 96%;
  margin: 2px auto;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.element_base};
`;
