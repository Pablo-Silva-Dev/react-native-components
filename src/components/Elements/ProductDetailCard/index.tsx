import React, { useState } from 'react';
import { SwiperFlatList, SwiperFlatListProps } from 'react-native-swiper-flatlist'
import { Feather } from '@expo/vector-icons'

import { Container, FavoriteButton, Image, ImageIndexText, ProductAvailableBadge, ProductTitle, ShareButton, SliderContainer } from './styles';
import { useTheme } from 'styled-components';

interface ProductDetailCard {
    productImages: string[];
    productTitle: string;
    addToFavorites?: () => Promise<void>;
    shareProduct?: () => Promise<void>;
}

export function ProductDetailCard({
    productTitle,
    productImages,
    addToFavorites,
    shareProduct
}: ProductDetailCard) {

    const theme = useTheme();

    const [imageIndex, setImageIndex] = useState(1)

    return (
        <Container>
            <FavoriteButton
                onPress={addToFavorites}
                activeOpacity={.8}
            >
                <Feather
                    name='heart'
                    size={24}
                    color={theme.colors.primary}
                />
            </FavoriteButton>
            <ShareButton
                onPress={shareProduct}
                activeOpacity={.8}
            >
                <Feather
                    name='share-2'
                    size={24}
                    color={theme.colors.primary}
                />
            </ShareButton>
            <SwiperFlatList
                index={0}
                data={productImages}
                onChangeIndex={val => setImageIndex(val.index + 1)}
                renderItem={({ item }) => (
                    <SliderContainer>
                        <Image
                            source={{ uri: item }}
                        />

                    </SliderContainer>
                )}
            />
            <ImageIndexText>
                {`${imageIndex} / ${productImages.length}`}
            </ImageIndexText>
            <ProductTitle>
                {productTitle}
            </ProductTitle>
            <ProductAvailableBadge>
                Produto disponível
            </ProductAvailableBadge>
        </Container>
    )
}