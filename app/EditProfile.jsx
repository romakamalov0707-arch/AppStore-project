import { useState } from 'react';
import { router } from 'expo-router';
import Screen from '../components/Screen';
import NameInput from '../components/NameInput';
import PhoneInput from '../components/PhoneInput';
import AddressInput from '../components/AddressInput';
import ErrorText from '../components/ErrorText';
import SaveButton from '../components/SaveButton';
import { user } from '../utils/user';
import { isPhoneComplete } from '../utils/phone';

export default function EditProfile() {
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);
  const [error, setError] = useState(null);

  const onSave = () => {
    if (!name.trim()) return setError('Введите имя');
    if (!isPhoneComplete(phone)) return setError('Введите номер телефона полностью');

    user.name = name.trim();
    user.phone = phone;
    user.address = address.trim();
    router.back();
  };

  return (
    <Screen title="Редактировать профиль" subtitle="Измените свои данные" footer={<SaveButton onPress={onSave} />}>
      <NameInput value={name} onChange={setName} />
      <PhoneInput value={phone} onChange={setPhone} />
      <AddressInput value={address} onChange={setAddress} />
      <ErrorText>{error}</ErrorText>
    </Screen>
  );
}
