import React from 'react';
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

import { BackToTopButton as BackToTopButtonComponent } from './styles';

interface Props {
    onPress: () => void;
}

export function BackToTopButton({ onPress }: Props) {

    const theme = useTheme()

    return (
        <BackToTopButtonComponent
            onPress={onPress}
            activeOpacity={.8}
        >
            <Feather
                name='arrow-up'
                size={24}
                color={theme.colors.black}
            />
        </BackToTopButtonComponent>
    )
}