/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length != str2.length){
    return false;
}
for (i of str1){
    let counter = 0;
    for (j of str2){
        if(i==j){
            counter =1;
            break;
        }
    }
    if (counter==0){
        return false;
    }
}
return true;
}

module.exports = isAnagram;
