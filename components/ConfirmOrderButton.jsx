import PrimaryButton from './PrimaryButton';

export default function ConfirmOrderButton({ onPress, disabled, style }) {
  return <PrimaryButton title="Подтвердить заказ" onPress={onPress} disabled={disabled} style={style} />;
}
