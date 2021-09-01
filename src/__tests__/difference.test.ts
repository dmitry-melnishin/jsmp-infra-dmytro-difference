import difference from '../index';

describe('difference', () => {
    it('should return an empty array', () => {
        expect(difference([], [1, 2])).toEqual([]);
    });

    it('should return [a, b]', () => {
        expect(difference(['a', 'b', 3, 4], [3, 4])).toEqual(['a', 'b']);
    });

    it('should return [2, b]', () => {
        expect(difference(['a', 2, 'b', 3], ['a', 3])).toEqual([2, 'b']);
    });
});
