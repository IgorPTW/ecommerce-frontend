import { CartItem } from './cart-item'; // READ!
import { Product } from './product';

describe('CartItem', () => {
  it('should create an instance', () => {
    expect(new CartItem(new Product('1', '123', 'Test', 'Test', 10, 'Test', true, 10, new Date(), new Date()))).toBeTruthy();
  });
});
