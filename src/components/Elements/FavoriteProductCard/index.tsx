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

interface FavoriteProductCardProps {
    productTitle?: string;
    productImage?: string;
    productPriceOnMoney?: string;
    productPriceOnCreditCard?: string;
    addToCart?: () => Promise<void>;
    removeFavorite?: () => Promise<void>;
    shareProduct?: () => Promise<void>;
}

export function FavoriteProductCard({
    productTitle,
    productImage,
    productPriceOnMoney,
    productPriceOnCreditCard,
    addToCart,
    removeFavorite,
    shareProduct
}: FavoriteProductCardProps) {


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
                    <ShareButton
                        activeOpacity={.8}
                        onPress={removeFavorite}
                    >
                        <Feather
                            name='share-2'
                            size={16}
                            color={theme.colors.silver}
                        />
                    </ShareButton>
                </ButtonsContainer>
                <ProductTitle>
                    {
                        //@ts-ignore
                            productTitle?.length > 48 ?
                            productTitle!.substring(0, 48).concat('...')
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
                    <FavoriteButton
                        activeOpacity={.8}
                        onPress={shareProduct}
                    >
                    <Feather
                        name='heart'
                        size={20}
                        color={theme.colors.primary}
                    />
                    </FavoriteButton>
            </ProductInfoContainer>
        </Container>
    )
}