//http://www.codewars.com/kata/transportation-on-vacation

function rentalCarCost(d) {
var amount=d*40;
    if(d>=3 && 7>d ) amount-=20;
    if(d>=7) amount-=50;
return amount;
}
