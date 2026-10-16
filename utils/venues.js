export const VENUES = [
  {
    id: '1',
    name: 'Наурыз',
    category: 'Ресторан',
    icon: 'restaurant',
    rating: 4.8,
    address: 'пр. Абая, 12',
    hours: '10:00 – 23:00',
    description: 'Национальная кухня, уютный зал и живая музыка по выходным.',
  },
  {
    id: '2',
    name: 'Кофе Тайм',
    category: 'Кофейня',
    icon: 'cafe',
    rating: 4.6,
    address: 'ул. Сатпаева, 30',
    hours: '08:00 – 22:00',
    description: 'Свежая обжарка, десерты собственного приготовления и быстрый Wi-Fi.',
  },
  {
    id: '3',
    name: 'Пицца Хаус',
    category: 'Пиццерия',
    icon: 'pizza',
    rating: 4.5,
    address: 'ул. Гоголя, 7',
    hours: '11:00 – 00:00',
    description: 'Пицца из дровяной печи, паста и детская комната.',
  },
  {
    id: '4',
    name: 'Бочка',
    category: 'Бар',
    icon: 'beer',
    rating: 4.3,
    address: 'пр. Достык, 45',
    hours: '17:00 – 02:00',
    description: 'Крафтовые напитки, закуски и трансляции матчей на большом экране.',
  },
  {
    id: '5',
    name: 'Терраса',
    category: 'Лаунж',
    icon: 'wine',
    rating: 4.7,
    address: 'ул. Кабанбай батыра, 21',
    hours: '12:00 – 01:00',
    description: 'Открытая терраса с видом на город и авторское меню.',
  },
];

export function getVenue(id) {
  return VENUES.find((v) => v.id === id);
}
