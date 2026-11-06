import Input from './Input';
import type { FieldProps } from '../utils/types';

export default function AddressInput({ value, onChange }: FieldProps) {
  return <Input icon="home" placeholder="Адрес доставки" value={value} onChangeText={onChange} />;
}
