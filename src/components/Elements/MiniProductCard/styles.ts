import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: ${Dimensions.get('window').width /2.12}
  height: 144px;
  border-radius: 4px;
  padding: 8px;
  margin: 2px;
  background-color: ${({ theme }) => theme.colors.white};
  elevation: 8;
`;

export const ImageContainer = styled.View``;

export const Image = styled.Image`
  width: 64px;
  height: 64px;
`;

export const ProductInfoContainer = styled.View`
  display: flex;
  flex-direction: column;
  justifyContent: space-between;
`;

export const ProductTitle = styled.Text`
  font-size: 12px;
  width: 40%;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text};
`;

export const ProductPriceOnMoney = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.success};
`;

export const ProductPriceOnCredit = styled.Text`
  font-size: 10px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  width: 40%;
`;

/* export const Divider = styled.View`
  width: 50%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.element_base};
  margin-bottom: 8px;
  margin-top: 8px;
`; */

export const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin: 16px 0;
`;

export const CartButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
`;

export const FavoriteButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
`;

export const ShareButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
`;
