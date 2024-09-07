
// exercise 1 capital first letter of every words
// const str = "the quick brown fox"; 
// let words = str.split(' ');

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
// }

// const result = words.join(' ');
// console.log(result); 



// excersise 2 find the largest 3 integer

// function max(a, b, c) {
//     const arr = [a, b, c];  // Directly initialize the array with the numbers
//     let maxNum = arr[0];     // Assume the first element is the largest
    
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > maxNum) {
//             maxNum = arr[i];  // Update maxNum if a larger value is found
//         }
//     }
    
//     return maxNum;  // Return the largest number
// }
// console.log(max(1,0,1));
// console.log(max(0,-10,-20));
// console.log(max(510,440, 1000));


// exercise 3 write sum of an array
// function array_max_sum(arr, k) {
//      let maxSum = arr.slice(0, k).reduce((a, b) => a + b, 0);
//      let currentSum = maxSum;
     
//      for (let i = k; i < arr.length; i++) {
//          currentSum += arr[i] - arr[i - k];
//          if (currentSum > maxSum) {
//              maxSum = currentSum;
//          }
//      }
     
//      return maxSum;
//  }
 
//  console.log(array_max_sum([1, 2, 3, 14, 5], 2));  // Output: 19
//  console.log(array_max_sum([2, 3, 5, 1, 6], 3));  // Output: 10
//  console.log(array_max_sum([9, 3, 5, 1, 7], 2));  // Output: 12
 
// exercise 4 finding angle degree
// function angle_Type(angle) {
//     if (angle > 0 && angle < 90) {
//         return "Acute angle";
//     } else if (angle === 90) {
//         return "Right angle";
//     } else if (angle > 90 && angle < 180) {
//         return "Obtuse angle";
//     } else if (angle === 180) {
//         return "Straight angle";
//     } else {
//         return "Invalid angle";  // Handle cases outside 0-180 degrees
//     }

// }
// console.log(angle_Type(47))
// console.log(angle_Type(90))
// console.log(angle_Type(145))
// console.log(angle_Type(180))



// exercise 5 move last three character to the top

//  function moveLastThree(str) {

//       str = str.slice(-3) + str.slice(0,-3);
//       return str;
  
//  }
//  console.log(moveLastThree("javascript"));
//  console.log(moveLastThree("Python"));
//  console.log(moveLastThree("Hi"));