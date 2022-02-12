import { useSome } from '../useSome';

describe('useSome test', () => {
  // Sample array
  const books = [
    { title: 'PHP7 for Beginner', price: 2700 },
    { title: 'TypeScript type definition explanation', price: 3400 },
    { title: 'Network & server construction from AWS basics', price: 1600 },
    { title: 'CSS Design Complete Guide', price: 2800 },
    { title: 'Sass textbook', price: 2000 },
  ];

  test('useSome statement pattern to be true', () => {
    const checkPriceOver = (book: { price: number }) => book.price >= 1000;
    expect(useSome(books, checkPriceOver)).toBe(true);
  });
  test('useSome statement pattern to be false', () => {
    const checkPriceOver = (book: { title: string }) => book.title === 'Sass textbook1';
    expect(useSome(books, checkPriceOver)).toBe(false);
  });
});
