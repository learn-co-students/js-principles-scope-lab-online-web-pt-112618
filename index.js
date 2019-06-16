// Write your solution in this file!
var customerName = 'bob'

//write a function that accesses global variable and uppercases it
function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase()
}


//declare variable in global scope
var bestCustomer;
function setBestCustomer() {
  return bestCustomer = "not bob"
}

//this shows how it overwrites the variable
function overwriteBestCustomer() {
  return bestCustomer = "maybe bob"
}

const leastFavoriteCustomer = "coco";
function changeLeastFavoriteCustomer() {
  return leastFavoriteCustomer = "Assignment to constatnt variable"
}
