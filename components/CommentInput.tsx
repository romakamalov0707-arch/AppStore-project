import Input from './Input';
import type { FieldProps } from '../utils/types';

export default function CommentInput({ value, onChange }: FieldProps) {
  return <Input icon="chatbox" placeholder="Комментарий к заказу" value={value} onChangeText={onChange} />;
}
