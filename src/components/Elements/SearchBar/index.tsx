import React from 'react';
import { Feather } from '@expo/vector-icons'
import { Container, SearchInput, SearchButton } from './styles';
import { useTheme } from 'styled-components';

export function SearchBar() {
    const theme = useTheme()
    return (
        <Container>
            <SearchInput
                placeholder='Buscar'
            />
            <SearchButton>
                <Feather
                    size={16}
                    color={theme.colors.primary}
                    name='search'
                />
            </SearchButton>
        </Container>
    )
}