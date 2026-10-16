import PrimaryButton from './PrimaryButton';

export default function BookButton({ onPress, disabled, style }) {
  return <PrimaryButton title="Забронировать" onPress={onPress} disabled={disabled} style={style} />;
}
