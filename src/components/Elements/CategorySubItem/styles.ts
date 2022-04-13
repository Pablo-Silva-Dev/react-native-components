import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: ${Dimensions.get('window').width}px;
    height: 56px;
    background-color: ${({theme}) => theme.colors.white};
    padding: 8px;
    border-bottom-width: 1px;
    border-bottom-color:  ${({theme}) => theme.colors.element_base};
`

export const Title = styled.Text`
  font-size: 14px;
  font-family: ${({theme}) => theme.fonts.primary_500};
  color: ${({theme}) => theme.colors.title};
`;
