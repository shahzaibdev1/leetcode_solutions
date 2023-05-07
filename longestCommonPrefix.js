/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // If the length is 0, return the 0th element.
  if (strs.length === 1) return strs[0];

  // Start iterating from end of the array
  for (let i = strs[0].length; i >= 0; i--) {
    // Get the word till ith element e.g flowe
    let word = strs[0].slice(0, i);

    // check if word like flowe exists in all other elements in the array.
    let isExist = strs.every((a) => a.startsWith(word));

    if (isExist) return word;
  }
};
