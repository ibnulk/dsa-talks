/**
 * Find the square root of an integer X.
 * For example, squareRoot(4) = 2.
 * If X is not a perfect square, find the integer floor of the square root.
 * For example,squareRoot(5) & squareRoot(8) will return 2.
 * squareRoot(9) will return 3.
 */
const findSquareRoot = (target: number) => {
  let start = 0;
  let end = target; //  a bit more optimisation would be target / 2

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (mid ** 2 === target) {
      return mid;
    } else if (mid ** 2 > target) {
      if ((mid - 1) ** 2 <= target) {
        return mid - 1;
      }
      end = mid - 1;
    } else if (mid ** 2 < target) {
      if ((mid + 1) ** 2 === target) {
        return mid + 1;
      }
      if ((mid + 1) ** 2 > target) {
        return mid;
      }
      start = mid + 1;
    } else {
      return -1;
    }
  }
};

console.log(findSquareRoot(8));
