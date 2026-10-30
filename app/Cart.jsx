import { useCallback, useState } from 'react';
import { router, useFocusEffect } from 'expo-router';
import Screen from '../components/Screen';
import CartItem from '../components/CartItem';
import TotalRow from '../components/TotalRow';
import EmptyState from '../components/EmptyState';
import CheckoutButton from '../components/CheckoutButton';
import HomeButton from '../components/HomeButton';
import { addToCart, cart, getTotal, removeFromCart } from '../utils/cart';

export default function Cart() {
  const [items, setItems] = useState([...cart]);

  useFocusEffect(
    useCallback(() => {
      setItems([...cart]);
    }, [])
  );

  const onPlus = (item) => {
    addToCart(item);
    setItems([...cart]);
  };

  const onMinus = (item) => {
    removeFromCart(item.id);
    setItems([...cart]);
  };

  if (items.length === 0) {
    return (
      <Screen title="Корзина" footer={<HomeButton onPress={() => router.dismissTo('/Home')} />}>
        <EmptyState icon="cart-outline" text="Корзина пустая. Добавьте блюда из меню заведения." />
      </Screen>
    );
  }

  return (
    <Screen
      title="Корзина"
      subtitle="Проверьте заказ перед оформлением"
      footer={<CheckoutButton onPress={() => router.push('/Checkout')} />}
    >
      {items.map((item) => (
        <CartItem key={item.id} item={item} onPlus={() => onPlus(item)} onMinus={() => onMinus(item)} />
      ))}

      <TotalRow total={getTotal()} />
    </Screen>
  );
}
