import { useEvery } from './useEvery';

describe('useEvery test', () => {
  // Sample array
  const books = [
    { title: 'PHP7 for Beginner', price: 2700 },
    { title: 'TypeScript type definition explanation', price: 3400 },
    { title: 'Network & server construction from AWS basics', price: 1600 },
    { title: 'CSS Design Complete Guide', price: 2800 },
    { title: 'Sass textbook', price: 2000 },
  ];

  test('useEvery statement pattern', () => {
    const checkPriceOver = (book: { price: number }) => book.price >= 1000;
    expect(useEvery(books, checkPriceOver)).toBe(true);
  });
});
