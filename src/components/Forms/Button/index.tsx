import React from 'react';
import { Text, TouchableOpacityProps, ActivityIndicator } from 'react-native'
import { Container, Title } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    disabled?: boolean;
    loading?: boolean;
    title: string;
}

export function Button({
    disabled,
    loading,
    title,
    ...rest
}: ButtonProps) {
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
                        color='#fff'
                    />
                    :
                    <Title>{title}</Title>
            }
        </Container>
    )
}