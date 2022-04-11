import React from 'react';
import { Feather } from '@expo/vector-icons'
import {
    Container,
    Image,
    ProductTitle,
    ProductInfoContainer,
    ProductPriceOnMoney,
    ProductPriceOnCredit,
    ButtonsContainer,
    CartButton,
    FavoriteButton,
    ShareButton,
    ImageContainer

} from './styles';
import { useTheme } from 'styled-components';

interface MiniProductCardProps {
    productTitle?: string;
    productImage?: string;
    productPriceOnMoney?: string;
    productPriceOnCreditCard?: string;
    addToCart?: () => Promise<void>;
    addToFavorites?: () => Promise<void>;
    shareProduct?: () => Promise<void>;
}

export function MiniProductCard({
    productTitle,
    productImage,
    productPriceOnMoney,
    productPriceOnCreditCard,
    addToCart,
    addToFavorites,
    shareProduct
}: MiniProductCardProps) {


    const theme = useTheme()

    return (
        <Container>
            <ImageContainer>
                <Image
                    source={{ uri: productImage }}
                />
                <ButtonsContainer>
                    <CartButton
                        activeOpacity={.8}
                        onPress={addToCart}
                    >
                        <Feather
                            name='shopping-cart'
                            size={12}
                            color={theme.colors.silver}
                        />
                    </CartButton>
                    <FavoriteButton
                        activeOpacity={.8}
                        onPress={addToFavorites}
                    >
                        <Feather
                            name='heart'
                            size={12}
                            color={theme.colors.silver}
                        />
                    </FavoriteButton>
                    <ShareButton
                        activeOpacity={.8}
                        onPress={shareProduct}
                    >
                        <Feather
                            name='share-2'
                            size={12}
                            color={theme.colors.silver}
                        />
                    </ShareButton>
                </ButtonsContainer>
            </ImageContainer>
            <ProductInfoContainer>
                <ProductTitle>
                    {
                        productTitle!.length > 24 ?
                            productTitle!.substring(0, 24).concat('...')
                            :
                            productTitle
                    }
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