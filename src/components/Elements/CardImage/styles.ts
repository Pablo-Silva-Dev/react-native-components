import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_primary};
  border-radius: 4px;
  margin: 4px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.element_base}
  width: ${Dimensions.get("window").width - 16}px;
  elevation: 8;
  shadow-color: ${({ theme }) => theme.colors.title};
  shadow-offset: {width: -2, height: 4};
  shadow-opacity: 0.2;
  shadow-radius: 2;
`;

export const TitleContainer = styled.View`
  display: flex;
  align-items: flex-start;
  padding: 8px 16px 4px;
`;

export const ImageContainer = styled.TouchableOpacity`
  display: flex;
  align-items: flex-start;
  padding: 8px 12px;
`;
export const CapitionContainer = styled.TouchableOpacity`
  display: flex;
  align-items: flex-start;
  padding: 8px 12px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;
export const Caption = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.primary_300};
`;

export const Image = styled.Image`
  width: 100%;
  height: 160px;
  border-radius: 4px;
`;

export const Divider = styled.View`
  width: 96%;
  margin: 2px auto;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.element_base};
`;
