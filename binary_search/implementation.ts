// Implement binary search to find an element
const tetsArray = [1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 9];
const elementsToFind = 8;

/**
 * Explanation:
 * ==============
 * We start binary search with a sorted array. The algorithm approaches by dividing the array
 * into two distinct parts. Hence the name binary.
 *
 * First we calucalte the mid index of the array from start and end index.
 * Start index being 0 and end index being array.lenght -1. Then we campare the
 * value at the mid index with the value we are searching for. Based on this comparision
 * we'll have three conditon:
 * (1.) The value at mid index will match the desired value. We have already
 * found what we are searching for. Thus we return the value.
 * (2.) The value at mid index is less than the desired value. We can infer
 * that our desired value belongs to one of the higher indices(if the array
 * is sorted in ascending order) or to one of the lower indices(if the array is
 * sorted in descending order). Assuming ascending order we re-calculate the start, and mid
 * index keeping the the end index as same in the following way
 * mid = mid + 1
 * start = mid
 * Thus ensuring that our next iteration will only involve the right hand side elements
 * from mid index of the main array. We keep iterating with this conidition untile we reach step (1).
 * (3.) The value at mid index is greater then the desired value. In this case we know
 * that our desired value lies among the left hand side elements from the mid index of the main
 * array(assuming descending order). Here we re-calculate the mid and end index keeping the
 * start index same as its original value:
 * mid = mid -1
 * end = mid
 * We keep iterating until we hit condition (1) and return the desired value.
 *
 *
 * This is how we implement binary search by dividing an array in two parts at each
 * iteration.
 *
 */

const findElementsByBinarySearch = (
  elementsArray: number[],
  elementToFind: number
): number => {
  let start = 0;
  let end = elementsArray.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (elementsArray[mid] === elementToFind) {
      return elementsArray[mid];
    } else if (elementsArray[mid] < elementToFind) {
      mid = mid + 1;
      start = mid;
    } else {
      mid = mid - 1;
      end = mid;
    }
  }

  return 0;
};

console.log(findElementsByBinarySearch(tetsArray, elementsToFind));
