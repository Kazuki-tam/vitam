import { useFind } from '../useFind';

describe('useFind test', () => {
  // Sample array
  const books = [
    { title: 'PHP7 for Beginner', price: 2700 },
    { title: 'TypeScript type definition explanation', price: 3400 },
    { title: 'Network & server construction from AWS basics', price: 1600 },
    { title: 'CSS Design Complete Guide', price: 2800 },
    { title: 'Sass textbook', price: 2000 },
  ];

  // Result
  const result = { title: 'PHP7 for Beginner', price: 2700 };

  test('State pattern to be the first finded element', () => {
    const checkPriceOver = (book: { title: string }) => book.title === 'PHP7 for Beginner';
    expect(useFind(books, checkPriceOver)).toStrictEqual(result);
  });

  test('State pattern to be undefined', () => {
    const checkPriceOver = (book: { price: number }) => book.price >= 4000;
    expect(useFind(books, checkPriceOver)).toStrictEqual(undefined);
  });
});
