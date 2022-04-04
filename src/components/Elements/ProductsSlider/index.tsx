import React, { ReactNode } from 'react';
import { Container } from './styles';

interface ProductsSliderProps {
    children: ReactNode;
}

export function ProductsSlider({ children }: ProductsSliderProps) {
    return (
        <Container
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
                paddingHorizontal: 24
            }}
        >
            {children}
        </Container>
    )
}