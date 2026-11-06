import PrimaryButton from './PrimaryButton';
import type { ButtonProps } from '../utils/types';

export default function ContinueButton({ onPress, disabled, style }: ButtonProps) {
  return <PrimaryButton title="Продолжить" onPress={onPress} disabled={disabled} style={style} />;
}
