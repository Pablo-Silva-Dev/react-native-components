import React from 'react';
import { Title as TitleComponent } from './styles';

interface TitleProps {
    content: string;
}

export function Title({ content }: TitleProps) {
    return (
        <TitleComponent>{content}</TitleComponent>
    )
}