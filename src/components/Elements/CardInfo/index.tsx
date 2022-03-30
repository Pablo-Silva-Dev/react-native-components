import React from 'react';
import {ViewProps} from 'react-native'
import {
    Container,
    Content,
    ContentContainer,
    Divider,
    Title,
    TitleContainer
} from './styles';


interface CardInfoProps extends ViewProps {
    title: string;
    content: string;
    children?: React.ReactNode
}

export function CardInfo({ content, title, children, ...rest }: CardInfoProps) {
    return (
        <Container
            {...rest}
        >
            <TitleContainer>
                <Title>{title}</Title>
            </TitleContainer>
            <Divider />
            <ContentContainer>
                <Content>{content}</Content>
            </ContentContainer>
            {children}
        </Container>
    )
}