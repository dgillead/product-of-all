// for every value in the array
  // iterate over the array
  // multiply every value together except for the value at the current index
  // return all multiplied values

function getAllProductsExceptIndex(arrayOfValues) {
  let product = 1;
  let productArray = [];
  for (let i = 0; i < arrayOfValues.length; i++) {
    for (let j = 0; j < arrayOfValues.length; j++) {
      if (i != j) {
        product *= arrayOfValues[j];
      }
    }
    productArray.push(product);
    product = 1;
  }
  console.log(productArray);
};

getAllProductsExceptIndex([1, 7, 3, 4]);
