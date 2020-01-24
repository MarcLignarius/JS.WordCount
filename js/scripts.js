$(function() {
  $("#userForm").submit(function(event) {
    event.preventDefault();
    let userInput = $("#userInput")
      .val()
      .toLowerCase()
      .replace(/[\.,-\/#!$%"\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, "");
    console.log("userInput", userInput);
    var inputArray = inputToArray(userInput);
    console.log("inputArray", inputArray);
    var wordCount = countWords(inputArray);
    console.log("wordCount", wordCount);
    var sortedCount = sortByCount(wordCount);
    console.log("sortedCount", sortedCount);
  });

  function inputToArray(userInput) {
    // split string by spaces (including spaces, tabs, and newlines)
    var inputArray = userInput.split(/\s+/);
    return inputArray;
  }

  function countWords(inputArray) {
    // create map for word counts
    var wordCount = {};
    inputArray.forEach(function(key) {
      if (wordCount.hasOwnProperty(key)) {
        wordCount[key]++;
      } else {
        wordCount[key] = 1;
      }
    });
    return wordCount;
  }

  function sortByCount(wordCount) {
    // sort by count in descending order
    var sortedCount = [];
    sortedCount = Object.keys(wordCount).map(function(key) {
      return {
        name: key,
        total: wordCount[key]
      };
    });
    sortedCount.sort(function(a, b) {
      return b.total - a.total;
    });
    return sortedCount;
  }
});

// $(function() {
//   $("#userForm").submit(function(event) {
//     event.preventDefault();
//     let userInput = $("#userInput")
//       .val()
//       .toLowerCase()
//       .replace(/[\.,-\/#!$%"\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, "");
//     console.log("userInput", userInput);
//     let wordArray = userInput.split(/\s+/);
//     console.log("wordArray", wordArray);
//     let countedWords = {};
//     wordArray.forEach(function(key) {
//       if (countedWords.hasOwnProperty(key)) {
//         countedWords[key]++;
//       } else {
//         countedWords[key] = 1;
//       }
//       return countedWords;
//     })
//     console.log("countedWords", countedWords);
//     let result = JSON.stringify(countedWords, null, 4);
//     console.log("result", result);
//     $("#output").text(result);
//   });
// });
