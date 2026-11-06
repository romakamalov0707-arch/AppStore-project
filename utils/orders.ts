import type { Order } from './types';

export const orders: Order[] = [];

export function addOrder(order: Order) {
  orders.unshift(order);
}

export function clearOrders() {
  orders.length = 0;
}
