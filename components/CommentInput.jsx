import Input from './Input';

export default function CommentInput({ value, onChange }) {
  return <Input icon="chatbox" placeholder="Комментарий к заказу" value={value} onChangeText={onChange} />;
}
