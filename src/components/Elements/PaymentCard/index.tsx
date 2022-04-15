import React, { useEffect, useRef, useState } from 'react';
import { Feather, MaterialIcons } from '@expo/vector-icons'
import 'intl';
import 'intl/locale-data/jsonp/pt'

import {
    Container,
    MoneyPaymentText,
    CreditPaymentText,
    MoneyPaymentContainer,
    CreditPaymentContainer,
    Text,
    TitleContainer,
    AnimatedArrowContainer,
    ItemContainer,
    AnimatedItemContainer,
    SubTitle,
    AniamationContainer
} from './styles';
import PixSVG from '../../../assets/pix.svg'
import { Animated, Easing } from 'react-native';

interface PaymentCardProps {
    priceOnMoney: number;
    priceOnCredit: number;
}

export function PaymentCard({ priceOnMoney, priceOnCredit }: PaymentCardProps) {

    const [open, setOpen] = useState(false);
    const animatedController = useRef(new Animated.Value(0)).current;
    const [bodySectionHeight, setBodySectionHeight] = useState(0);
    const [parcels, setParcels] = useState<string[]>([])

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



    function calcParcels(start: number, end: number) {

        const parcels = Array(end - start + 1)
            .fill(null)
            .map((_, index) => new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(Number(priceOnCredit / Number(start + index + 1))))

        setParcels(parcels)
    }


    useEffect(() => {
        calcParcels(0, 11)
    }, [])


    return (
        <Container>
            <MoneyPaymentContainer>
                <MoneyPaymentText>
                    {`${new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(priceOnMoney)} à vista no PIX`}
                </MoneyPaymentText>
                <PixSVG
                    width={80}
                    height={24}
                />
            </MoneyPaymentContainer>

            <AniamationContainer
                onPress={() => toggleItem()}
                activeOpacity={.8}
            >
                <TitleContainer>
                    <AnimatedArrowContainer style={{ transform: [{ rotateZ: arrowAngle }] }}>
                        <MaterialIcons name="keyboard-arrow-down" size={20} color="black" />
                    </AnimatedArrowContainer>
                    <CreditPaymentContainer>
                        <Feather
                            name='credit-card'
                            size={20}
                            style={{
                                marginRight: 12
                            }}
                        />
                        <Text>
                            Até 12 x no cartão de crédito -  Ver Parcelsas
                        </Text>
                    </CreditPaymentContainer>
                </TitleContainer>
            </AniamationContainer>
            <AnimatedItemContainer style={{ height: bodyHeight }}>
                <ItemContainer
                    onLayout={event =>
                        setBodySectionHeight(event.nativeEvent.layout.height)
                    }>
                    {parcels.map((parcel, index) => (
                        <CreditPaymentText
                            key={parcel}
                        >
                            {`${index + 1} x de ${parcel}`}
                        </CreditPaymentText>
                    ))}


                </ItemContainer>
            </AnimatedItemContainer>
        </Container>
    )
}