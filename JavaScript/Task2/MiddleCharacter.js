//http://www.codewars.com/kata/get-the-middle-character

function getMiddle(str)
{
  var position, length;
  var calcLength=str.length%2;
  if (calcLength == 0) {
    position = str.length / 2 - 1;
    length = 2;
  } else {
    position = (str.length - 1) / 2;
    length = 1;
  }
  
  return str.substring(position, position + length);
}
