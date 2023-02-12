# Quiz: Time Complexity

### Multiple Choice Questions

1. Indicate polynomial time complexity in terms of Big-O notation

   1. $O(n)$
   2. $O(n^2)$
   3. $O(2^n)$
   4. $O(logn)$

   `Ans: 2`

2. Find the slowest time complexity

   1. $O(n^2)$
   2. $O(nlogn)$
   3. $O(n!)$
   4. $O(2^n)$

   `Ans: 3`

3. Identify the time complexity in terms of Big-O for: $T(n) = 8 + 1/n$

   1. $O(n)$
   2. $O(1)$
   3. $O(logn)$
   4. $O(2^n)$

   `Ans: 2`

4. Identify Big-O of : $T(n) = n + n*sin (n)$

   1. $O(n)$
   2. $O(2n)$
   3. $O(n^2)$
   4. $O(n*sin(n))$

   `Ans: 1`

5. Identify Big-O of : $T(n) = .5x^2 + 1000xlogx$

   1. $O(x^2)$
   2. $O(xlogx)$
   3. $O(.5x^2)$
   4. $O(1000x^2)$

   `Ands: 1`

### Short Questions

1.  Suppose you have a sorted list of 130 names in a phonebook, and you’re searching
    through it using binary search. What’s the maximum number of
    steps it would take?

    ```bash
    Assuming 130th is the desired number:
    130%2 = 65
    65%2 = 32
    32%2 = 16
    16%2 = 8
    8%2 = 4
    4%2 = 2
    2%2 = 1
    So, a maximum of 7 steps are required

    ```

2.  Suppose you’re building an app to keep track of your finances.
    Every day, you write down everything you spent money on. At the
    end of the month, you review your expenses and sum up how much
    you spent. So, you have lots of inserts and a few reads. Should you
    use an array or a list? Justify your answer in terms of Big O

    ### Answer

    ```
    T(n) for instering into an array = O(1)
    T(n) for inserting into a list = O(1)

    T(n) for reading from an index of an array = O(1)
    t(n) for readinf from an index of list = O(n)

    So, based on this analysis Array is preferable
    ```

3.  Imagine you have a chessboard and put a single grain of rice on one
    square. On the second square, you put 2 grains of rice, since that is
    double the amount of rice on the previous square. On the third square,
    you put 4 grains. On the fourth square, you put 8 grains, and on the fifth
    square, you put 16 grains, and so on.

        The following function calculates which square you’ll need to place a certain number of rice grains. For example, for 16 grains, the function will return 5, since you will place the 16 grains on the fifth square.
        Use Big O Notation to describe the time complexity of this function, which is below:

        ```jsx
        function chessboardSpace(numberOfGrains) {
        	let chessboardSpaces = 1;
        	let placedGrains = 1;
        	while (placedGrains < numberOfGrains) {
        		placedGrains *= 2;
        		chessboardSpaces += 1;
        	}
        	return chessboardSpaces;
        }
        ```

    ### Answer

    ```
    When,
    numberOfGrains = 1 => while loop runs 1 times. so 2^0
    numberOfGrains = 2 => while loop runs 3 times. so 2^1
    numberOfGrains = 4 => while loop runs 3 times. so 2^2
    numberOfGrains = 8 => while loop runs 3 times. so 2^3
    numberOfGrains = 16 => while loop runs 4 times. so 2^4

    So, T(n) = O(2^0 + 2^1 + 2^2 + ... + 2^n) = O(logn)
    ```

4.  The following function calculates the median from an _ordered_ array.
    Describe its time complexity in terms of Big O Notation:

    ```jsx
    function median(array) {
      const middle = Math.floor(array.length / 2);
      if (array.length % 2 === 0) {
        return (array[middle - 1] + array[middle]) / 2;
      } else {
        return array[middle];
      }
    }
    ```

    ### Answer:

    ```bash
    T(n) of aray[middle -1] = O(1)
    T(n) of array[middle] = O(1)
    So, "if" condition T(n) = O(1) + O(1) / 2 = O(1)

    Similarly, "else" condition T(n) = O(1)
    So T(n) = O(1)
    ```

5.  Here’s a function which computes the product of every number from
    one array by every number of a second \*\*array. Use Big O notation to describe the time complexity

        ```jsx
        function twoNumberProducts(array1, array2) {
        	let products = [];
        	for(let i = 0; i < array1.length; i++) {
        		for(let j = 0; j < array2.length; j++) {
        	    products.push(array1[i] * array2[j]);
        	  }
        	}
        	return products;
        }
        ```

    ### Answer:

    ```
    first loop T(n) = O(n)
    second loop T(n) = O(n) + O(1) = O(n)
    T(n) = O(n) * O(n) = O(n^2)
    ```

6.  The following code performs integer division. What is its runtime (assume a and b are both positive)?

    ```jsx
    function div( a,  b) {
    	let count = 0;
    	let sum = b·,
    	while (sum <= a) {
    		sum += b;
    		count++;
    	}
    	return count;
    }
    ```

    ### Answer

    ```
    When a < b, T(n) = O(1)
    When a > b, T(n) = O(n)

    ```

7.  Find the Big-O time complexity of the following code fragment where input is $n$:

    ```jsx
    let i = n;
    while (i > 0) {
      for (let j = 0; j < n; j++) console.log("*");
      i = i / 2;
    }
    ```

    ### Answer

    ```
    while loop T(n) = O(n/2)
    for loop T(n) = O(n)

    So, T(n) = O(n/2) * O(n) = O(n/2 * n) = O(n^2/2) = O(n^2)
    ```

8.  Find the Big-O time complexity of the following code fragment where input is $n$:

    ```jsx
    for (let i = 0; i < n; i++)
      for (let j = i + 1; j > i; j--)
        for (let k = n; k > j; k--) console.log("*");
    ```

    ### Answer

    ```
    1st loop T(n) = O(n)
    2nd loop T(n) = O(1)
    3rd loop T(n) = O(n-1)

    So, T(n) = O(n) * O(1) * O(n-1) = O(n*(n-1)) = O(n^2 - 1) = O(n^2)

    ```

9.  Find the Big-O time complexity of the following code fragment where input is $n$:

    ```jsx
    doSomething(n) {
    	let count = 0;
    	while(n > 0) {
    		for(int i = 1; i<=n; i++) {
    			count++;
    		}
    		n /= 2;
    	}
    }
    ```

10. Re-arrange the following functions in the increasing order of their Big-O complexity:

    4n^2, logn, 20n, log(n!), n^n, 2^n, 3^n, nlogn, log[(logn)^2], n!, (n-1)!

    ### Answer:

    ```
    logn, log[(logn)^2], nlogn, log(n!), 20n, 4n^2, 2^n, 3^n, n^n, (n-1)!, n!
    ```
