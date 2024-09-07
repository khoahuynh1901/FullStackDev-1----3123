// const h1 = document.getElementsByName("h1");
// const p = document.createElement("p");
// p.innerHTML="I am 24 year old";
// document.body.appendChild(p);


// let list = document.getElementById("car");
// list.firstElementChild;

// const p2 = document.createElement("p");
// p2.appendChild(list.lastElementChild);
// document.body.appendChild(p2);



// exercise 1 capital first letter of every words
// const str = "the quick brown fox"; 
// let words = str.split(' ');

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[1][0].toUpperCase() + words[i].slice(1);
// }

// const result = words.join(' ');
// console.log(result); 

// excersise 2 find the largest 3 interger

// const num1 = 10;
// const num2 = 12;
// const num3 = 13;

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

// console.log(max(num1, num2, num3)); // Output: 13

// max(1,0,1);
// max(0,-10,-20);
// max(510,440, 1000);


// exercise 3 write sum of an array
// function max_sum (sum, end_num){
//     let total = 0;
//     for (let i in sum){

//         total += sum[i];
//     }
//     total = total +  end_num;
//     return total;
  

// }
// console.log(max_sum([1,2,3,4,5], 5)); //

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


// exercise 5 move last three character to the top

 function moveLastThree(str) {

      str = str.slice(-3) + str.slice(0,-3);
      return str;
  
 }
 console.log(moveLastThree("javascript"));