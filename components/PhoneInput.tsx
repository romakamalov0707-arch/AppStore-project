import Input from './Input';
import type { FieldProps } from '../utils/types';
import { formatPhone } from '../utils/phone';

export default function PhoneInput({ value, onChange }: FieldProps) {
  return (
    <Input
      icon="call"
      placeholder="Номер телефона"
      keyboardType="phone-pad"
      value={value}
      onChangeText={(t) => onChange(formatPhone(t))}
    />
  );
}
