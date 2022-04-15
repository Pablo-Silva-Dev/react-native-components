import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const Container = styled.View`
  width: ${Dimensions.get("window").width}px;
  background-color: ${({theme}) => theme.colors.white};
  padding: 12px;
`;

export const SliderContainer = styled.View`
  width: ${Dimensions.get("window").width}px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

export const Image = styled.Image`
  width: ${Dimensions.get("window").width / 1.6}px;
  height: ${Dimensions.get("window").height / 3.2};
  margin: 0 12px;
`;

export const FavoriteButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 176;
  left: 24;
`;

export const ShareButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 48;
  left: 24;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  color: ${({ theme }) => theme.colors.title};
`;
export const ImageIndexText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: 8px;
`;

export const ProductAvailableBadge = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  color: ${({ theme }) => theme.colors.success};
  text-align: right;
`;
