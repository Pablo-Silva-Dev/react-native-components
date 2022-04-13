import React from 'react';
import { FontAwesome } from '@expo/vector-icons'
import { Container, SubTitle } from './styles';
import { useTheme } from 'styled-components'

interface CategoryItemProps {
    title: string
    iconName: React.ComponentProps<typeof FontAwesome>['name']
    onPress: () => void
}

export function CategoryItem({
    title,
    iconName,
    onPress
 }: CategoryItemProps) {

    const theme = useTheme()

    return (
        <Container
            onPress={onPress}
            activeOpacity={.8}
        >
            <SubTitle>{title}</SubTitle>
            <FontAwesome
                name={iconName}
                size={32}
                color={theme.colors.primary}
            />
        </Container>
    )
}