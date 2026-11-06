import PrimaryButton from './PrimaryButton';
import type { ButtonProps } from '../utils/types';

export default function RegisterButton({ onPress, disabled, style }: ButtonProps) {
  return <PrimaryButton title="Зарегистрироваться" onPress={onPress} disabled={disabled} style={style} />;
}
