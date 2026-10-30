import { useCallback, useState } from 'react';
import { Text } from 'react-native';
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import Screen from '../components/Screen';
import InfoRow from '../components/InfoRow';
import SectionTitle from '../components/SectionTitle';
import MenuItem from '../components/MenuItem';
import CartButton from '../components/CartButton';
import BookButton from '../components/BookButton';
import GoToCartButton from '../components/GoToCartButton';
import { colors } from '../components/theme';
import { getVenue } from '../utils/venues';
import { getMenu } from '../utils/menu';
import { addToCart, getCount, getQty, getTotal } from '../utils/cart';
import { notify } from '../utils/notify';

export default function Venue() {
  const { id } = useLocalSearchParams();
  const venue = getVenue(id);
  const menu = getMenu(id);
  const [count, setCount] = useState(0);

  useFocusEffect(
    useCallback(() => {
      setCount(getCount());
    }, [])
  );

  if (!venue) return <Screen title="Заведение не найдено" />;

  const onAdd = (dish) => {
    addToCart(dish);
    setCount(getCount());
  };

  const footer =
    count > 0 ? (
      <GoToCartButton count={count} total={getTotal()} onPress={() => router.push('/Cart')} />
    ) : (
      <BookButton onPress={() => notify(`Столик в «${venue.name}» забронирован!`)} />
    );

  return (
    <Screen title={venue.name} subtitle={venue.category} headerRight={<CartButton count={count} />} footer={footer}>
      <InfoRow icon="star" label="Рейтинг" value={`${venue.rating} из 5`} />
      <InfoRow icon="location" label="Адрес" value={venue.address} />
      <InfoRow icon="time" label="Время работы" value={venue.hours} />

      <Text style={{ fontSize: 15, lineHeight: 22, color: colors.text, marginTop: 12 }}>{venue.description}</Text>

      <SectionTitle>Меню</SectionTitle>
      {menu.map((dish) => (
        <MenuItem key={dish.id} dish={dish} qty={getQty(dish.id)} onAdd={() => onAdd(dish)} />
      ))}
    </Screen>
  );
}
