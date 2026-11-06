import PrimaryButton from './PrimaryButton';
import { formatPrice } from '../utils/cart';

type Props = {
  count: number;
  total: number;
  onPress: () => void;
};

export default function GoToCartButton({ count, total, onPress }: Props) {
  return <PrimaryButton title={`Корзина (${count}) · ${formatPrice(total)}`} onPress={onPress} />;
}
