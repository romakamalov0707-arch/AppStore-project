import PrimaryButton from './PrimaryButton';
import type { ButtonProps } from '../utils/types';

export default function ConfirmOrderButton({ onPress, disabled, style }: ButtonProps) {
  return <PrimaryButton title="Подтвердить заказ" onPress={onPress} disabled={disabled} style={style} />;
}
