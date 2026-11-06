import type { CartItemData, Dish } from './types';

export const cart: CartItemData[] = [];

export function addToCart(dish: Dish) {
  const item = cart.find((i) => i.id === dish.id);
  if (item) {
    item.qty = item.qty + 1;
  } else {
    cart.push({ id: dish.id, name: dish.name, price: dish.price, qty: 1 });
  }
}

export function removeFromCart(id: string) {
  const index = cart.findIndex((i) => i.id === id);
  if (index === -1) return;

  cart[index].qty = cart[index].qty - 1;
  if (cart[index].qty === 0) {
    cart.splice(index, 1);
  }
}

export function getQty(id: string) {
  const item = cart.find((i) => i.id === id);
  return item ? item.qty : 0;
}

export function getCount() {
  let count = 0;
  for (const item of cart) count = count + item.qty;
  return count;
}

export function getTotal() {
  let total = 0;
  for (const item of cart) total = total + item.price * item.qty;
  return total;
}

export function clearCart() {
  cart.length = 0;
}

export function formatPrice(price: number) {
  return price + ' ₸';
}
