import { useState } from 'react';
import { Text, View } from 'react-native';
import { router } from 'expo-router';
import Screen from '../components/Screen';
import NameInput from '../components/NameInput';
import PhoneInput from '../components/PhoneInput';
import PasswordInput from '../components/PasswordInput';
import ErrorText from '../components/ErrorText';
import TermsCheckbox from '../components/TermsCheckbox';
import RegisterButton from '../components/RegisterButton';
import TextLink from '../components/TextLink';
import { common } from '../components/theme';
import { isPhoneComplete } from '../utils/phone';
import { validatePassword } from '../utils/password';
import { user } from '../utils/user';

export default function Register() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState(null);

  const canSubmit = agreed && name.trim() && isPhoneComplete(phone) && password;

  const onSubmit = () => {
    const err = validatePassword(password);
    setError(err);
    if (err) return;
    user.name = name.trim();
    user.phone = phone;
    router.push('/SelectCity');
  };

  return (
    <Screen title="Регистрация" subtitle="Создайте учетную запись, чтобы продолжить!">
      <NameInput value={name} onChange={setName} />
      <PhoneInput value={phone} onChange={setPhone} />
      <PasswordInput value={password} onChange={setPassword} />
      <ErrorText>{error}</ErrorText>

      <TermsCheckbox checked={agreed} onChange={setAgreed} />

      <RegisterButton disabled={!canSubmit} onPress={onSubmit} />

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 24 }}>
        <Text style={common.muted}>Уже есть аккаунт? </Text>
        <TextLink href="/Login">Войти</TextLink>
      </View>
    </Screen>
  );
}
