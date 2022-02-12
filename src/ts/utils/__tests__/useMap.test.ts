import { useMap } from '../useMap';

describe('useMap test', () => {
  // Sample array
  const books = [
    { title: 'PHP7 for Beginner', price: 2700 },
    { title: 'TypeScript type definition explanation', price: 3400 },
    { title: 'Network & server construction from AWS basics', price: 1600 },
    { title: 'CSS Design Complete Guide', price: 2800 },
    { title: 'Sass textbook', price: 2000 },
  ];

  // Result array
  const result = [5400, 6800, 3200, 5600, 4000];

  test('State pattern to be a processed array', () => {
    const boublePrice = (book: { price: number }) => book.price * 2;
    expect(useMap(books, boublePrice)).toStrictEqual(result);
  });
});
