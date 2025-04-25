import { Product } from './product'; // READ!

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product('1', '123', 'Test', 'Test', 10, 'Test', true, 10, new Date(), new Date())).toBeTruthy();
  });
});
