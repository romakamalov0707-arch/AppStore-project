import PrimaryButton from './PrimaryButton';

export default function CheckoutButton({ onPress, disabled, style }) {
  return <PrimaryButton title="Оформить заказ" onPress={onPress} disabled={disabled} style={style} />;
}
