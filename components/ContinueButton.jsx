import PrimaryButton from './PrimaryButton';

export default function ContinueButton({ onPress, disabled, style }) {
  return <PrimaryButton title="Продолжить" onPress={onPress} disabled={disabled} style={style} />;
}
