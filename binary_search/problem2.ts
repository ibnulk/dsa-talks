/**
 * Given a sorted array A and a target T, find the target.
 * If the target is not in the array, find the number closest to the target.
 * For example, if A = [2,3,5,8,9,11] and T = 7, return index of 8, i.e. return 3
 */

const findClosestTarget = (elements: number[], target: number) => {
  let start = 0;
  let end = elements.length - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (target === elements[mid]) {
      if (target === elements[mid + 1]) {
        start = mid + 1;
      } else {
        return mid;
      }
    } else if (target > elements[mid]) {
      if (target < elements[mid + 1]) {
        return mid + 1;
      }
      start = mid + 1;
    } else if (target < elements[mid]) {
      if (target > elements[mid - 1]) {
        return mid - 1;
      }
      end = mid - 1;
    }
  }

  return -1;
};

const A = [2, 3, 5, 8, 9, 11];
const T = 10;
console.log(findClosestTarget(A, T));
