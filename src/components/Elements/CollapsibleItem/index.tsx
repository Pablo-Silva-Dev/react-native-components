import React, { useState, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {
    ItemContainer,
    TitleContainer,
    Text,
    SubTitle,
    Container,
    AnimatedArrowContainer,
    AnimatedItemContainer
} from './styles';

interface CollapsibleListItemProps {
    title: string;
    content: string
}
export const CollapsibleItem = ({ title, content }: CollapsibleListItemProps) => {
    const [open, setOpen] = useState(false);
    const animatedController = useRef(new Animated.Value(0)).current;
    const [bodySectionHeight, setBodySectionHeight] = useState(0);

    const bodyHeight = animatedController.interpolate({
        inputRange: [0, 1],
        outputRange: [0, bodySectionHeight!],
    });

    const arrowAngle = animatedController.interpolate({
        inputRange: [0, 1],
        outputRange: ['0rad', `${Math.PI}rad`],
    });

    const toggleItem = () => {
        if (open) {
            Animated.timing(animatedController, {
                duration: 300,
                toValue: 0,
                easing: Easing.bezier(0.4, 0.0, 0.2, 1),
                useNativeDriver: false
            }).start();
        } else {
            Animated.timing(animatedController, {
                duration: 300,
                toValue: 1,
                easing: Easing.bezier(0.4, 0.0, 0.2, 1),
                useNativeDriver: false
            }).start();
        }
        setOpen(!open);
    };

    return (
        <>
            <Container onPress={() => toggleItem()}>
                <TitleContainer>
                    <SubTitle>{title}</SubTitle>
                    <AnimatedArrowContainer style={{ transform: [{ rotateZ: arrowAngle }] }}>
                        <MaterialIcons name="keyboard-arrow-down" size={20} color="black" />
                    </AnimatedArrowContainer>
                </TitleContainer>
            </Container>
            <AnimatedItemContainer style={{ height: bodyHeight }}>
                <ItemContainer
                    onLayout={event =>
                        setBodySectionHeight(event.nativeEvent.layout.height)
                    }>
                    <Text>{content}</Text>
                </ItemContainer>
            </AnimatedItemContainer>
        </>
    );
};

