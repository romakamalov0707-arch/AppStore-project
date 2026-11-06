import { useCallback, useState } from 'react';
import { router, useFocusEffect } from 'expo-router';
import Screen from '../components/Screen';
import InfoRow from '../components/InfoRow';
import LogoutButton from '../components/LogoutButton';
import { user, clearUser } from '../utils/user';
import { clearCart } from '../utils/cart';
import { clearOrders } from '../utils/orders';

export default function Profile() {
  const [data, setData] = useState({ ...user });

  useFocusEffect(
    useCallback(() => {
      setData({ ...user });
    }, [])
  );

  const onLogout = () => {
    clearUser();
    clearCart();
    clearOrders();
    if (router.canDismiss()) router.dismissAll();
    router.replace('/Login');
  };

  return (
    <Screen title="Профиль" subtitle="Ваши данные" footer={<LogoutButton onPress={onLogout} />}>
      <InfoRow icon="person" label="Имя" value={data.name || 'Гость'} />
      <InfoRow icon="call" label="Телефон" value={data.phone || 'Не указан'} />
      <InfoRow icon="home" label="Адрес" value={data.address || 'Не указан'} />
      <InfoRow
        icon="location"
        label="Город"
        value={data.city || 'Не выбран'}
        onPress={() => router.push('/SelectCity')}
      />
      <InfoRow icon="create" label="Данные" value="Редактировать профиль" onPress={() => router.push('/EditProfile')} />
      <InfoRow icon="cart" label="Заказ" value="Корзина" onPress={() => router.push('/Cart')} />
      <InfoRow icon="receipt" label="История" value="Мои заказы" onPress={() => router.push('/Orders')} />
    </Screen>
  );
}
