import React from 'react';
import { Feather } from '@expo/vector-icons'
import {
    Container,
    Image,
    ProductTitle,
    ProductInfoContainer,
    ProductPriceOnMoney,
    ProductPriceOnCredit,
    Divider,
    ButtonsContainer,
    CartButton,
    FavoriteButton,
    ImageContainer

} from './styles';
import { useTheme } from 'styled-components';

interface MiniProductCardProps {
    productTitle: string;
    productImage: string;
    productPriceOnMoney: string;
    productPriceOnCreditCard: string;
    addToCart: () => Promise<void>;
    addToFavorites: () => Promise<void>;
}

export function MiniProductCard({
    productTitle,
    productImage,
    productPriceOnMoney,
    productPriceOnCreditCard,
    addToCart,
    addToFavorites
}: MiniProductCardProps) {


    const theme = useTheme()

    return (
        <Container>
            <ImageContainer>
                <Image
                    source={{ uri: productImage }}
                />
            </ImageContainer>
            <ProductInfoContainer>
                <ProductTitle>
                    {productTitle}
                </ProductTitle>
                <ProductPriceOnMoney>
                    {productPriceOnMoney}
                </ProductPriceOnMoney>
                <ProductPriceOnCredit>
                    {productPriceOnCreditCard}
                </ProductPriceOnCredit>
                <Divider />
                <ButtonsContainer>
                    <CartButton
                        activeOpacity={.8}
                        onPress={addToCart}
                    >
                        <Feather
                            name='shopping-cart'
                            size={16}
                            color={theme.colors.silver}
                        />
                    </CartButton>
                    <FavoriteButton
                        activeOpacity={.8}
                        onPress={addToFavorites}
                    >
                        <Feather
                            name='heart'
                            size={16}
                            color={theme.colors.silver}
                        />
                    </FavoriteButton>
                </ButtonsContainer>
            </ProductInfoContainer>
        </Container>
    )
}