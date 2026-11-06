import Input from './Input';
import type { FieldProps } from '../utils/types';

export default function PasswordInput({ value, onChange, placeholder = 'Пароль' }: FieldProps & { placeholder?: string }) {
  return <Input icon="lock-closed" placeholder={placeholder} secureTextEntry value={value} onChangeText={onChange} />;
}
