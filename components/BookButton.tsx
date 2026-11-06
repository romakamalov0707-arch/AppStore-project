import PrimaryButton from './PrimaryButton';
import type { ButtonProps } from '../utils/types';

export default function BookButton({ onPress, disabled, style }: ButtonProps) {
  return <PrimaryButton title="Забронировать" onPress={onPress} disabled={disabled} style={style} />;
}
