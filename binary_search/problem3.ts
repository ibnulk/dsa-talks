/**
 * Find the square root of an integer X.
 * For example, squareRoot(4) = 2.
 * If X is not a perfect square, find the integer floor of the square root.
 * For example,squareRoot(5) & squareRoot(8) will return 2.
 * squareRoot(9) will return 3.
 */
const findSquareRoot = (target: number) => {
  const elements = [...Array(target + 1).keys()];
  let start = 0;
  let end = elements.length - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (elements[mid] ** 2 === target) {
      return elements[mid];
    } else if (elements[mid] ** 2 > target) {
      if (elements[mid - 1] ** 2 <= target) {
        return elements[mid - 1];
      }
      end = mid - 1;
    } else if (elements[mid] ** 2 < target) {
      if (elements[mid + 1] >= target) {
        return elements[mid + 1];
      }
      start = mid + 1;
    } else {
      return -1;
    }
  }
};

console.log(findSquareRoot(16));
