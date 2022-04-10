import React, { useEffect, useState } from 'react';
import { SwiperFlatList, SwiperFlatListProps } from 'react-native-swiper-flatlist'
import { Container, Image, ImageContainer } from './styles';

interface Props { }

interface ImageCarouselProps extends SwiperFlatListProps<Props> {
    images: string[]
    firstImageAction?: () => void;
    secondImageAction?: () => void;
    thirdImageAction?: () => void;
    fourthImageAction?: () => void;
    fivethImageAction?: () => void;
}

export function ImageCarousel({
    images,
    firstImageAction,
    secondImageAction,
    thirdImageAction,
    fourthImageAction,
    fivethImageAction
}: ImageCarouselProps) {

    const [imageIndex, setImageIndex] = useState(0)

    return (
        <Container>
            <SwiperFlatList
                index={imageIndex}
                autoplay
                autoplayLoop
                data={images}
                onChangeIndex={val => setImageIndex(val.index)}
                showPagination
                renderItem={({ item }) => (
                    <ImageContainer
                        onPress={
                            imageIndex === 0 ?
                                firstImageAction :
                                imageIndex === 1 ?
                                    secondImageAction :
                                    imageIndex === 2 ?
                                        thirdImageAction :
                                        imageIndex === 3 ?
                                            fourthImageAction :
                                            fivethImageAction

                        }
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

