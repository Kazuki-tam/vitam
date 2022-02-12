import { useFilter } from '../useFilter';

describe('useFilter test', () => {
  // Sample array
  const books = [
    { title: 'PHP7 for Beginner', price: 2700 },
    { title: 'TypeScript type definition explanation', price: 3400 },
    { title: 'Network & server construction from AWS basics', price: 1600 },
    { title: 'CSS Design Complete Guide', price: 2800 },
    { title: 'Sass textbook', price: 2000 },
  ];

  // Result
  const result = [
    { title: 'PHP7 for Beginner', price: 2700 },
    { title: 'TypeScript type definition explanation', price: 3400 },
    { title: 'CSS Design Complete Guide', price: 2800 },
  ];

  test('State pattern to be a filtered array', () => {
    const checkPriceOver = (book: { price: number }) => book.price >= 2500;
    expect(useFilter(books, checkPriceOver)).toStrictEqual(result);
  });

  test('State pattern to be a empty array', () => {
    const checkPriceOver = (book: { price: number }) => book.price >= 4000;
    expect(useFilter(books, checkPriceOver)).toStrictEqual([]);
  });
});
