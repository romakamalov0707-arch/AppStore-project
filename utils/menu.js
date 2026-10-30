export const MENU = {
  1: [
    { id: '1-1', name: 'Бешбармак', price: 3500 },
    { id: '1-2', name: 'Плов', price: 2800 },
    { id: '1-3', name: 'Манты (5 шт.)', price: 2200 },
    { id: '1-4', name: 'Баурсаки', price: 900 },
  ],
  2: [
    { id: '2-1', name: 'Капучино', price: 1200 },
    { id: '2-2', name: 'Латте', price: 1300 },
    { id: '2-3', name: 'Чизкейк', price: 1800 },
    { id: '2-4', name: 'Круассан', price: 900 },
  ],
  3: [
    { id: '3-1', name: 'Пицца Маргарита', price: 3200 },
    { id: '3-2', name: 'Пицца Пепперони', price: 3600 },
    { id: '3-3', name: 'Паста Карбонара', price: 2900 },
    { id: '3-4', name: 'Лимонад', price: 1000 },
  ],
  4: [
    { id: '4-1', name: 'Бургер', price: 2700 },
    { id: '4-2', name: 'Картофель фри', price: 1100 },
    { id: '4-3', name: 'Крылышки', price: 2500 },
    { id: '4-4', name: 'Морс', price: 800 },
  ],
  5: [
    { id: '5-1', name: 'Стейк', price: 6500 },
    { id: '5-2', name: 'Салат Цезарь', price: 2600 },
    { id: '5-3', name: 'Тирамису', price: 2200 },
    { id: '5-4', name: 'Чай', price: 900 },
  ],
};

export function getMenu(venueId) {
  return MENU[venueId] || [];
}
