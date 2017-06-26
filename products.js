// for every value in the array
  // iterate over the array
  // multiply every value together except for the value at the current index
  // return all multiplied values

function getAllProductsExceptIndex(arrayOfValues) {
  for (let i = 0; i < arrayOfValues.length; i++) {
    console.log(i);
    console.log(arrayOfValues.splice(i, 1));
    console.log(arrayOfValues);
  }
};

getAllProductsExceptIndex([1, 7, 3, 4]);
