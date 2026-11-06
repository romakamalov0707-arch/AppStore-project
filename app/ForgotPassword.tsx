import { useState } from 'react';
import { router } from 'expo-router';
import Screen from '../components/Screen';
import PhoneInput from '../components/PhoneInput';
import ContinueButton from '../components/ContinueButton';
import { isPhoneComplete } from '../utils/phone';

export default function ForgotPassword() {
  const [phone, setPhone] = useState('');

  return (
    <Screen center title="Восстановление пароля" subtitle="Введите свой номер телефона, чтобы восстановить пароль">
      <PhoneInput value={phone} onChange={setPhone} />
      <ContinueButton
        disabled={!isPhoneComplete(phone)}
        onPress={() => router.push({ pathname: '/VerifyCode', params: { phone } })}
        style={{ marginTop: 8 }}
      />
    </Screen>
  );
}
