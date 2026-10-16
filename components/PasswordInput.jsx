import Input from './Input';

export default function PasswordInput({ value, onChange, placeholder = 'Пароль' }) {
  return <Input icon="lock-closed" placeholder={placeholder} secureTextEntry value={value} onChangeText={onChange} />;
}
