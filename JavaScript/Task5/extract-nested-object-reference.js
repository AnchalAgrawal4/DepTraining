//http://www.codewars.com/kata/extract-nested-object-reference

Object.prototype.hash = function(string) {
  var properties = string.split(".");
  var myObj = this;
  for (let i = 0; i < properties.length; i++) {
    !!myObj && (myObj = myObj[properties[i]]);
  }
  return myObj;
};
