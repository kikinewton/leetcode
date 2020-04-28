function twoSum(targetValue, numArray = []){
    //create a map
    let num_map = new Map();
    //loop through the numArray
    for (let i = 0; i < numArray.length; i++) {
      //calculate the complement
      let complement = targetValue - numArray[i];
      //return the indices of the two element  that sum to the target as a map
      if (num_map.has(complement)) {
        let out = new Map();
        out.set(num_map.get(complement), i)
        return out;
      }
      //else insert the number and the index into num_map 
      num_map.set(numArray[i], i)
    }
    return 'Error somewhere, please check input';
  }
  
  const out = twoSum(5, [1, 2, 4, 5, 2, 6, 60, 0]);
  console.log(out);