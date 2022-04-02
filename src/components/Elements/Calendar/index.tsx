import React from 'react';
import { Container, ShowDatesContainer, DateText, Divider } from './styles';
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

import {
    Calendar as CustomCalendar,
    LocaleConfig,
    DateCallbackHandler
} from 'react-native-calendars'

import { ptBR } from './localeConfig';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

export interface DayProps {
    dateString: string;
    day: number;
    month: number;
    year: number;
    timestamp: number;
}

export interface MarkedDateProps {
    [date: string]: {
        color: string;
        textColor: string;
        disabled?: boolean;
        disableTouchEvent?: boolean;
    },
}

interface CalendarProps {
    markedDates: MarkedDateProps;
    onDayPress: DateCallbackHandler;
    initialDate?: string;
    finalDate?: string
}

export function Calendar({
    onDayPress,
    markedDates,
    initialDate,
    finalDate
}: CalendarProps) {

    const theme = useTheme()

    LocaleConfig.locales['pt-br'] = ptBR
    LocaleConfig.defaultLocale = 'pt-br'

    return (
        <Container>
            <CustomCalendar
                renderArrow={(direction: string) => <Feather
                    color={theme.colors.background_primary}
                    size={24}
                    name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
                />}
                headerStyle={{
                    backgroundColor: theme.colors.primary,
                    width: '100%',
                    marginBottom: 2,
                    padding: 12
                }}
                theme={{
                    textDayFontFamily: theme.fonts.primary_400,
                    textDayHeaderFontFamily: theme.fonts.primary_500,
                    textMonthFontFamily: theme.fonts.secondary_700,
                    textMonthFontSize: 20,
                    monthTextColor: theme.colors.title,
                    arrowStyle: {
                        marginHorizontal: 15
                    }
                }}
                firstDay={1}
                minDate={new Date()}
                markingType='period'
                markedDates={markedDates}
                onDayPress={onDayPress}
            />
            <Divider />
            <ShowDatesContainer>
                <DateText>{initialDate}</DateText>
                <Feather 
                    name='arrow-right'
                    size={initialDate ? 16 : 0}
                />
                <DateText>{finalDate}</DateText>
            </ShowDatesContainer>
        </Container>
    )
}