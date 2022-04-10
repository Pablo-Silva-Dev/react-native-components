import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

export const BackToTopButton = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4px;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    position: absolute;
    bottom: 64px;
    right: ${Dimensions.get('window').width/20}px;
    background-color: ${({theme}) => theme.colors.primary};
    z-index: 999;
`