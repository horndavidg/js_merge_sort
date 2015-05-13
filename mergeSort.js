
// // Merge takes two sorted arrays (left, right) and
// // returns one array which contains the sorted numbers
// // from left and right.
// exports.merge = function(left, right) {
// }

// // Merge sort uses the merge function in order to
// // sort an array. Given an array of numbers in any
// // order, merge sort should return an array that is
// // sorted.
// exports.mergeSort = function(arr) {
// }

var merge = function(left,right) {

	var i = 0;
	var j = 0;
	var results = [];

	while (i < left.length || j < right.length) {
		if (i === left.length) {
				results.push(right[j]);
				j++;

		}  else if (j === right.length || left[i] <= right[j]) {

			results.push(left[i]);
			i++;
		} else {

			results.push(right[j]);
			j++;
		}

		}
	return results;
};

function mySort(arr) {

	if (arr.length < 2) {
		return arr;
	}
	var mid = Math.floor(arr.length/2);
	var left = arr.slice(0, mid);
	var right = arr.slice(mid, arr.length);

	var sortL = mySort(left);
	var sortR = mySort(right);

	return merge(sortL, sortR);

};

module.exports = {
	merge: merge,
	mergeSort: mySort
};