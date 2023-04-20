function hasTargetSum(array, target) {
  // Write your algorithm here

  for(let i=0; i<array.length-1; i++){

    for(let j=i+1; j<array.length; j++){
      
      if((array[i]+array[j]) === target) return true      

    }

  }

  return false
}

/* 
  Write the Big O time complexity of your function here
  O(n2)
*/

/* 
  Add your pseudocode here
  1. We need to iterate over arrays mean we need to use nested loops
  2. First iteration will use i counter and it will iterate till array length
  3. In second iteration use j counter which will be i+1 and increament till array length
  4. check condition and return true if true , array[i]+array[j] === target
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
