import { useCallback, useState } from 'react';
import { router, useFocusEffect } from 'expo-router';
import Screen from '../components/Screen';
import OrderCard from '../components/OrderCard';
import EmptyState from '../components/EmptyState';
import HomeButton from '../components/HomeButton';
import { orders } from '../utils/orders';

export default function Orders() {
  const [list, setList] = useState([...orders]);

  useFocusEffect(
    useCallback(() => {
      setList([...orders]);
    }, [])
  );

  if (list.length === 0) {
    return (
      <Screen title="Мои заказы" footer={<HomeButton onPress={() => router.dismissTo('/Home')} />}>
        <EmptyState icon="receipt-outline" text="Заказов пока нет. Выберите заведение и оформите первый заказ." />
      </Screen>
    );
  }

  return (
    <Screen title="Мои заказы" subtitle={`Всего заказов: ${list.length}`}>
      {list.map((order) => (
        <OrderCard key={order.number} order={order} />
      ))}
    </Screen>
  );
}
