//http://www.codewars.com/kata/function-composition

function compose(f, g) {
  return function(...val) {
    return f(g(...val));
  };
}
