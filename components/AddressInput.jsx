import Input from './Input';

export default function AddressInput({ value, onChange }) {
  return <Input icon="home" placeholder="Адрес доставки" value={value} onChangeText={onChange} />;
}
