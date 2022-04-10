import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: ${Dimensions.get("screen").width};
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.element_base};
  padding: 12px 12px 12px 24px;
`;

export const InfoContainer = styled.View`
  display; flex;
  margin-left: 16px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text};
`;

export const Content = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;
