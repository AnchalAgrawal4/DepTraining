http://www.codewars.com/kata/partition-on

function partitionOn(pred, items) {
    var predicateTrue = items.filter(pred);
    var predicateFalse = items.filter(function(n){
    return !pred(n);
    });
    items.length=0;
    for(var i=0;i<predicateFalse.length;i++)
    {
      items[i]=predicateFalse[i];
    }
     for(var i=0;i<predicateTrue.length;i++)
    {
      items.push(predicateTrue[i]);
    }
   
    return predicateFalse.length;
    }