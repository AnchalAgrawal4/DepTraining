//http://www.codewars.com/kata/word-count

function countWords(str) {
 str=str.trim();
 if(str.length===0)
 return 0;
else
 return(str.split(/[\s]+/).length);
}
