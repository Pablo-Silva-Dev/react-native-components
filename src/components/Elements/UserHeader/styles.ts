import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 40px 16px 16px;
  width: ${Dimensions.get('screen').width}
`;

export const OptionsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: ${Dimensions.get('screen').width}
`;

export const UserContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserInfoContainer = styled.View`
  display: flex;
  padding-left: 12px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  color: ${({ theme }) => theme.colors.white};
  margin: 8px;
`;

export const UserNameText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.white};
`;
export const UserEmailText = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.white};
`;

export const UserPhoto = styled.Image`
  width: 72px
  height:  72px
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.element_base};
  border-radius: 36px;
  `;

export const SettingsButton = styled.TouchableOpacity`
`;
