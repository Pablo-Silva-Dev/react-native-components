import React from 'react';
import { SubTitle as SubTitleComponent } from './styles';

interface SubTitleProps {
    content: string;
}

export function SubTitle({ content }: SubTitleProps) {
    return (
        <SubTitleComponent>{content}</SubTitleComponent>
    )
}