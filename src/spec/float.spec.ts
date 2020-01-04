import { Float } from '../classes/float';

describe('Test Float type', () => {
  test('Sum', () => {
    const term = (new Float(5.6) as unknown) as number;
    const term2 = (new Float(4.4) as unknown) as number;
    const summ = term + term2;
    expect(summ).toBeCloseTo(10);
  });
});
