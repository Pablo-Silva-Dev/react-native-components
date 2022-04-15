import React, { useEffect, useState } from 'react';
import {
  Container,
  TimerContainer,
  QuantityContainer,
  Text,
  TextInfo
} from './styles';
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

interface DealTimingCardProps {
  dealHours: number;
  quantity: number;
}

export function DealTimingCard({ dealHours, quantity }: DealTimingCardProps) {

  const theme = useTheme()

  const [hours, setHours] = useState(dealHours)
  const [minutes, setMinutes] = useState(59)
  const [seconds, setSeconds] = useState(59)

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            clearInterval(myInterval)
          } else {
            setHours(hours - 1);
            setMinutes(59);
          }
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1)
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <Container
      style={{
        display: hours === 0 && minutes === 0 && seconds === 0 ? 
        'none' : 
        'flex'
      }}
    >
      <Feather
        name='clock'
        size={32}
        color={theme.colors.white}
      />
      <TimerContainer>
        <Text>Esta oferta termina em:</Text>
        <TextInfo>
          {hours < 10 ? '0' + hours : + hours} :
          {minutes < 10 ? '0' + minutes : ' ' + minutes} :
          {seconds < 10 ? '0' + seconds : ' ' + seconds}
        </TextInfo>
      </TimerContainer>
      <QuantityContainer>
        <Text>Quantitdade:</Text>
        <TextInfo>{quantity}</TextInfo>
      </QuantityContainer>
    </Container>
  )
}