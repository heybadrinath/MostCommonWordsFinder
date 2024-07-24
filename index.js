const fs = require("fs");
const lodash = require("lodash");

function countWords(filePath) {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log("err in readfile: ", err);
      return;
    }
    const words = data.toLowerCase().split(" ")
    const wordsCounter = {};
    words.forEach((word) => {
      wordsCounter[word] = (wordsCounter[word] || 0) + 1;
    });

    const sortedWords = lodash
      .orderBy(Object.entries(wordsCounter), [1], ["desc"])
      .slice(0, 10);
    console.log('Top 10 most common words in the file');
    sortedWords.forEach(([word, count]) => {
      console.log(`${word} : ${count}`);
    });
  });
}

countWords("./textfile.txt")