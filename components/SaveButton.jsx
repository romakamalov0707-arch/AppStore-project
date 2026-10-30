import PrimaryButton from './PrimaryButton';

export default function SaveButton({ onPress, disabled, style }) {
  return <PrimaryButton title="Сохранить" onPress={onPress} disabled={disabled} style={style} />;
}
