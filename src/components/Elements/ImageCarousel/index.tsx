import React from 'react';
import { SwiperFlatList, SwiperFlatListProps } from 'react-native-swiper-flatlist'
import { Container, Image, ImageContainer } from './styles';

interface Props {}

interface ImageCarouselProps extends SwiperFlatListProps<Props> {
    images: string[]
    action?: () => void;
}

export function ImageCarousel({ images, action }: ImageCarouselProps) {
    return (
        <Container>
            <SwiperFlatList
                index={0}
                autoplay
                autoplayLoop
                data={images}
                showPagination
                renderItem={({ item }) => (
                    <ImageContainer
                        onPress={action}
                        activeOpacity={1}
                    >
                        <Image
                            source={{ uri: item }}
                        />
                    </ImageContainer>
                )}
            />
        </Container>
    )
}

