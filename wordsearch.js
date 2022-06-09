const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  let result;
  for (l of horizontalJoin) {
    if (l === word) {
      return true
     
    }
  
  
  }


  let array = [];
  for (let i = 0; i < letters[0].length; i++) {
    let col = [];
    for (let j = 0; j < letters.length; j++) {
      col.push(letters[j][i]);
    }
    array.push(col);
  }
  for (let index in array) {
    const arrayJoin = array[index].join("");
    if (arrayJoin.includes(word)) {
      return true;
    }
  }
  return false
};


module.exports = wordSearch;
