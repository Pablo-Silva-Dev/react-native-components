import React from 'react';
import { Container, Title } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

interface CategorySubItemProps {
    title: string
    onPress: () => Promise<void>
}

export function CategorySubItem({ title, onPress }: CategorySubItemProps) {
    return (
        <Container
            onPress={onPress}
            activeOpacity={.8}
        >
            <Title>{title}</Title>
            <MaterialIcons
                name='keyboard-arrow-right'
                size={20}
            />
        </Container>
    )
}