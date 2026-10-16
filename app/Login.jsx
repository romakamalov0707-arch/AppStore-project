import { useState } from 'react';
import { Text, View } from 'react-native';
import { router } from 'expo-router';
import Screen from '../components/Screen';
import PhoneInput from '../components/PhoneInput';
import PasswordInput from '../components/PasswordInput';
import TextLink from '../components/TextLink';
import ErrorText from '../components/ErrorText';
import LoginButton from '../components/LoginButton';
import { common } from '../components/theme';
import { isPhoneComplete } from '../utils/phone';
import { user } from '../utils/user';

export default function Login() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const onLogin = () => {
    if (!isPhoneComplete(phone)) return setError('Введите номер телефона полностью');
    if (!password) return setError('Введите пароль');
    setError(null);
    user.phone = phone;
    router.replace('/Home');
  };

  return (
    <Screen title="Привет, с возвращением!" subtitle="Войдите в свой аккаунт.">
      <PhoneInput value={phone} onChange={setPhone} />
      <PasswordInput value={password} onChange={setPassword} />

      <TextLink href="/ForgotPassword" style={{ alignSelf: 'flex-end', marginBottom: 24 }}>
        Забыли пароль?
      </TextLink>

      <ErrorText>{error}</ErrorText>

      <LoginButton onPress={onLogin} />

      <View style={{ alignItems: 'center', marginTop: 24, gap: 6 }}>
        <Text style={common.muted}>У вас нет аккаунта?</Text>
        <TextLink href="/Register">Зарегистрироваться</TextLink>
      </View>
    </Screen>
  );
}
