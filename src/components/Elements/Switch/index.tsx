import React from 'react';
import { SwitchProps } from 'react-native'
import { Switch as SwitchComponent } from './styles';
import { useTheme } from 'styled-components'

interface SwitchComponentProps extends SwitchProps {
    value: boolean;
}

export function Switch({ value, ...rest }: SwitchComponentProps) {

    const theme = useTheme()

    return (
        <SwitchComponent
            value={value}
            trackColor={
                {
                    false: theme.colors.element_base,
                    true: theme.colors.primary
                }
            }
            thumbColor={
                value ?
                    theme.colors.element_base :
                    theme.colors.element_base
            }
            ios_backgroundColor={theme.colors.secondary}
            {...rest}
        />
    )
}