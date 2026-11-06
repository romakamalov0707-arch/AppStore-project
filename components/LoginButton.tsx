import PrimaryButton from './PrimaryButton';
import type { ButtonProps } from '../utils/types';

export default function LoginButton({ onPress, disabled, style }: ButtonProps) {
  return <PrimaryButton title="Войти" onPress={onPress} disabled={disabled} style={style} />;
}
