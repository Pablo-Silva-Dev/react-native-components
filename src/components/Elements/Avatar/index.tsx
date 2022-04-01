import React from 'react';
import { Container, Image } from './styles';

interface AvatarProps {
    avatarUrl: string
    size?: 'small' | 'medium' | 'large'
}

export function Avatar({ avatarUrl, size, ...rest }: AvatarProps) {
    return (
        <Container>
            <Image
                {...rest}
                source={{ uri: avatarUrl }}
                size={size}
            />
        </Container>
    )
}