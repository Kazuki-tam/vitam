/**
 * @jest-environment jsdom
 */
import { getMediaQueryList } from '../getMediaQueryList';
import '../__mocks__/matchMedia.mock';

test('Test getMediaQueryList', () => {
  expect(getMediaQueryList('md')).toBeTruthy();
});
