import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.element_base};
  padding: 4px;
  width: ${Dimensions.get("window").width};
`;

export const ScrollContainer = styled.ScrollView``;
