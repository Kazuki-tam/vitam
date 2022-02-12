import { useEvery } from '../useEvery';

describe('useEvery test', () => {
  // Sample array
  const books = [
    { title: 'PHP7 for Beginner', price: 2700 },
    { title: 'TypeScript type definition explanation', price: 3400 },
    { title: 'Network & server construction from AWS basics', price: 1600 },
    { title: 'CSS Design Complete Guide', price: 2800 },
    { title: 'Sass textbook', price: 2000 },
  ];

  test('State pattern to be true', () => {
    const checkPriceOver = (book: { price: number }) => book.price >= 1000;
    expect(useEvery(books, checkPriceOver)).toBe(true);
  });
  test('State pattern to be false', () => {
    const checkPriceOver = (book: { price: number }) => book.price >= 2000;
    expect(useEvery(books, checkPriceOver)).toBe(false);
  });
});
