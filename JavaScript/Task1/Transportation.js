//http://www.codewars.com/kata/transportation-on-vacation

function rentalCarCost(d) {
amount=d*40;
    if(d>=3 && 7>d ) amount=amount-20;
    if(d>=7) amount=amount-50;
return amount;
}
