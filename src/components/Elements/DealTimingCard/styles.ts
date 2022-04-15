import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: ${Dimensions.get("window").width}px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 12px;
`;

export const TimerContainer = styled.View`
  display: flex;
`;

export const QuantityContainer = styled.View`
  display: flex;
`;

export const Text = styled.Text`
  font-size: 12px;
  font-family: ${({theme}) => theme.fonts.primary_400};
  color: ${({theme}) => theme.colors.white};
`;

export const TextInfo = styled.Text`
  font-size: 16px;
  font-family: ${({theme}) => theme.fonts.primary_600};
  color: ${({theme}) => theme.colors.white};
`;
