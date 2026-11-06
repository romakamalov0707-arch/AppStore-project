import PrimaryButton from './PrimaryButton';
import type { ButtonProps } from '../utils/types';

export default function HomeButton({ onPress, disabled, style }: ButtonProps) {
  return <PrimaryButton title="На главную" onPress={onPress} disabled={disabled} style={style} />;
}
