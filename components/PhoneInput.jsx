import Input from './Input';
import { formatPhone } from '../utils/phone';

export default function PhoneInput({ value, onChange }) {
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
