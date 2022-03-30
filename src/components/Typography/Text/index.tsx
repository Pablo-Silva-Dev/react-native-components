import React from 'react';
import { TextProps } from 'react-native'
import { Text as TextComponent } from './styles';

interface TextComponentProps extends TextProps {
    content: string;
}

export function Text({ content, ...rest }: TextComponentProps) {
    return (
        <TextComponent
            {...rest}
        >
            {content}
        </TextComponent>
    )
}