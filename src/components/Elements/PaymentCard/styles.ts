import { Animated, Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_primary};
  border-radius: 4px;
  margin: 4px auto;
  padding: 8px;
  width: ${Dimensions.get("window").width - 12}px;
  elevation: 8;
`;

export const AniamationContainer = styled.TouchableOpacity``;

export const MoneyPaymentContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 16px;
`;
export const CreditPaymentContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

export const MoneyPaymentText = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  color: ${({ theme }) => theme.colors.success};
  margin-right: 8px;
`;

export const CreditPaymentText = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.primary_300};
  color: ${({ theme }) => theme.colors.text};
  margin-left: 12px;
`;

export const Divider = styled.View`
  width: 96%;
  margin: 2px auto;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.element_base};
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
`;
export const ItemContainer = styled.View`
  padding: 12px;
  position: absolute;
  bottom: 0;
`;

export const Text = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  color: ${({ theme }) => theme.colors.title};
`;
