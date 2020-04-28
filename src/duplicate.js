function checkDuplicate(numArray = []) {
    //create aset
  let mySet = new Set();
  //variable to check state
  let state = undefined;
  //for each element in array, check whether its distinct
  numArray.forEach((element) => {
    if (!mySet.has(element)) {
      mySet.add(element);
      state = 'the array has no duplicate';
    } else {
    //   return true;
    state = `the array has a duplicate element for ${element}`;
    }
  })
  return state;
}


console.log(checkDuplicate([1,2,2,1]));