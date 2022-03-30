import React from 'react';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native'
import { Container, Title } from './styles';
import { useTheme } from 'styled-components'

interface ButtonProps extends TouchableOpacityProps {
    disabled?: boolean;
    loading?: boolean;
    title: string;
}

export function AlternativeButton({
    disabled,
    loading,
    title,
    ...rest
}: ButtonProps) {

    const theme = useTheme()

    return (
        <Container
            {...rest}
            activeOpacity={.88}
            disabled={disabled!}
        >
            {
                loading ?
                    <ActivityIndicator
                        size='small'
                        color={theme.colors.background}
                    />
                    :
                    <Title>{title}</Title>
            }
        </Container>
    )
}