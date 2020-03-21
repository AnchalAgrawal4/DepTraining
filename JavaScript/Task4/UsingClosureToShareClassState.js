//http://www.codewars.com/kata/using-closures-to-share-class-state

var Cat = (function() {
  var cats = [];
  var constructor = function(name, weight) {
    if (typeof name == "undefined" || typeof weight == "undefined") {
      throw Error("Invalid Parameters");
    }
    Object.defineProperty(this, "name", {
      get: function() {
        return name;
      }
    });
    Object.defineProperty(this, "weight", {
      get: function() {
        return weight;
      },
      set: function(x) {
        weight = x;
        return weight;
      }
    });
    cats.push(this);
  };
  constructor.averageWeight = function() {
    return (
      cats.reduce(function(sum, cat) {
        return sum + cat.weight;
      }, 0) / cats.length
    );
  };
  return constructor;
})();
