import { expect } from 'chai';
import DeDuplicated from '../src/index';

describe('simpleArray method', () => {
  const deDuplicated = new DeDuplicated();

  describe('#Array of numbers element', () => {
    const simpleArray = [2, 5, 8, 2, 2, 8, 5, 2, 3];
    const result = [2, 5, 8, 3];
    it(`sent array[ ${[...simpleArray]} ]should result equal [ ${result} ]`, () => {
      expect(deDuplicated.simpleArray(simpleArray)).to.be.eql(result);
    });
  });
  describe('#Array of String elements', () => {
    const simpleArray = ['john', 'milad', 'Milad', 'john', 'John'];
    const result = ['john', 'milad'];
    it(`sent array[ ${[...simpleArray]} ]should result equal [ ${result} ]`, () => {
      expect(deDuplicated.simpleArray(simpleArray)).to.be.eql(result);
    });
  });
  describe('#Array of mix of string and numbers elements', () => {
    const simpleArray = [1, 2, 1, 2, 5, 8, 8, 5, 'john', 'milad', 'Milad', 'john', 'John'];
    const result = [1, 2, 5, 8, 'john', 'milad'];
    it(`sent array[ ${[...simpleArray]} ]should result equal [ ${result} ]`, () => {
      expect(deDuplicated.simpleArray(simpleArray)).to.be.eql(result);
    });
  });
});

describe('Complex method', () => {
  const deDuplicated = new DeDuplicated();

  describe('#Array of Objects element key for deleting duplicated(id)', () => {
    const compexArray = [
      { id: 1, name: 'Milad', age: 24 },
      { id: 2, name: 'Milad', age: 24 },
      { id: 1, name: 'Milad', age: 24 },
      { id: 3, name: 'Milad', age: 24 },
      { id: 1, name: 'Milad', age: 24 },
      { id: 2, name: 'Milad', age: 24 },
    ];
    const result = [
      { id: 1, name: 'Milad', age: 24 },
      { id: 2, name: 'Milad', age: 24 },
      { id: 3, name: 'Milad', age: 24 },
    ];
    it('sent complex array of objects and key (id) should result equal unique array', () => {
      expect(deDuplicated.complexArray(compexArray, 'id')).to.be.eql(result);
    });
  });
  describe('#Array of Objects element key for deleting duplicated(name)', () => {
    const compexArray = [
      { id: 1, name: 'Milad', age: 24 },
      { id: 2, name: 'John', age: 24 },
      { id: 1, name: 'Milad', age: 24 },
      { id: 3, name: 'John', age: 24 },
      { id: 1, name: 'Milad', age: 24 },
      { id: 2, name: 'Milad', age: 24 },
    ];
    const result = [{ id: 1, name: 'Milad', age: 24 }, { id: 2, name: 'John', age: 24 }];
    it('sent complex array of objects and key (name) should result equal unique array', () => {
      expect(deDuplicated.complexArray(compexArray, 'name')).to.be.eql(result);
    });
  });

  describe('#Array of Objects element key for deleting duplicated(name) case sensetive', () => {
    const compexArray = [
      { id: 1, name: 'Milad', age: 24 },
      { id: 2, name: 'milad', age: 24 },
      { id: 1, name: 'Milad', age: 24 },
      { id: 3, name: 'milad', age: 24 },
      { id: 1, name: 'Milad', age: 24 },
      { id: 2, name: 'Milad', age: 24 },
    ];
    const result = [
      { id: 1, name: 'Milad', age: 24 },
      { id: 2, name: 'milad', age: 24 },
    ];
    it('sent complex array of objects and key (name) should result equal unique array', () => {
      expect(deDuplicated.complexArray(compexArray, 'name')).to.be.eql(result);
    });
  });
});
