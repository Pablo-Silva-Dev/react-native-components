import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import {
    ChangePasswordVisibilityButton,
    ChangePasswordVisibilityContainer,
    Container,
    IconContainer,
    InputText
} from './styles';

interface Props extends TextInputProps {
    value?: string;
}

export function PasswordInput({ value, ...rest }: Props) {

    const theme = useTheme()

    const [isPasswordVisibility, setIsPasswordVisibility] = useState(true)
    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)

    function handlePasswordVisibilityChange() {
        setIsPasswordVisibility(prevState => !prevState)
    }

    function handleInputFocus() {
        setIsFocused(true)
    }

    function handleInputBlur() {
        setIsFocused(false)
        setIsFilled(!!value)
    }

    return (
        <Container
        >
            <IconContainer>
                <Feather
                    name='lock'
                    size={24}
                    color={isFocused || isFilled ? theme.colors.primary : theme.colors.text}
                />
            </IconContainer>
            <InputText
                {...rest}
                isFocused={isFocused}
                secureTextEntry={isPasswordVisibility}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder='Senha'
            />
            <ChangePasswordVisibilityContainer
            isFocused={isFocused}
            >
                <ChangePasswordVisibilityButton
                    onPress={handlePasswordVisibilityChange}
                    activeOpacity={.8}
                >
                    <Feather
                        name={isPasswordVisibility ? 'eye' : 'eye-off'}
                        size={20}
                        color={theme.colors.text}
                    />
                </ChangePasswordVisibilityButton>
            </ChangePasswordVisibilityContainer>

        </Container>
    )
}