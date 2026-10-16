import { useState } from 'react';
import { router } from 'expo-router';
import Screen from '../components/Screen';
import PasswordInput from '../components/PasswordInput';
import ErrorText from '../components/ErrorText';
import ContinueButton from '../components/ContinueButton';
import { validatePassword } from '../utils/password';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [repeat, setRepeat] = useState('');
  const [error, setError] = useState(null);

  const onSubmit = () => {
    let err = validatePassword(password);
    if (!err && password !== repeat) err = 'Пароли не совпадают';
    setError(err);
    if (!err) router.dismissTo('/Login');
  };

  return (
    <Screen center title="Сбросить пароль" subtitle="Не менее 8 символов, с прописными и строчными буквами">
      <PasswordInput value={password} onChange={setPassword} />
      <PasswordInput placeholder="Повторить пароль" value={repeat} onChange={setRepeat} />
      <ErrorText style={{ marginBottom: 8 }}>{error}</ErrorText>
      <ContinueButton onPress={onSubmit} style={{ marginTop: 8 }} />
    </Screen>
  );
}
