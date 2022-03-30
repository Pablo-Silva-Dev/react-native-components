import React from 'react';
import { TextProps } from 'react-native'
import { Title as TitleComponent } from './styles';

interface TitleProps extends TextProps {
    content: string;
}

export function Title({ content, ...rest }: TitleProps) {
    return (
        <TitleComponent
            {...rest}
        >
            {content}
        </TitleComponent>
    )
}