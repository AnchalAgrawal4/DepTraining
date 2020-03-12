//http://www.codewars.com/kata/function-composition-1

function compose() {
  var allMethodNames = arguments;

  return function(n) {
    var ans = n;
    for (var i = allMethodNames.length - 1; i >= 0; i--) {
      ans = allMethodNames[i](ans);
    }
    return ans;
  };
}
