import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_light};
  border-radius: 4px;
  margin: 4px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.background}
  width: ${Dimensions.get("window").width - 16}px;
`;

export const TitleContainer = styled.View`
  display: flex;
  align-items: flex-start;
  padding: 8px 16px 4px;
`;

export const ContentContainer = styled.View`
  display: flex;
  align-items: flex-start;
  padding: 8px 16px;
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
  background-color: ${({ theme }) => theme.colors.background};
`;
