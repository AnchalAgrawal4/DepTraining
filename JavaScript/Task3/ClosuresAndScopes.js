//http://www.codewars.com/kata/closures-and-scopes/train/javascript

//Solution 1:
function createFunctions(n) {
  const callbacks = [];

  for (let i = 0; i < n; i++) {
    callbacks.push( => i);
  }

  return callbacks;
}


//Solution 2:
function createFunctions(n) {
  var callbacks = [];

  for (var i = 0; i < n; i++) {
    (function() {
      var j = i;
      callbacks.push(function() {
        return j;
      });
    })();
  }

  return callbacks;
}
