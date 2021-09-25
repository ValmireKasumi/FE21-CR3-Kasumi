//function for invoice calculation
function calculateInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice){
    var sum = starterPrice+maindishPrice+dessertPrice+beveragePrice;
    return "Your Invoice: "+sum+" Euro";
}

//function for invoice calculation with 10% discount
function studentInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice){
    var discount = 0.1
    var sum = Math.round((starterPrice+maindishPrice+dessertPrice)*(1-discount))+beveragePrice;
    return "Your Invoice with 10% Discount: "+sum+" Euro";
}

//Invoice 1
var starter_1 = 10;
var maindish_1 = 20;
var dessert_1 = 10;
var beverage_1 = 10;

console.log(calculateInvoice(starter_1,maindish_1,dessert_1,beverage_1));
console.log(studentInvoice(starter_1,maindish_1,dessert_1,beverage_1));

//Invoice 2
var starter_2 = 15;
var maindish_2 = 25;
var dessert_2 = 12;
var beverage_2 = 16;

console.log(calculateInvoice(starter_2,maindish_2,dessert_2,beverage_2));
console.log(studentInvoice(starter_2,maindish_2,dessert_2,beverage_2));

//Invoice 3
var starter_3 = 7;
var maindish_3 = 8;
var dessert_3 = 7;
var beverage_3 = 7;

console.log(calculateInvoice(starter_3,maindish_3,dessert_3,beverage_3));
console.log(studentInvoice(starter_3,maindish_3,dessert_3,beverage_3));



