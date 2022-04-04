import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 0.24;
  width: ${Dimensions.get('screen').width}
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 40px 16px 16px;
`;

export const ContentContainer = styled.View`
    padding: 12px;
`

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  color: ${({ theme }) => theme.colors.white};
  margin: 8px;
`;

export const Content = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  color: ${({ theme }) => theme.colors.white};
  margin: 8px;
`;

export const BackButton = styled.TouchableOpacity``
