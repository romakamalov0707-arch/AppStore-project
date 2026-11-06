import PrimaryButton from './PrimaryButton';
import type { ButtonProps } from '../utils/types';

export default function CheckoutButton({ onPress, disabled, style }: ButtonProps) {
  return <PrimaryButton title="Оформить заказ" onPress={onPress} disabled={disabled} style={style} />;
}
