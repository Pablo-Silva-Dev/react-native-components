import React from 'react';
import { TextInputProps } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Container, SearchInput, SearchButton } from './styles';
import { useTheme } from 'styled-components';

interface SearchBarProps extends TextInputProps {
    search: () => void;
}

export function SearchBar({ search, ...rest }: SearchBarProps) {
    const theme = useTheme()

    //Function example to do a serch dynamically
    /*   function searchingTerm(term: string) {
            if (product) {
            const foundProducts = products
                .filter((product) => {
                if (product.toLowerCase().includes(term.toLowerCase())) {
                    return product
                }
                })
            setFoundProducts(foundProducts)
            }else{
            setFoundProducts([])
            }
        } */

    //useEffect usage example 
    /*  useEffect(() => {
        searchingTerm(product)
        }, [product]) */

    //Function example to pass in the search prop
    /* function searchTerm(term: string) {
        const foundPeople = peoples
        .filter(people => people.toLowerCase() === term.toLowerCase())
        setFoundedPeoples(foundPeople)
        }   */

    return (
        <Container>
            <SearchInput
                {...rest}
                placeholder='Buscar'
            />
            <SearchButton
                onPress={search}
            >
                <Feather
                    size={16}
                    color={theme.colors.primary}
                    name='search'
                />
            </SearchButton>
        </Container>
    )
}