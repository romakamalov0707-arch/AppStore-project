import { useState } from 'react';
import { router } from 'expo-router';
import Screen from '../components/Screen';
import SectionTitle from '../components/SectionTitle';
import AddressInput from '../components/AddressInput';
import CommentInput from '../components/CommentInput';
import PaymentOption from '../components/PaymentOption';
import TotalRow from '../components/TotalRow';
import ErrorText from '../components/ErrorText';
import ConfirmOrderButton from '../components/ConfirmOrderButton';
import { user } from '../utils/user';
import { clearCart, getTotal } from '../utils/cart';

export default function Checkout() {
  const [address, setAddress] = useState(user.address);
  const [comment, setComment] = useState('');
  const [payment, setPayment] = useState('cash');
  const [error, setError] = useState(null);

  const onConfirm = () => {
    if (!address.trim()) return setError('Укажите адрес доставки');

    user.address = address.trim();
    const number = Math.floor(1000 + Math.random() * 9000);
    clearCart();

    if (router.canDismiss()) router.dismissAll();
    router.replace({ pathname: '/OrderSuccess', params: { number, address: user.address } });
  };

  return (
    <Screen
      title="Оформление заказа"
      subtitle="Куда и как доставить"
      footer={<ConfirmOrderButton onPress={onConfirm} />}
    >
      <AddressInput value={address} onChange={setAddress} />
      <CommentInput value={comment} onChange={setComment} />
      <ErrorText>{error}</ErrorText>

      <SectionTitle>Оплата</SectionTitle>
      <PaymentOption
        icon="cash"
        label="Наличными курьеру"
        selected={payment === 'cash'}
        onPress={() => setPayment('cash')}
      />
      <PaymentOption
        icon="card"
        label="Картой курьеру"
        selected={payment === 'card'}
        onPress={() => setPayment('card')}
      />

      <TotalRow total={getTotal()} />
    </Screen>
  );
}
