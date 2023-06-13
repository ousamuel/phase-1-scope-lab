// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName(){
  // const upper = customerName.toUpperCase();
  // let name = 'bob';
  customerName = customerName.toUpperCase();
}
var bestCustomer;
function setBestCustomer(string = 'not bob'){
  bestCustomer = string;
}

function overwriteBestCustomer(){
  setBestCustomer('maybe bob');
}
const leastFavoriteCustomer = "bob";
function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = "g";
}