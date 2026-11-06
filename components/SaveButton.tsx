import PrimaryButton from './PrimaryButton';
import type { ButtonProps } from '../utils/types';

export default function SaveButton({ onPress, disabled, style }: ButtonProps) {
  return <PrimaryButton title="Сохранить" onPress={onPress} disabled={disabled} style={style} />;
}
