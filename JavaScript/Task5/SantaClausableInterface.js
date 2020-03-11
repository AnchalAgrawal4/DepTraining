//http://www.codewars.com/kata/santaclausable-interface

function isSantaClausable(obj)
{
return ['sayHoHoHo','distributeGifts','goDownTheChimney'].every(function(method){return typeof obj[method] == function})
}