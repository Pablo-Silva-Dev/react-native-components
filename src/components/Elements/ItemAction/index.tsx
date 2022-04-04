import React from 'react';
import { Feather } from '@expo/vector-icons'
import { Container, InfoContainer, Content, Title } from './styles';
import { useTheme } from 'styled-components';

interface ItemActionProps {
    title: string;
    content: string;
    iconName: React.ComponentProps<typeof Feather>['name'];
    onPress: () => void;
}

export function ItemAction({
    content,
    title,
    iconName,
    onPress
}: ItemActionProps) {

    const theme = useTheme()

    return (
        <Container
            onPress={onPress}
            activeOpacity={.8}
        >
            <Feather
                name={iconName}
                size={24}
                color={theme.colors.primary}
            />
            <InfoContainer>
                <Title>{title}</Title>
                <Content>{content}</Content>
            </InfoContainer>
        </Container>
    )
}