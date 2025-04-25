import { CartItem } from './cart-item'; // READ!
import { OrderItem } from './order-item';
import { Product } from './product';

describe('OrderItem', () => {
  it('should create an instance', () => {
    expect(new OrderItem(new CartItem(new Product('1', '123', 'Test', 'Test', 10, 'Test', true, 10, new Date(), new Date())))).toBeTruthy();
  });
});
