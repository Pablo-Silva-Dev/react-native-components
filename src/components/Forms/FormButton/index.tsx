import React from 'react';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native'
import { Container, Title } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    disabled?: boolean;
    loading?: boolean;
    title: string;
    submit: () => Promise<void>;
}

export function FormButton({
    disabled,
    loading,
    title,
    submit,
    ...rest
}: ButtonProps) {
    return (
        <Container
            {...rest}
            activeOpacity={.88}
            disabled={disabled!}
            onPress={submit}
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