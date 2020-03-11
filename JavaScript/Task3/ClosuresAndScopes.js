//http://www.codewars.com/kata/closures-and-scopes/train/javascript

//Solution 1:
function createFunctions(n) {
  let callbacks = [];

  for (let i = 0; i < n; i++) {
    callbacks.push(function() {
      return i;
    });
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
        console.log(j);
        return j;
      });
    })();
  }

  return callbacks;
}
