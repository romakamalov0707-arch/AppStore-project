import Input from './Input';

export default function NameInput({ value, onChange }) {
  return <Input icon="person" placeholder="Ваше имя" autoCapitalize="words" value={value} onChangeText={onChange} />;
}
