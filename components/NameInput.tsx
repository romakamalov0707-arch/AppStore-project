import Input from './Input';
import type { FieldProps } from '../utils/types';

export default function NameInput({ value, onChange }: FieldProps) {
  return <Input icon="person" placeholder="Ваше имя" autoCapitalize="words" value={value} onChangeText={onChange} />;
}
