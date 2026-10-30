import PrimaryButton from './PrimaryButton';
import { formatPrice } from '../utils/cart';

export default function GoToCartButton({ count, total, onPress }) {
  return <PrimaryButton title={`Корзина (${count}) · ${formatPrice(total)}`} onPress={onPress} />;
}
