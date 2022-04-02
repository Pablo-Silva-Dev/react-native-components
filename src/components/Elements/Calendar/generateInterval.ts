import { eachDayOfInterval, format } from 'date-fns';

import { MarkedDateProps, DayProps } from '.';
import { getPlatformDate } from './getPlatformDate';
import {theme} from '../../../themes/theme';

export function generateInterval(start: DayProps, end: DayProps){
  let interval: MarkedDateProps = {};

  eachDayOfInterval({ start: new Date(start.timestamp), end: new Date(end.timestamp)})
  .forEach(( item ) => {
    const date = format(getPlatformDate(item), 'yyyy-MM-dd');

    interval = {
      ...interval,
      [date]: {
        color: start.dateString === date || end.dateString === date
        ? theme.colors.secondary: theme.colors.element_base,

        textColor: start.dateString === date || end.dateString === date
        ? theme.colors.primary_light : theme.colors.primary,        
      }
    }
  });

  return interval;
}