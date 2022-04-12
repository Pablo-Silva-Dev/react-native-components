import { Animated, Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.TouchableWithoutFeedback`
  width: ${Dimensions.get("window").width}px;
`;

export const AnimatedItemContainer = styled(Animated.View)`
  background-color: #efefef;
  overflow: hidden;
`;

export const AnimatedArrowContainer = styled(Animated.View)``;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  padding-left: 16px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: #efefef;
`;
export const ItemContainer = styled.View`
  padding: 12px;
  position: absolute;
  bottom: 0;
`;

export const Text = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  color: ${({ theme }) => theme.colors.title};
`;
