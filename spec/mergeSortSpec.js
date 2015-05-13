var mergeSort = require("../mergeSort.js");

describe('Merge', function() {
  it('should merge two arrays of a given size', function() {
     expect(mergeSort.merge([1],[2])).toEqual([1,2]);
     expect(mergeSort.merge([1, 5],[2, 3])).toEqual([1,2,3,5]);
  });

});

describe('Merge Sort', function() {
  it('should sort an array of size 1', function() {
     expect(mergeSort.merge([2],[1])).toEqual([1,2]);
  });

});


describe('Merge Sort', function() {
  it('should sort an array of size 1', function() {
     expect(mergeSort.mergeSort([2,1])).toEqual([1,2]);
     expect(mergeSort.mergeSort([2,1,5,11,7])).toEqual([1,2,5,7,11]);
  });

});
