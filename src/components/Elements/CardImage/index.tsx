import React from 'react';
import { ViewProps } from 'react-native'
import {
    Container,
    Image,
    ImageContainer,
    Divider,
    Title,
    TitleContainer,
    CapitionContainer,
    Caption
} from './styles';


interface CardImageProps extends ViewProps {
    title: string;
    image: string;
    action?: () => void;
    caption?: string;
    children?: React.ReactNode
}

export function CardImage({
    image,
    title,
    action,
    children,
    caption,
    ...rest
 }: CardImageProps) {
    return (
        <Container
            {...rest}
        >
            <TitleContainer>
                <Title>{title}</Title>
            </TitleContainer>
            <Divider />
            <ImageContainer
                onPress={action}
                activeOpacity={.8}
            >
                <Image
                    source={{ uri: image }}
                />
            </ImageContainer>
            { caption && (
                <CapitionContainer>
                    <Caption>{caption}</Caption>
                </CapitionContainer>
            ) }
            {children}
        </Container>
    )
}