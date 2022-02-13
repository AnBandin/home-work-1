export const monthArray = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноябрь',
  'декабрь',
];

export function getDate(date) {
  return null ?? date
    ? `${date.getDate()}  ${monthArray[date.getMonth()]}  ${date.getFullYear()}`
    : 'Ошибка';
}

export function getName(name) {
  return name.split(' ')[0];
}
