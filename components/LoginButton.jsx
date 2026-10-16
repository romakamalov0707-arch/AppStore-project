import PrimaryButton from './PrimaryButton';

export default function LoginButton({ onPress, disabled, style }) {
  return <PrimaryButton title="Войти" onPress={onPress} disabled={disabled} style={style} />;
}
