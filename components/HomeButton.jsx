import PrimaryButton from './PrimaryButton';

export default function HomeButton({ onPress, disabled, style }) {
  return <PrimaryButton title="На главную" onPress={onPress} disabled={disabled} style={style} />;
}
