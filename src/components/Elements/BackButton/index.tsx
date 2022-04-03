import React from 'react';
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components';

import { BackButton as BackButtonComponent } from './styles';

interface BackButtonProps {
    onPress: () => void;
}

export function BackButton({ onPress }: BackButtonProps) {

    const theme = useTheme()

    return (
        <BackButtonComponent
            onPress={onPress}
            activeOpacity={.8}
        >
            <Feather
                name='arrow-left'
                size={24}
                color={theme.colors.black}
            />
        </BackButtonComponent>
    )
}