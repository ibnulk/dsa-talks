// Find first occurance of an element from an array
const testElements = [
  1, 1, 1, 1, 2, 3, 4, 4, 5, 5, 5, 6, 7, 8, 8, 8, 8, 8, 9, 9, 10, 11, 11, 11,
];
const testValue = 8;

const findFirstOccurance = (
  elements: number[],
  elementToFind: number
): number => {
  let start = 0;
  let end = elements.length - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (elements[mid] === elementToFind) {
      if (elements[mid - 1] !== elementToFind) {
        return mid;
      }
      if (elements[mid - 1] === elementToFind) {
        end = mid;
      }
    } else if (elements[mid] < elementToFind) {
      mid = mid + 1;
      start = mid;
    } else {
      mid = mid - 1;
      end = mid;
    }
  }

  return -1;
};

console.log(findFirstOccurance(testElements, testValue));
