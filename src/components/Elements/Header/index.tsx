import React from 'react';
import { Container, Title, Content, BackButton, ContentContainer } from './styles';
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components';

interface HeaderProps {
    title: string;
    content: string;
    showsBackButton?: boolean;
    onBackButtonPress?: () => void;
}

export function Header({
    title,
    content,
    showsBackButton,
    onBackButtonPress
}: HeaderProps) {

    const theme = useTheme()


    return (
        <Container>
            {showsBackButton && (
                <BackButton
                    onPress={onBackButtonPress}
                >
                    <Feather
                        name='arrow-left'
                        size={24}
                        color={theme.colors.white}
                    />
                </BackButton>
            )}
            <ContentContainer>
                <Title>
                    {title}
                </Title>
                <Content>{content}</Content>
            </ContentContainer>
        </Container>
    )
}