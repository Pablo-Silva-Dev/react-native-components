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
    ShareButton,
    ImageContainer

} from './styles';
import { useTheme } from 'styled-components';

interface ProductCardProps {
    productTitle?: string;
    productImage?: string;
    productPriceOnMoney?: string;
    productPriceOnCreditCard?: string;
    addToCart?: () => Promise<void>;
    addToFavorites?: () => Promise<void>;
    shareProduct?: () => Promise<void>;
}

export function ProductCard({
    productTitle,
    productImage,
    productPriceOnMoney,
    productPriceOnCreditCard,
    addToCart,
    addToFavorites,
    shareProduct
}: ProductCardProps) {


    const theme = useTheme()

    return (
        <Container>
            <ImageContainer>
                <Image
                    source={{ uri: productImage }}
                />
            </ImageContainer>
            <ProductInfoContainer>
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
                        onPress={shareProduct}
                    >
                        <Feather
                            name='heart'
                            size={16}
                            color={theme.colors.silver}
                        />
                    </FavoriteButton>
                    <ShareButton
                        activeOpacity={.8}
                        onPress={addToFavorites}
                    >
                        <Feather
                            name='share-2'
                            size={16}
                            color={theme.colors.silver}
                        />
                    </ShareButton>
                </ButtonsContainer>
                <ProductTitle>
                    {productTitle}
                </ProductTitle>
                <ProductPriceOnMoney>
                    {productPriceOnMoney}
                </ProductPriceOnMoney>
                <ProductPriceOnCredit>
                    {productPriceOnCreditCard}
                </ProductPriceOnCredit>
            </ProductInfoContainer>
        </Container>
    )
}