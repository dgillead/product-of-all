let productsSoFarBefore = 1;
let productsSoFarAfter = 1;
let productsBeforeIndex = [];
let productsAfterIndex = [];
let finalProducts = [];
function getAllProductsExceptIndex(arrayOfValues) {
  for (let i = 0; i < arrayOfValues.length; i++) {
    productsBeforeIndex[i] = productsSoFarBefore;
    productsSoFarBefore *= arrayOfValues[i];
    productsAfterIndex[i] = productsSoFarAfter;
    productsSoFarAfter *= arrayOfValues[arrayOfValues.length - i - 1];
  }
  productsAfterIndex.reverse();
  for (let j = 0; j < productsAfterIndex.length; j++) {
    finalProducts[j] = productsBeforeIndex[j] * productsAfterIndex[j];
  }
  return finalProducts;
};

getAllProductsExceptIndex([1, 7, 3, 4]);
