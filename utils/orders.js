export const orders = [];

export function addOrder(order) {
  orders.unshift(order);
}

export function clearOrders() {
  orders.length = 0;
}
