import PrimaryButton from './PrimaryButton';

export default function RegisterButton({ onPress, disabled, style }) {
  return <PrimaryButton title="Зарегистрироваться" onPress={onPress} disabled={disabled} style={style} />;
}
