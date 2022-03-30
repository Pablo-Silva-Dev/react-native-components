import React from 'react';
import { TextProps } from 'react-native'
import { SubTitle as SubTitleComponent } from './styles';

interface SubTitleProps extends TextProps {
    content: string;
}

export function SubTitle({ content, ...rest }: SubTitleProps) {
    return (
        <SubTitleComponent
            {...rest}
        >
            {content}
        </SubTitleComponent>
    )
}