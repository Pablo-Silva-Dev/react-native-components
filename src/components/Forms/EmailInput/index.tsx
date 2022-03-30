import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Container, IconContainer, InputText } from './styles';
import { Feather } from '@expo/vector-icons'
import { TextInputProps } from 'react-native';

interface Props extends TextInputProps {
    value?: string;
}

export function EmailInput({  value, ...rest }: Props) {

    const theme = useTheme()

    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)

    function handleInputFocus() {
        setIsFocused(true)
    }
    
    function handleInputBlur() {
        setIsFocused(false)
        setIsFilled(!!value)
    }

    return (
        <Container
            isFocused={isFocused}
        >
            <IconContainer

            >
                <Feather
                    name='mail'
                    size={24}
                    color={isFocused || isFilled ? theme.colors.primary : theme.colors.text}
                />
            </IconContainer>
            <InputText
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder='Email'
                {...rest}
            />
        </Container>
    )
}