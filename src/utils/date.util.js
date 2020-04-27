import moment from 'moment';

export const nextMonday = () => {
  const today = moment();
  return today.day() <= 1 ? today.day(1) : today.day(8);
};

export const format = (date, formatString = 'YYYY-MM-DD') => moment(date).format(formatString);

export const addDay = (startDate, days) => moment(startDate).add(days, 'd');
