import React, { ReactNode } from 'react';
import { ScrollViewProps } from 'react-native';
import { Container, ScrollContainer } from './styles';

interface ProductsSliderProps extends ScrollViewProps {
    children: ReactNode;
}

export function ProductsSlider({ children }: ProductsSliderProps) {
    return (
        <Container>
            <ScrollContainer
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{
                }}
            >
                {children}
            </ScrollContainer>
        </Container>
    )
}